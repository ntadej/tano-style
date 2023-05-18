/* eslint-disable sort-imports */
import { Metadata } from 'next'
import { ReactNode } from 'react'
import { rootMetadata } from 'components/metadata'

import '@fontsource/inter/variable.css'
import '_index.css'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 dark:bg-zinc-900">{children}</body>
    </html>
  )
}

export const metadata: Metadata = rootMetadata
