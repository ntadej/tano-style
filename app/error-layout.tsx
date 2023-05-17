import { ReactNode } from 'react'

export default function ErrorLayout({
  children,
  title,
  text,
}: {
  children?: ReactNode
  title: string
  text: string
}) {
  return (
    <section className="hero hero-error is-fullheight">
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
}
