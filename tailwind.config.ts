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
        brand: {
          light: rose[700],
          dark: rose[400],
        },
      },
      fontFamily: {
        sans: ['Inter Variable', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [typography],
} satisfies Config
