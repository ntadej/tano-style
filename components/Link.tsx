import { usePathname } from 'next/navigation'
import Link from 'next/link'
import React, { Children, ReactElement, ReactNode } from 'react'

export default function ActiveLink({
  children,
  href,
}: {
  children?: ReactNode
  href: string
}) {
  const pathname = usePathname()
  const child: ReactElement = Children.only(children) as ReactElement

  let className = child.props.className || ''
  if (pathname === href) {
    className = `${className !== null ? className : ''} is-active`.trim()
  }

  return (
    <Link href={href} legacyBehavior>
      {React.cloneElement(child, { className })}
    </Link>
  )
}
