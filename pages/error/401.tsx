import { NextPage } from 'next';
import ErrorLayout from '../../layouts/ErrorLayout'

const ErrorPage: NextPage = () => (
  <ErrorLayout title="401" text="It appears you need to login to visit this page." />
);

export default ErrorPage;
