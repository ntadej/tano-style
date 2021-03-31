import { NextPage } from 'next'
import ErrorLayout from 'layouts/ErrorLayout'

export const config = {
  unstable_runtimeJS: false,
}

const ErrorPage: NextPage = () => (
  <ErrorLayout title="401" text="It appears you need to login to visit this page.">
    <form method="GET" action="{{.ProxyPrefix}}/start" className="error-special">
      <input type="hidden" name="rd" value="{{.Redirect}}" />
      <button type="submit" className="button is-primary is-outlined">
        Sign in
      </button>
    </form>
  </ErrorLayout>
)

export default ErrorPage
