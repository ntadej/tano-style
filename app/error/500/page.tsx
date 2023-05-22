import { ErrorLayout } from 'components/layouts'
import { Metadata } from 'next'
import { siteName } from 'components/metadata'

export const metadata: Metadata = {
  title: `500 - ${siteName}`,
}

export default function Page() {
  return (
    <ErrorLayout
      title="500"
      text="It appears that something is wrong with server configuration. Sorry about that."
    />
  )
}
