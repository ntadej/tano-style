import { Metadata } from 'next'
import { siteName } from 'components/metadata'
import ErrorLayout from 'app/error-layout'

export const metadata: Metadata = {
  title: `401 - ${siteName}`,
}

export default function Page() {
  return (
    <ErrorLayout title="401" text="It appears you need to login to visit this page.">
      <form method="GET" action="{{.ProxyPrefix}}/start" className="error-special">
        <input type="hidden" name="rd" value="{{.Redirect}}" />
        <button type="submit" className="button is-primary is-outlined">
          Sign in
        </button>
      </form>
    </ErrorLayout>
  )
}
