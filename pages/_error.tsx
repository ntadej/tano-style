import { NextPage } from 'next';
import ErrorLayout from 'layouts/ErrorLayout'

type Props = {
  statusCode: string
}

const ErrorPage: NextPage<Props> = ({ statusCode }) => (
  <ErrorLayout title={statusCode} text={statusCode
    ? `An error ${statusCode} occurred on server`
    : 'An error occurred on client'} />
);

export default ErrorPage;
