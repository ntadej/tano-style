import { RootLayout } from '@/components/layouts'
import { rootMetadata } from '@/components/metadata'
import { rootViewport } from '@/components/viewport'
import { Metadata, Viewport } from 'next'
import { ReactNode } from 'react'

import '@/index.css'

export default function PageLayout({ children }: { children: ReactNode }) {
  return <RootLayout>{children}</RootLayout>
}

export const metadata: Metadata = rootMetadata
export const viewport: Viewport = rootViewport
