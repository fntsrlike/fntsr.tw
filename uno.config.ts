import {
  defineConfig,
  presetTypography,
  presetWind,
} from 'unocss'

export default defineConfig({
  presets: [
    presetTypography({
      cssExtend: {
        'a': {
          'text-decoration': 'none',
        },
        'li': {
          'margin-top': '0em',
          'margin-bottom': '0em',
        },
        'ul ul, ul ol, ol ul, ol ol': {
          'marginTop': '.25em',
          'marginBottom': '.25em'
        },
      },
    }),
    presetWind(),
  ],
})
