export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('content:file:afterParse', (file) => {
    if (!file._id.endsWith('.md')) {
      return
    }
    if (file.title === undefined) {
      return
    }
    file.head = file.head || {}
    file.head.title = file.head.title || `${file.title} - 深藏若虛`
  })
})
