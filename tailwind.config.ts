import type { Config } from 'tailwindcss'
import { rose } from 'tailwindcss/colors'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./app/**/*.{tsx,mdx}', './components/**/*.{tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: rose,
      },
      fontFamily: {
        sans: ['InterVariable', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config
