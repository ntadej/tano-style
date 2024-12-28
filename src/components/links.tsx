import { ReactNode, createElement } from 'react'
import { IconType } from 'react-icons'
import { classNames } from '../utils'

export function StyledLink({
  children,
  href,
  className,
  target,
  rel,
  attribution,
}: {
  children: ReactNode
  href: string
  className: string[]
  target?: string
  rel?: string
  attribution?: boolean
}) {
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
    <a href={href} className={classNames(...className)} {...extraProperties}>
      {children}
    </a>
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
