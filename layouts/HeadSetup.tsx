import { FunctionComponent } from 'react'
import Head from 'next/head'

type Props = {
  title: string,
  siteTitle: string,
  siteColor: string
}

const Layout: FunctionComponent<Props> = ({
  children,
  title,
  siteTitle,
  siteColor
}) => (
    <Head>
      <title>{title} - {siteTitle}</title>
      <meta charSet="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple_76.png/" />
      <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple_60@2x.png/" />
      <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple_76@2x.png/" />
      <link rel="apple-touch-icon" sizes="167x167" href="/favicon/apple_83.5@2x.png/" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple_60@3x.png/" />
      <link rel="icon" type="image/png" href="/favicon/32.png/" sizes="32x32" />
      <link rel="shortcut icon" sizes="192x192" href="/favicon/192.png/" />
      <link rel="icon" type="image/png" href="/favicon/16.png/" sizes="16x16" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="mask-icon" href="/favicon/apple.svg/" color={siteColor} />
      <meta name="theme-color" content={siteColor} />
      {children}
    </Head>
  )

export default Layout
