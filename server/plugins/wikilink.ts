export default defineNitroPlugin((nitroApp) => {
  function convertWikiLink(text: string): string {
    const renderRegExp = /!\[\[([\w/.\-_ ]+)\|?([^[\]]+)?\]\]/g
    const linkRegExp = /\[\[([\w/.\-_ ]+)\|?([^\[\]]+)?\]\]/g
    const imageSizeRegExp = /!\[\[[\w/.\-_ ]+\|(\d+)(?:[xX](\d+))?\]\]/

    let isInCodeBlock = false
    const convertedLines = text.split('\n').map((line) => {
      const isCodeBlockSyntax = line.startsWith('```') || line.startsWith('~~~')
      isInCodeBlock = isCodeBlockSyntax ? !isInCodeBlock : isInCodeBlock

      if (!isInCodeBlock) {
        line = convertFilePath(line)
        line = convertImageMarkdown(line, imageSizeRegExp, renderRegExp)
        line = convertLinkMarkdown(line, linkRegExp)
      }
      return line
    })

    return convertedLines.join('\n')
  }

  function convertFilePath(line: string) {
    return line
      .replaceAll('[[public/attachments/', '[[/attachments/')
      .replaceAll('[[content/', '[[/')
  }

  function convertImageMarkdown(
    line: string,
    imageSizeRegExp: RegExp,
    renderRegExp: RegExp
  ) {
    return line.replaceAll(renderRegExp, (match, imgPath, imgAlias) => {
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
    return line.replaceAll(linkRegExp, (_, linkPath, linkAlias) => {
      const isExist = linkPath.startsWith('/')
      const unExistNoteLink = linkAlias || linkPath
      const linkMarkdown = `[${linkAlias || linkPath}](${linkPath})`
      return isExist ? linkMarkdown : unExistNoteLink
    })
  }

  nitroApp.hooks.hook('content:file:beforeParse', (file) => {
    if (file._id.endsWith('.md')) {
      file.body = convertWikiLink(file.body)
    }
  })
})
