/* eslint-disable sort-imports */
import { Metadata } from 'next'
import { ReactNode } from 'react'
import { RootLayout } from 'components/layouts'
import { rootMetadata } from 'components/metadata'

import '@fontsource/inter/variable.css'
import '_index.css'

export default RootLayout

export const metadata: Metadata = rootMetadata
