import { Button } from '@/components/buttons'
import { ErrorLayout } from '@/components/layouts'
import { siteName } from '@/components/metadata'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: `401 - ${siteName}`,
}

export default function Page() {
  return (
    <ErrorLayout title="401" text="It appears you need to login to visit this page.">
      <form
        method="GET"
        action="{{.ProxyPrefix}}/start"
        className="flex-shrink-0 px-6 py-6 sm:border-l-2 sm:border-l-brand-primary sm:py-2"
      >
        <input type="hidden" name="rd" value="{{.Redirect}}" />
        <Button type="submit">Sign in</Button>
      </form>
    </ErrorLayout>
  )
}
