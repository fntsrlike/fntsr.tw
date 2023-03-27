export default defineNitroPlugin((nitroApp) => {
  const imageRemark = {
    with_width: {
      regexp: /!\[\[(.+\.(jpg|png|jpeg))\|(\d+)\]\]/g,
      markup: '![$1]($1){ style="width:$3px;" }',
    },
    with_width_height: {
      regexp: /!\[\[(.+\.(jpg|png|jpeg))\|(\d+)x(\d+)\]\]/g,
      markup: '![$1]($1){ style="width:$3px;height:$4px;" }',
    },
  }

  const wikilinkRemark = {
    normal: {
      regexp: /\[\[(.+)\]\]/g,
      markup: '[$1]($1)',
    },
    with_alias: {
      regexp: /\[\[(.+)\|(.+)\]\]/g,
      markup: '[$2]($1)',
    },
  }

  const applyRemark = function (
    text: string,
    replacement: { regexp: RegExp; markup: string }
  ) {
    const { regexp, markup } = replacement
    return text.replace(regexp, markup)
  }

  nitroApp.hooks.hook('content:file:beforeParse', (file) => {
    if (file._id.endsWith('.md')) {
      // apply_remark list is ordered
      file.body = applyRemark(file.body, imageRemark.with_width)
      file.body = applyRemark(file.body, imageRemark.with_width_height)
      file.body = applyRemark(file.body, wikilinkRemark.with_alias)
      file.body = applyRemark(file.body, wikilinkRemark.normal)
    }
  })
})
