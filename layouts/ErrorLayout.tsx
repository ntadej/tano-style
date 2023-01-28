import { FunctionComponent, ReactNode } from 'react'
import HeadSetup from './HeadSetup'

type Props = {
  children?: ReactNode
  title: string
  text: string
}

const siteName = process.env.SITE_NAME ? process.env.SITE_NAME : 'Tano.si'

const ErrorLayout: FunctionComponent<Props> = ({ children, title, text }) => (
  <section className="hero hero-error is-fullheight">
    <HeadSetup title={title} siteName={siteName} />

    <div className="hero-body error">
      <h1 className="error-title">{title}</h1>
      <div className="error-subtitle-container">
        <h2 className="error-subtitle">{text}</h2>
      </div>
      {children}
    </div>

    <div className="hero-foot">&copy; 2023 Tadej Novak</div>
  </section>
)

export default ErrorLayout
