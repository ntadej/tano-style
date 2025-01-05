import clsx from 'clsx'
import { ReactNode, createElement } from 'react'
import { IconType } from 'react-icons'
import type { LinkType } from '../types'

export function StyledLink({
  children,
  href,
  className,
  target,
  rel,
  attribution,
  linkType,
}: {
  children: ReactNode
  href: string
  className: string[]
  target?: string
  rel?: string
  attribution?: boolean
  linkType?: LinkType
}) {
  const LinkTypeRef = linkType || 'a'

  const extraProperties: { [key: string]: string } = {}
  if (target) {
    extraProperties['target'] = target
    if (!rel && target == '_blank') {
      extraProperties['rel'] = 'noreferrer'
    }
  }
  if (rel) {
    extraProperties['rel'] = rel
  }
  if (attribution) {
    extraProperties['property'] = 'cc:attributionName'
    extraProperties['rel'] = 'cc:attributionURL'
  }

  return (
    <LinkTypeRef href={href} className={clsx(...className)} {...extraProperties}>
      {children}
    </LinkTypeRef>
  )
}

export function Link({
  children,
  href,
  target,
  rel,
  linkType,
}: {
  children: string
  href: string
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

export function SocialLink({
  name,
  href,
  icon,
}: {
  name: string
  href: string
  icon: IconType
}) {
  const iconElement = createElement(icon, { size: 24, title: name })
  return (
    <StyledLink
      className={[
        'group -m-1 p-1',
        'text-zinc-800 hover:text-brand-primary dark:text-zinc-300 dark:hover:text-brand-primary',
        'transition-colors duration-300',
      ]}
      aria-label={name}
      href={href}
      target="_blank"
    >
      {iconElement}
    </StyledLink>
  )
}
