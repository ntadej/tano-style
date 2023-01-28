import { NextRouter, withRouter } from 'next/router'
import Link from 'next/link'
import React, { Children, FunctionComponent, ReactElement, ReactNode } from 'react'

type Props = {
  children?: ReactNode
  href: string
  router: NextRouter
}

const ActiveLink: FunctionComponent<Props> = ({ router, children, href }) => {
  const child: ReactElement = Children.only(children) as ReactElement

  let className = child.props.className || ''
  if (router && router.pathname === href) {
    className = `${className !== null ? className : ''} is-active`.trim()
  }

  return <Link href={href}>{React.cloneElement(child, { className })}</Link>
}

export default withRouter(ActiveLink)
