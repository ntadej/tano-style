import { NextPage } from 'next';
import ErrorLayout from '../../layouts/ErrorLayout'

const ErrorPage: NextPage = () => (
  <ErrorLayout title="403" text={'{{.Message}}'} />
);

export default ErrorPage;
