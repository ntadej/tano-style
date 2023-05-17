import ErrorLayout from 'app/error-layout'

export default function NotFound() {
  return (
    <ErrorLayout
      title="404"
      text="It appears the page you were looking for doesn't exist. Sorry about that."
    />
  )
}
