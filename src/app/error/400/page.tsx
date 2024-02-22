import { ErrorLayout } from '@/components/layouts'
import { siteName } from '@/components/metadata'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: `400 - ${siteName}`,
}

export default function Page() {
  return (
    <ErrorLayout
      title="400"
      text="It appears the request cannot be fulfilled due to bad syntax. Sorry about that."
    />
  )
}
