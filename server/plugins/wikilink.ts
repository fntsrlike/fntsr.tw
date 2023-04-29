export default defineNitroPlugin((nitroApp) => {
  function convertWikiLink(text: string): string {
    const renderRegExp = /!\[\[([\w/.]+)\|?([^[\]]+)?\]\]/
    const linkRegExp = /\[\[([\w/.]+)\|?([^[\]]+)?\]\]/
    const imageSizeRegExp = /!\[\[[\w/.]+\|(\d+)(?:[xX](\d+))?\]\]/
    let newText = ''
    let newLine = ''
    let match
    let isInCodeBlock = false
    let isCodeBlockSyntax

    for (const line of text.split('\n')) {
      isCodeBlockSyntax = line.slice(0, 3) === '```'
      if (isCodeBlockSyntax) {
        isInCodeBlock = !isInCodeBlock
      }

      if (isInCodeBlock) {
        newText += line + '\n'
        continue
      }

      newLine = line

      while ((match = renderRegExp.exec(newLine)) !== null) {
        let style = ''
        const [, imgPath, imgAlias] = match
        const imgSizeMatch = imageSizeRegExp.exec(match[0])

        if (imgSizeMatch !== null) {
          const [, width, height] = imgSizeMatch
          const styleWidth = width ? `width=${width}px` : ''
          const styleHeight = height ? `height=${height}px` : ''
          style = `{ ${styleWidth} ${styleHeight} }`
        }

        const alias = imgSizeMatch || !imgAlias ? imgPath : imgAlias
        const imgMarkdown = `![${alias}](${imgPath})${style}`
        newLine = newLine.replace(match[0], imgMarkdown)
      }

      while ((match = linkRegExp.exec(newLine)) !== null) {
        const linkPath = match[1]
        const linkAlias = match[2]
        const linkMarkdown = `[${linkAlias || linkPath}](${linkPath})`
        newLine = newLine.replace(match[0], linkMarkdown)
      }

      newText += newLine + '\n'
    }
    return newText
  }

  nitroApp.hooks.hook('content:file:beforeParse', (file) => {
    if (file._id.endsWith('.md')) {
      file.body = convertWikiLink(file.body)
    }
  })
})
