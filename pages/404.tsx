import { NextPage } from 'next';
import ErrorLayout from 'layouts/ErrorLayout'

const ErrorPage: NextPage = () => (
  <ErrorLayout title="404" text="It appears the page you were looking for doesn't exist. Sorry about that." />
);

export default ErrorPage;
