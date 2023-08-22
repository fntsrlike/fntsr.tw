export default defineNitroPlugin((nitroApp) => {
  function encondingNoneAlphabetUrl(line: string) {
    return line.split('/').map((str) => encodeURIComponent(str)).join('/')
  }

  function isHan(filename: string) {
    const charHan = /[\u4E00-\u9FFF\u3400-\u4DBF]+/
    return charHan.test(filename)
  }

  function isCustomSlug(slug: string | undefined) {
    return !(typeof slug === 'undefined' || slug === '...')
  }

  nitroApp.hooks.hook('content:file:afterParse', (file) => {
    if (!file._id.endsWith('.md')) {
      return
    }

    const path = file._file.split('/').slice(0, -1).join('/')

    if (isCustomSlug(file.slug)) {
      file._path = `/${path}/${file.slug}`
      return
    }

    if (isHan(file._file)) {
      const filename = file._file.split('/').pop().replace('.md', '')
      file._path = `/${path}/${encondingNoneAlphabetUrl(filename)}`
      return
    }
  })
})
