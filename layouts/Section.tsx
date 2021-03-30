import { FunctionComponent } from 'react'

type Props = {
  title: string
  subtitle: string
}

const Section: FunctionComponent<Props> = ({ children, title, subtitle }) => (
  <section className="section">
    <div className="container">
      <div className="heading">
        <h1>{title}</h1>
        <h2 className="subtitle">{subtitle}</h2>
      </div>
      <div className="content">{children}</div>
    </div>
  </section>
)

export default Section
