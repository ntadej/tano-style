import { FunctionComponent, ReactNode } from 'react'

type Props = {
  children: ReactNode
  title: string
  subtitle: string
}

const Section: FunctionComponent<Props> = ({ children, title, subtitle }) => (
  <section className="section">
    <div className="container">
      <div className="heading">
        <h2>{title}</h2>
        <h3 className="subtitle">{subtitle}</h3>
      </div>
      <div className="content">{children}</div>
    </div>
  </section>
)

export default Section
