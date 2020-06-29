import { NextPage } from 'next';
import ErrorLayout from 'layouts/ErrorLayout'

const ErrorPage: NextPage = () => (
  <ErrorLayout title="400" text="It appears the request cannot be fulfilled due to bad syntax. Sorry about that." />
);

export default ErrorPage;
