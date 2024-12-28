import { ButtonHTMLAttributes, ReactNode } from 'react'
import { classNames } from '../utils'
import { StyledLink } from './links'

export function Button({
  children,
  type,
}: {
  children: ReactNode
  type: ButtonHTMLAttributes<HTMLButtonElement>['type']
}) {
  return (
    <button
      type={type}
      className={classNames(
        'transform rounded-lg px-6 py-3 text-lg font-medium tracking-wide',
        'hover:brand-primary bg-brand-secondary text-zinc-50 hover:text-zinc-100',
        'transition-colors duration-300',
      )}
    >
      {children}
    </button>
  )
}

export function ButtonLink({
  children,
  href,
  target,
  rel,
}: {
  children: ReactNode
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
        'transform rounded-lg px-6 py-3 text-lg font-medium tracking-wide',
        'bg-primary-700 text-zinc-50 hover:bg-primary-600 hover:text-zinc-100',
        'transition-colors duration-300',
      ]}
    >
      {children}
    </StyledLink>
  )
}
