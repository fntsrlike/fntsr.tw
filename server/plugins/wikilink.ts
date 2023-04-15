export default defineNitroPlugin((nitroApp) => {
  function replaceWikiLinksWithImages(input: string): string {
    const pattern =
      /(!)?\[\[([\w/._-]+)(?:\|([\w\s]+))?(?:(?:\|(\d+)(?:x(\d+))?)?)?\]\]/g
    const output = input.replace(
      pattern,
      (_, isImageLink, filename, caption, width, height) => {
        if (isImageLink) {
          const captionText = caption || filename
          const url = filename.replace(/\s/g, '_')
          const imgTag = `<img src="/${url}" alt="${captionText}"`
          const style = ` style="width:${
            width ? width + 'px' : 'auto'
          }; height:${height ? height + 'px' : 'auto'};"`
          const closingTag = '/>'
          return `${imgTag}${style}${closingTag}`
        } else {
          return `[${caption || filename}](${filename.replace(/\s/g, '_')})`
        }
      }
    )
    return output
  }

  nitroApp.hooks.hook('content:file:beforeParse', (file) => {
    if (file._id.endsWith('.md')) {
      file.body = replaceWikiLinksWithImages(file.body)
    }
  })
})
