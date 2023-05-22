import { ErrorLayout } from 'components/layouts'
import { Metadata } from 'next'
import { siteName } from 'components/metadata'

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
