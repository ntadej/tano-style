import { ReactNode } from 'react'

export function FooterLink({
  children,
  href,
  target,
  rel,
  attribution,
}: {
  children: ReactNode
  href: string
  target?: string
  rel?: string
  attribution?: boolean
}) {
  const extraProperties: { [key: string]: string } = {}
  if (target) {
    extraProperties['target'] = target
  }
  if (rel) {
    extraProperties['rel'] = rel
  }
  if (attribution) {
    extraProperties['property'] = 'cc:attributionName'
    extraProperties['rel'] = 'cc:attributionURL'
  }

  return (
    <a
      href={href}
      className="mx-2 text-sm text-zinc-500 transition-colors duration-300 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300"
      {...extraProperties}
    >
      {children}
    </a>
  )
}

export function Footer({
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
  let year = '2004-2025'
  if (typeof onlyCurrentYear !== undefined && onlyCurrentYear) {
    year = '2025'
  }
  return (
    <footer className="mt-auto">
      <div className="container mx-auto mb-2 p-4">
        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            &copy; {year}{' '}
            <FooterLink href={homeUrl ? homeUrl : 'https://tano.si'} attribution={true}>
              Tadej Novak
            </FooterLink>
          </p>

          <div className="-mx-2 mt-3 flex sm:mt-0">{children}</div>
        </div>

        {extra && (
          <div className="mt-3 text-center text-sm text-zinc-500 dark:text-zinc-400">
            {extra}
          </div>
        )}
      </div>
    </footer>
  )
}
