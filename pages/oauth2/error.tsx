import { NextPage } from 'next'
import ErrorLayout from 'layouts/ErrorLayout'

export const config = {
  unstable_runtimeJS: false,
}

const ErrorPage: NextPage = () => <ErrorLayout title="403" text={'{{.Message}}'} />

export default ErrorPage
