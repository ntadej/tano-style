import clsx from 'clsx'
import { ButtonHTMLAttributes, ReactNode } from 'react'
import type { LinkType } from '../types'
import { StyledLink } from './links'

export function ActionButton({
  children,
  text,
  colors,
  type,
  disabled,
  onClick,
}: {
  children: ReactNode
  text?: string
  colors?: string
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type']
  disabled?: ButtonHTMLAttributes<HTMLButtonElement>['disabled']
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>['onClick']
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={clsx(
        'transform rounded-lg px-6 py-3 tracking-wide',
        text ? text : 'text-lg font-medium',
        colors ? colors : 'bg-primary-700 text-zinc-50',
        disabled && 'opacity-50',
        !colors && !disabled && 'hover:bg-primary-600 hover:text-zinc-100',
        'transition-colors duration-300',
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export function LinkButton({
  children,
  href,
  text,
  colors,
  target,
  rel,
  linkType,
}: {
  children: ReactNode
  href: string
  text?: string
  colors?: string
  target?: string
  rel?: string
  linkType?: LinkType
}) {
  return (
    <StyledLink
      href={href}
      target={target}
      rel={rel}
      linkType={linkType}
      className={[
        'transform rounded-lg px-6 py-3 tracking-wide',
        text ? text : 'text-lg font-medium',
        colors
          ? colors
          : 'bg-primary-700 text-zinc-50 hover:bg-primary-600 hover:text-zinc-100',
        'transition-colors duration-300',
      ]}
    >
      {children}
    </StyledLink>
  )
}
