import { NextPage } from 'next'
import ErrorLayout from 'layouts/ErrorLayout'

const ErrorPage: NextPage = () => (
  <ErrorLayout
    title="502"
    text="It appears that our software is being updated or under maintenance. Try again in a few minutes."
  />
)

export default ErrorPage
