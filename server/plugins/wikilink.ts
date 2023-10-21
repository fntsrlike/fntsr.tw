export default defineNitroPlugin((nitroApp) => {
  function convertWikiLink(text: string): string {
    const renderRegExp = /!\[\[([\w/.]+)\|?([^[\]]+)?\]\]/g
    const linkRegExp = /\[\[([\w/.]+)\|?([^[\]]+)?\]\]/g
    const imageSizeRegExp = /!\[\[[\w/.]+\|(\d+)(?:[xX](\d+))?\]\]/

    let isInCodeBlock = false
    const convertedLines = text.split('\n').map((line) => {
      const isCodeBlockSyntax = line.startsWith('```')
      isInCodeBlock = isCodeBlockSyntax ? !isInCodeBlock : isInCodeBlock

      if (!isInCodeBlock) {
        line = convertImageMarkdown(line, imageSizeRegExp, renderRegExp)
        line = convertLinkMarkdown(line, linkRegExp)
      }
      return line
    })

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

      const filename = imgPath.split('/').pop()
      const alias = imgSizeMatch || !imgAlias ? filename : imgAlias
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
