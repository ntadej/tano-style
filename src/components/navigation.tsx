'use client'

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react'
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

export function NavHamburgerButton({ open }: { open: boolean }) {
  return (
    <DisclosureButton className="dark:hover:text-primarty-300 inline-flex items-center justify-center rounded-md p-2 text-zinc-500 transition-colors duration-300 hover:bg-gray-100 hover:text-brand-light focus:outline-none focus:ring-1 focus:ring-brand-dark dark:text-zinc-300 dark:hover:bg-zinc-700 dark:hover:text-brand-dark">
      <span className="sr-only">Open main menu</span>
      {open ? (
        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
      ) : (
        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
      )}
    </DisclosureButton>
  )
}

export function NavMenuItem({
  children,
  current,
  action,
}: {
  children: ReactNode
  current: boolean
  action?: MouseEventHandler
}) {
  return (
    <MenuItem as="li">
      <span
        className={classNames(
          current
            ? 'text-brand-light dark:text-brand-dark'
            : 'text-zinc-500 dark:text-zinc-300',
          'hover:cursor-pointer',
          'active:bg-gray-100 active:dark:bg-zinc-800',
          'flex items-center p-2 text-sm',
        )}
        onClick={action}
      >
        {children}
      </span>
    </MenuItem>
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
      <MenuButton className="flex rounded-md p-2 text-zinc-500 transition-colors duration-300 hover:bg-gray-100 hover:text-brand-light focus:outline-none focus:ring-1 focus:ring-brand-dark dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-brand-dark">
        <span className="sr-only">Select theme</span>
        {resolvedTheme == 'dark' ? (
          <MoonIcon className="block h-6 w-6" aria-hidden="true" />
        ) : (
          <SunIcon className="block h-6 w-6" aria-hidden="true" />
        )}
      </MenuButton>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <MenuItems
          as="ul"
          className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white py-1 shadow-lg shadow-zinc-900/5 ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-zinc-900 dark:shadow-zinc-200/5 dark:ring-zinc-200 dark:ring-opacity-5"
        >
          <NavMenuItem current={theme == 'light'} action={() => setTheme('light')}>
            <SunIcon className="mr-2 block h-6 w-6" aria-hidden="true" />
            Light
          </NavMenuItem>
          <NavMenuItem current={theme == 'dark'} action={() => setTheme('dark')}>
            <MoonIcon className="mr-2 block h-6 w-6" aria-hidden="true" />
            Dark
          </NavMenuItem>
          <NavMenuItem current={theme == 'system'} action={() => setTheme('system')}>
            <ComputerDesktopIcon className="mr-2 block h-6 w-6" aria-hidden="true" />
            System
          </NavMenuItem>
        </MenuItems>
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
      ? 'text-brand-light dark:text-brand-dark'
      : 'text-zinc-500 hover:text-brand-light hover:bg-gray-100 dark:text-zinc-300 dark:hover:text-brand-dark dark:hover:bg-zinc-800',
    list ? 'block' : '',
    'rounded-md px-3 py-2 font-medium transition-colors duration-200 text-base',
  )

  return list ? (
    <DisclosureButton
      as={Link}
      href={href}
      className={classes}
      aria-current={ariaCurrent}
    >
      {name}
    </DisclosureButton>
  ) : (
    <Link href={href} className={classes} aria-current={ariaCurrent}>
      {name}
    </Link>
  )
}

export function Navigation({ items }: { items: NavigationItem[] }) {
  const pathname = usePathname()

  return (
    <Disclosure as="nav" className="sticky top-0 z-10">
      {({ open }) => (
        <>
          <div className="container mx-auto px-3 sm:px-4">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <NavHamburgerButton open={open} />
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
            enter="transition transition-[max-height] duration-300 ease-in"
            enterFrom="transform max-h-0"
            enterTo="transform max-h-screen"
            leave="transition transition-[max-height] duration-400 ease-out"
            leaveFrom="transform max-h-screen"
            leaveTo="transform max-h-0"
          >
            <DisclosurePanel className="overflow-hidden sm:hidden" static>
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
            </DisclosurePanel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}
