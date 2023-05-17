import { Metadata } from 'next'
import { ReactNode } from 'react'
import { rootMetadata } from 'components/metadata'

import '_index.sass'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

export const metadata: Metadata = rootMetadata
