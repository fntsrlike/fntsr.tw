// Learn more at https://tailwindcss.com/docs/configuration
import type { Config } from 'tailwindcss'
export default <Partial<Config>>{
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class',
  mode: 'jit',
}
