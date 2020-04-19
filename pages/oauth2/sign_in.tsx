import { NextPage } from 'next';
import ErrorLayout from '../../layouts/ErrorLayout'

const ErrorPage: NextPage = () => (
  <ErrorLayout title="401" text="It appears you need to login to visit this page.">
    <form method="GET" action="PROXYPREFIX/start" className="error-special">
      <input type="hidden" name="rd" value="{{.Redirect}}" />
      <button type="submit" className="button is-primary is-outlined">Sign in</button>
    </form>
  </ErrorLayout>
);

export default ErrorPage;
