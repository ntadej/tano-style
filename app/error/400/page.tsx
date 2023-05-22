import { ErrorLayout } from 'components/layouts'
import { Metadata } from 'next'
import { siteName } from 'components/metadata'

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
