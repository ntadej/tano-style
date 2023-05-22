import { ErrorLayout } from 'components/layouts'
import { Metadata } from 'next'
import { siteName } from 'components/metadata'

export const metadata: Metadata = {
  title: `401 - ${siteName}`,
}

export default function Page() {
  return (
    <ErrorLayout title="401" text="It appears you need to login to visit this page." />
  )
}
