// Learn more at https://tailwindcss.com/docs/configuration
import type { Config } from 'tailwindcss'
export default <Partial<Config>>{
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class',
  mode: 'jit',
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          // this is for prose class
          css: {
            li: {
              'margin-top': '0em',
              'margin-bottom': '0em',
            },
          },
        },
      },
    },
  },
}
