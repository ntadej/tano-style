import { ReactNode } from 'react'
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
