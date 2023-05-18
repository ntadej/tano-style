import ErrorLayout from 'app/error-layout'
import { Metadata } from 'next'
import { siteName } from 'components/metadata'

export const metadata: Metadata = {
  title: `403 - ${siteName}`,
}

export default function Page() {
  return <ErrorLayout title="403" text={'{{.Message}}'} />
}
