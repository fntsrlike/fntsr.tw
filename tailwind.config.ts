// Learn more at https://tailwindcss.com/docs/configuration
import type { Config } from 'tailwindcss'
export default <Partial<Config>>{
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class',
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
          },
        },
        invert: {
          css: {
            color: theme('colors.gray.50'),
          },
        },
      }),
    },
  },
}
