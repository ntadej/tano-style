import { ErrorLayout } from 'components/layouts'
import { siteName } from 'components/metadata'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: `502 - ${siteName}`,
}

export default function Page() {
  return (
    <ErrorLayout
      title="502"
      text="It appears that our software is being updated or under maintenance. Try again in a few minutes."
    />
  )
}
