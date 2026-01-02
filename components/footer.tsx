import { ReactNode } from 'react'
import type { LinkType } from '../types'
import { StyledLink } from './links'

export function FooterLink({
  children,
  href,
  target,
  rel,
  attribution,
  linkType,
}: {
  children: ReactNode
  href: string
  target?: string
  rel?: string
  attribution?: boolean
  linkType?: LinkType
}) {
  return (
    <StyledLink
      href={href}
      target={target}
      rel={rel}
      attribution={attribution}
      linkType={linkType}
      className={[
        'mx-2 text-sm text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300',
        'transition-colors duration-300',
      ]}
    >
      {children}
    </StyledLink>
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
  let year = '2004-2026'
  if (typeof onlyCurrentYear !== undefined && onlyCurrentYear) {
    year = '2026'
  }
  return (
    <footer className="mt-auto bg-zinc-100 dark:bg-zinc-900/50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <p className="text-xs text-zinc-500 sm:text-sm dark:text-zinc-400">
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
