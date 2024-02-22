'use client'

import { Disclosure, Menu, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  ComputerDesktopIcon,
  MoonIcon,
  SunIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Fragment, MouseEventHandler, ReactNode, useEffect, useState } from 'react'
import { classNames } from '../utils'

type NavigationItem = {
  name: string
  href: string
}

export function HamburgerButton({ open }: { open: boolean }) {
  return (
    <Disclosure.Button className="dark:hover:text-primarty-300 inline-flex items-center justify-center rounded-md p-2 text-zinc-500 transition-colors duration-300 hover:bg-gray-100 hover:text-primary-700 focus:outline-none focus:ring-1 focus:ring-primary-300 dark:text-zinc-300 dark:hover:bg-zinc-700 dark:hover:text-primary-300">
      <span className="sr-only">Open main menu</span>
      {open ? (
        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
      ) : (
        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
      )}
    </Disclosure.Button>
  )
}

export function MenuItem({
  children,
  current,
  action,
}: {
  children: ReactNode
  current: boolean
  action?: MouseEventHandler
}) {
  return (
    <Menu.Item as="li">
      {({ active }) => (
        <span
          className={classNames(
            active ? 'bg-gray-100 dark:bg-zinc-700' : '',
            current
              ? 'text-primary-700 dark:text-primary-300'
              : 'text-zinc-500 dark:text-zinc-300',
            'hover:cursor-pointer',
            'flex items-center p-2 text-sm',
          )}
          onClick={action}
        >
          {children}
        </span>
      )}
    </Menu.Item>
  )
}

export function ThemeMenu() {
  const [mounted, setMounted] = useState(false)
  const { theme, resolvedTheme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Menu as="div" className="relative ml-3">
      <Menu.Button className="flex rounded-md p-2 text-zinc-500 transition-colors duration-300 hover:bg-gray-100 hover:text-primary-700 focus:outline-none focus:ring-1 focus:ring-primary-300 dark:text-zinc-300 dark:hover:bg-zinc-700 dark:hover:text-primary-300">
        <span className="sr-only">Select theme</span>
        {resolvedTheme == 'dark' ? (
          <MoonIcon className="block h-6 w-6" aria-hidden="true" />
        ) : (
          <SunIcon className="block h-6 w-6" aria-hidden="true" />
        )}
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          as="ul"
          className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white py-1 shadow-lg shadow-zinc-800/5 ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-zinc-800 dark:shadow-zinc-200/5 dark:ring-zinc-200 dark:ring-opacity-5"
        >
          <MenuItem current={theme == 'light'} action={() => setTheme('light')}>
            <SunIcon className="mr-2 block h-6 w-6" aria-hidden="true" />
            Light
          </MenuItem>
          <MenuItem current={theme == 'dark'} action={() => setTheme('dark')}>
            <MoonIcon className="mr-2 block h-6 w-6" aria-hidden="true" />
            Dark
          </MenuItem>
          <MenuItem current={theme == 'system'} action={() => setTheme('system')}>
            <ComputerDesktopIcon className="mr-2 block h-6 w-6" aria-hidden="true" />
            System
          </MenuItem>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export function NavigationElement({
  name,
  href,
  current,
  list,
}: {
  name: string
  href: string
  current: boolean
  list?: boolean
}) {
  const ariaCurrent = current ? 'page' : undefined
  const classes: string = classNames(
    current
      ? 'text-primary-700 dark:text-primary-300'
      : 'text-zinc-500 hover:text-primary-700 hover:bg-gray-100 dark:text-zinc-300 dark:hover:text-primary-300 dark:hover:bg-zinc-700',
    list ? 'block' : '',
    'rounded-md px-3 py-2 font-medium transition-colors duration-300 text-base',
  )

  return list ? (
    <Disclosure.Button
      as={Link}
      href={href}
      className={classes}
      aria-current={ariaCurrent}
    >
      {name}
    </Disclosure.Button>
  ) : (
    <Link href={href} className={classes} aria-current={ariaCurrent}>
      {name}
    </Link>
  )
}

export function Navigation({ items }: { items: NavigationItem[] }) {
  const pathname = usePathname()

  return (
    <Disclosure
      as="nav"
      className="sticky top-0 z-10 bg-white/90 shadow shadow-zinc-800/10 backdrop-blur backdrop-filter dark:bg-zinc-800/90 dark:shadow-zinc-200/5"
    >
      {({ open }) => (
        <>
          <div className="container mx-auto px-3 sm:px-4">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <HamburgerButton open={open} />
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <span className="logo block"></span>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-3">
                    {items.map((item) => (
                      <NavigationElement
                        key={item.name}
                        name={item.name}
                        href={item.href}
                        current={pathname === item.href}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <ThemeMenu />
              </div>
            </div>
          </div>

          <Transition
            show={open}
            className="overflow-hidden"
            enter="transition transition-[max-height] duration-300 ease-in"
            enterFrom="transform max-h-0"
            enterTo="transform max-h-screen"
            leave="transition transition-[max-height] duration-400 ease-out"
            leaveFrom="transform max-h-screen"
            leaveTo="transform max-h-0"
          >
            <Disclosure.Panel className="sm:hidden" static>
              <div className="space-y-1 px-2 pb-3 pt-2">
                {items.map((item) => (
                  <NavigationElement
                    key={item.name}
                    // as="a"
                    name={item.name}
                    href={item.href}
                    current={pathname === item.href}
                    list={true}
                  />
                ))}
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}
