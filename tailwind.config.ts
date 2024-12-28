import typography from '@tailwindcss/typography'
import type { Config } from 'tailwindcss'
import { rose, zinc } from 'tailwindcss/colors'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./src/app/**/*.{tsx,mdx}', './src/components/**/*.{tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: rose,
        brand: {
          primary: rose[600],
          secondary: rose[800],
        },
        prose: {
          light: zinc[700],
          dark: zinc[300],
        },
      },
      fontFamily: {
        sans: ['var(--font-ibm-plex-sans)', ...defaultTheme.fontFamily.sans],
        mono: ['var(--font-ibm-plex-mono)', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [typography],
  // darkMode: 'class',
} satisfies Config
