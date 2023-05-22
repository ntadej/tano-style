import { ErrorLayout } from 'components/layouts'
import { siteName } from 'components/metadata'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: `404 - ${siteName}`,
}

export default function Page() {
  return (
    <ErrorLayout
      title="404"
      text="It appears the page you were looking for doesn't exist. Sorry about that."
    />
  )
}
