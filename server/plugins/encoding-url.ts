export default defineNitroPlugin((nitroApp) => {
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
  })
})
