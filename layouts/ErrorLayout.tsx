import { FunctionComponent } from 'react'
import HeadSetup from './HeadSetup'

type Props = {
  title: string
  text: string
  siteTitle?: string
  siteColor?: string
}

const ErrorLayout: FunctionComponent<Props> = ({
  children,
  title,
  text,
  siteTitle = "Tano.si",
  siteColor = "#DE2A4A"
}) => (
    <section className="hero hero-error is-fullheight">
      <HeadSetup title={title} siteTitle={siteTitle} siteColor={siteColor} />

      <div className="hero-body error">
        <h1 className="error-title">{title}</h1>
        <div className="error-subtitle-container">
          <h2 className="error-subtitle">{text}</h2>
        </div>
        {children}
      </div>

      <div className="hero-foot">
        &copy; 2004-2021 Tadej Novak
      </div>
    </section>
  )

export default ErrorLayout
