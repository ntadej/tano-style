import { Metadata } from 'next'
import { siteName } from 'components/metadata'
import ErrorLayout from 'app/error-layout'

export const metadata: Metadata = {
  title: `403 - ${siteName}`,
}

export default function Page() {
  return <ErrorLayout title="403" text={'{{.Message}}'} />
}
