export default defineNitroPlugin((nitroApp) => {
  function convertWikiLink(text: string): string {
    let isInCodeBlock = false
    const convertedLines = text.split('\n').map((line) => {
      const isCodeBlockSyntax = line.startsWith('```') || line.startsWith('~~~')
      isInCodeBlock = isCodeBlockSyntax ? !isInCodeBlock : isInCodeBlock

      if (!isInCodeBlock) {
        line = convertFilePath(line)
        line = convertImageMarkdown(line)
        line = convertLinkMarkdown(line)
      }
      return line
    })

    return convertedLines.join('\n')
  }

  function convertFilePath(line: string) {
    return line
      .replaceAll(/\[\[<(.+)>/g, (_, captureGroup) => {
        return "[[" + captureGroup;
      })
      .replaceAll('[[public/attachments/', '[[/attachments/')
      .replaceAll('[[public/images/', '[[/images/')
      .replaceAll('[[content/', '[[/')
      .replaceAll(/\[\[content-\w+\//g, '[[/')
      .replaceAll('[[/_pages/', '[[/')
      .replaceAll('/index', '/')
  }

  function convertImageMarkdown(line: string) {
    const regExp = wikiLinkRegExp(true)
    return line.replaceAll(regExp, (_, imgPath, imgAlias) => {
      const style = sizeToStyle(imgAlias)
      const filename = imgPath.split('/').pop()
      const alias = style !== '' ? filename : imgAlias
      const imgMarkdown = `![${alias}](<${imgPath}>)${style}`
      return imgMarkdown
    })
  }

  function sizeToStyle(alias: string) {
    if (!alias) {
      return ''
    }

    const sizeRegExp = /(\d+)?(?:[xX](\d+))?/
    const sizeMatch = sizeRegExp.exec(alias)
    if (sizeMatch == null || sizeMatch[0] == '') {
      return ''
    }

    const [ _, width, height] = sizeMatch
    const styleWidth = width ? `width=${width}px` : ''
    const styleHeight = height ? `height=${height}px` : ''
    return `{ ${styleWidth} ${styleHeight} }`
  }

  function convertLinkMarkdown(line: string) {
    const regExp = wikiLinkRegExp()
    return line.replaceAll(regExp, (_, linkPath, linkAlias) => {
      const isExist = linkPath.startsWith('/')
      const filename = linkPath.split('/').pop()
      const unExistNoteLink = linkAlias || linkPath
      const linkMarkdown = `[${linkAlias || filename}](<${encondingNoneAlphabetUrl(linkPath)}>)`
      return isExist ? linkMarkdown : unExistNoteLink
    })
  }

  function encondingNoneAlphabetUrl(line: string) {
    return line.split('/').map((str) => encodeURIComponent(str).replaceAll('%25', '%')).join('/')
  }

  const wikiLinkRegExp = function (isRender = false) {
    const regExpSets = {
      han: /\u4E00-\u9FFF/,         // 中文漢字的 Unicode 範圍
      hanExtend: /\u3400-\u4DBF/,   // 中文擴展 A 的 Unicode 範圍
      jpKana: /\u3040-\u30FF/,      // 日文平假名和片假名的 Unicode 範圍
      krHangul: /\uAC00-\uD7AF/,    // 韓文字母的 Unicode 範圍
      enCommon: /\w\-./,            // 所有的英文字母、數字、底線字元、破折號、小數點
      symbol: /%\\\//,              // 百分比字元、斜線與反斜線字元。
      space: /\s/,                  // 空白字元（如空格和 Tab 字元）
      angle: /<>/,                  // 角括號
    }

    const pathSets = new RegExp([
      regExpSets.enCommon.source,
      regExpSets.symbol.source,
      regExpSets.angle.source,
      regExpSets.space.source,
      regExpSets.han.source,
      regExpSets.hanExtend.source,
    ].join('')).source

    const pathPattern = `[${pathSets}]+`
    const aliasPattern = /[^\[\]]+/.source

    const renderSymbol = isRender ? '!' : ''
    const re = `${renderSymbol}\\[\\[\\<?(${pathPattern})\\>?(?:\\|(${aliasPattern}))?\\]\\]`
    return new RegExp(re, 'g')
  }

  nitroApp.hooks.hook('content:file:beforeParse', (file) => {
    if (file._id.endsWith('.md')) {
      file.body = convertWikiLink(file.body)
    }
  })
})
