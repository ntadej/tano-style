import typography from '@tailwindcss/typography'
import type { Config } from 'tailwindcss'
import { rose } from 'tailwindcss/colors'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./src/app/**/*.{tsx,mdx}', './src/components/**/*.{tsx,mdx}'],
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
  plugins: [typography],
} satisfies Config
