import { ErrorLayout } from 'components/layouts'
import { siteName } from 'components/metadata'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: `403 - ${siteName}`,
}

export default function Page() {
  return <ErrorLayout title="403" text={'{{.Message}}'} />
}
