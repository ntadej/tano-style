import { ReactNode } from 'react'

export default function Footer({
  children,
  extra,
  homeUrl,
  onlyCurrentYear,
}: {
  children?: ReactNode
  extra?: string
  homeUrl?: string
  onlyCurrentYear?: boolean
}) {
  let year = '2004-2023'
  if (typeof onlyCurrentYear !== undefined && onlyCurrentYear) {
    year = '2023'
  }
  return (
    <footer className="footer">
      <div className="container">
        <nav className="level">
          <div className="level-left">
            <div className="level-item has-special-links">
              &copy; {year}{' '}
              <a
                href={homeUrl ? homeUrl : 'https://tano.si'}
                property="cc:attributionName"
                rel="cc:attributionURL"
              >
                Tadej Novak
              </a>
            </div>
          </div>
          <div className="level-right">
            <div className="level-item has-special-links">{children}</div>
          </div>
        </nav>
        {extra && <div>{extra}</div>}
      </div>
    </footer>
  )
}
