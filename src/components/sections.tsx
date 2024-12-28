import { ReactNode } from 'react'
import { classNames } from '../utils'
import { StyledLink } from './links'

interface LinkDict {
  [Key: string]: string
}

export function Link({
  children,
  href,
  target,
  rel,
}: {
  children: string
  href: string
  target?: string
  rel?: string
}) {
  return (
    <StyledLink
      href={href}
      target={target}
      rel={rel}
      className={[
        'font-medium text-zinc-900 dark:text-zinc-200',
        'underline',
        'transition-all duration-300',
        'decoration-brand-primary decoration-from-font hover:decoration-2',
      ]}
    >
      {children}
    </StyledLink>
  )
}

export function Section({
  children,
  title,
  subtitle,
}: {
  children: ReactNode
  title: string
  subtitle: string | ReactNode
}) {
  return (
    <section className="section">
      <div className="container mx-auto mt-2 p-4">
        <h1 className="small-caps text-2xl font-bold text-zinc-800 sm:text-3xl dark:text-zinc-100">
          {title}
        </h1>
        <h2 className="mb-4 mt-1 text-base text-zinc-700 sm:text-lg dark:text-zinc-400">
          {subtitle}
        </h2>

        {children}
      </div>
    </section>
  )
}

export function Content({
  children,
  fullWidth,
}: {
  children: ReactNode
  fullWidth?: boolean
}) {
  return (
    <div
      className={classNames(
        'prose prose-sm prose-zinc sm:prose-base dark:prose-invert',
        fullWidth ? 'max-w-none' : '',
        'prose-headings:small-caps prose-headings:mb-1',
        'prose-headings:text-zinc-800 dark:prose-headings:text-zinc-100',
        'prose-a:underline prose-a:transition-all prose-a:duration-300',
        'prose-a:dark:text-zinc-200',
        'prose-a:decoration-brand-primary prose-a:decoration-from-font',
        'hover:prose-a:decoration-2',
      )}
    >
      {children}
    </div>
  )
}

export function Hero({ children }: { children: ReactNode }) {
  return (
    <div className="relative isolate px-6">
      {/* TODO: decoration */}
      <div className="container mx-auto py-8 sm:py-12 lg:max-w-4xl">{children}</div>
      {/* TODO: decoration */}
    </div>
  )
}

export function RemoteLinkList({ links }: { links: LinkDict }) {
  const rows = []
  for (const link in links) {
    rows.push(
      <li key={link}>
        <a href={links[link]} target="_blank" rel="noreferrer">
          {link}
        </a>
      </li>,
    )
  }
  return <ul className="list-none">{rows}</ul>
}
