import typography from '@tailwindcss/typography'
import type { Config } from 'tailwindcss'
import { rose, zinc } from 'tailwindcss/colors'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./src/app/**/*.{tsx,mdx}', './src/components/**/*.{tsx,mdx}'],
  theme: {
    extend: {
      fontSize: {
        xs: ['0.75rem', '1rem'], // 12px on 16px
        sm: ['0.84375rem', '1.1875rem'], // 13.5px on 19px [Default: mobile]
        base: ['0.875rem', '1.25rem'], // 14px on 20px   [Default: desktop]
        lg: ['1rem', '1.25rem'], // 16px on 20px
        xl: ['1.125rem', '1.25rem'], // 18px on 20px
        '2xl': ['1.25rem', '1.25rem'], // 20px on 20px
        '3xl': ['1.5rem', '1.5rem'], // 24px on 24px
      },
      colors: {
        primary: rose,
        brand: {
          light: rose[700],
          dark: rose[400],
        },
        prose: {
          light: zinc[800],
          dark: zinc[200],
        },
      },
      fontFamily: {
        sans: ['var(--font-ibm-plex-sans)', ...defaultTheme.fontFamily.sans],
        mono: ['var(--font-ibm-plex-mono)', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [typography],
} satisfies Config
