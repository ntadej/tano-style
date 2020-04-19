import { NextPage } from 'next';
import ErrorLayout from '../../layouts/ErrorLayout'

const ErrorPage: NextPage = () => (
  <ErrorLayout title="403" text="It appears you are not authorised to visit this page." />
);

export default ErrorPage;
