import '_index.sass'

import type { AppProps } from 'next/app'

const MainApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
)

export default MainApp
