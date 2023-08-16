// Learn more at https://tailwindcss.com/docs/configuration
import type { Config } from 'tailwindcss'

const round = (num: number) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')
const em = (px: number, base: number) => `${round(px / base)}em`

export default <Partial<Config>>{
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class',
  content: ['./pages/**/*.vue', './components/**/*.vue', './layouts/*.vue'],
  mode: 'jit',
  theme: {
    extend: {
      typography: (theme: Function) => ({
        DEFAULT: {
          css: {
            a: {
              'text-decoration': 'none',
            },
            li: {
              'margin-top': '0em',
              'margin-bottom': '0em',
            },
            'ul ul, ul ol, ol ul, ol ol': {
              marginTop: em(4, 16),
              marginBottom: em(4, 16),
            },
          },
        },
        invert: {
          css: {
            color: theme('colors.gray.300'),
          },
        },
      }),
    },
  },
}
