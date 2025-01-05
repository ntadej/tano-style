import { RootLayout } from '@/components/layouts'
import { rootMetadata } from '@/components/metadata'
import { rootViewport } from '@/components/viewport'
import { Metadata, Viewport } from 'next'

import '@/index.css'

export default RootLayout

export const metadata: Metadata = rootMetadata
export const viewport: Viewport = rootViewport
