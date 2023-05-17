import { ReactNode } from 'react'

export default function Section({
  children,
  title,
  subtitle,
}: {
  children: ReactNode
  title: string
  subtitle: string
}) {
  return (
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
}
