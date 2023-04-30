export default defineNitroPlugin((nitroApp) => {
  function convertWikiLink(text: string): string {
    const renderRegExp = /!\[\[([\w/.]+)\|?([^[\]]+)?\]\]/g
    const linkRegExp = /\[\[([\w/.]+)\|?([^[\]]+)?\]\]/g
    const imageSizeRegExp = /!\[\[[\w/.]+\|(\d+)(?:[xX](\d+))?\]\]/

    const lines = text.split('\n')
    const convertedLines = lines.reduce((acc: string[], line: string) => {
      const isCodeBlockSyntax = line.slice(0, 3) === '```'
      if (isCodeBlockSyntax) {
        acc.push(line)
        return acc
      }

      let newLine = line
      const isInCodeBlock =
        acc.length > 0 && acc[acc.length - 1].slice(0, 3) === '```'

      if (!isInCodeBlock) {
        newLine = convertImageMarkdown(newLine, imageSizeRegExp, renderRegExp)
        newLine = convertLinkMarkdown(newLine, linkRegExp)
      }

      acc.push(newLine)
      return acc
    }, [])

    return convertedLines.join('\n')
  }

  function convertImageMarkdown(
    line: string,
    imageSizeRegExp: RegExp,
    renderRegExp: RegExp
  ) {
    return line.replace(renderRegExp, (match, imgPath, imgAlias) => {
      let style = ''
      const imgSizeMatch = imageSizeRegExp.exec(match)

      if (imgSizeMatch !== null) {
        const [, width, height] = imgSizeMatch
        const styleWidth = width ? `width=${width}px` : ''
        const styleHeight = height ? `height=${height}px` : ''
        style = `{ ${styleWidth} ${styleHeight} }`
      }

      const alias = imgSizeMatch || !imgAlias ? imgPath : imgAlias
      const imgMarkdown = `![${alias}](${imgPath})${style}`
      return imgMarkdown
    })
  }

  function convertLinkMarkdown(line: string, linkRegExp: RegExp) {
    return line.replace(linkRegExp, (_, linkPath, linkAlias) => {
      const linkMarkdown = `[${linkAlias || linkPath}](${linkPath})`
      return linkMarkdown
    })
  }

  nitroApp.hooks.hook('content:file:beforeParse', (file) => {
    if (file._id.endsWith('.md')) {
      file.body = convertWikiLink(file.body)
    }
  })
})
