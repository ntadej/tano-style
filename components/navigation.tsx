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
import clsx from 'clsx'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import {
  Fragment,
  MouseEventHandler,
  ReactNode,
  useEffect,
  useEffectEvent,
  useState,
} from 'react'
import { HiBars3, HiLanguage, HiXMark } from 'react-icons/hi2'
import { LuComputer, LuMoon, LuSun } from 'react-icons/lu'
import type { LinkType } from '../types'

export type NavigationItem = {
  name: string
  href: string
  mobileOnly?: boolean
}

export type LocaleSetup = {
  current: string
  available: LocaleItem[]
  callback: (nextLocale: string) => void
}

export type LocaleItem = {
  name: string
  id: string
}

export function NavHamburgerButton({ open }: { open: boolean }) {
  return (
    <DisclosureButton
      className={clsx(
        'inline-flex items-center justify-center rounded-md p-2',
        'text-zinc-500 hover:bg-gray-100 hover:text-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-900 hover:dark:text-zinc-100',
        'focus:outline-none',
        'transition-colors duration-300',
      )}
    >
      <span className="sr-only">Open main menu</span>
      {open ? (
        <HiXMark className="block h-6 w-6" aria-hidden="true" />
      ) : (
        <HiBars3 className="block h-6 w-6" aria-hidden="true" />
      )}
    </DisclosureButton>
  )
}

export function NavDropdownItem({
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
        className={clsx(
          'flex items-center p-2 text-sm',
          current
            ? 'text-brand-primary'
            : 'text-zinc-500 hover:cursor-pointer hover:bg-gray-200 hover:text-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800 hover:dark:text-zinc-100',
          'transition-colors duration-300',
        )}
        onClick={action}
      >
        {children}
      </span>
    </MenuItem>
  )
}

export function LocaleMenu({
  localeSetup,
  disableDark,
}: {
  localeSetup: LocaleSetup
  disableDark?: boolean
}) {
  return (
    <Menu as="div" className="relative ml-3">
      <MenuButton
        className={clsx(
          'flex rounded-md p-2',
          disableDark
            ? 'text-zinc-600 hover:text-zinc-800'
            : 'text-zinc-500 hover:bg-gray-100 hover:text-zinc-700',
          !disableDark &&
            'dark:text-zinc-300 dark:hover:bg-zinc-900 hover:dark:text-zinc-100',
          'transition-colors duration-300',
          'focus:outline-none',
        )}
      >
        <span className="sr-only">Select theme</span>
        <HiLanguage className="block h-6 w-6" aria-hidden="true" />
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
          {localeSetup.available.map((locale) => (
            <NavDropdownItem
              key={locale.id}
              current={localeSetup.current == locale.id}
              action={() => localeSetup.callback(locale.id)}
            >
              {locale.name}
            </NavDropdownItem>
          ))}
        </MenuItems>
      </Transition>
    </Menu>
  )
}

export function ThemeMenu({ disableDark }: { disableDark?: boolean }) {
  const [mounted, setMounted] = useState(false)
  const { theme, resolvedTheme, setTheme } = useTheme()

  const onInit = useEffectEvent(() => {
    setMounted(true)
  })

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    onInit()
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Menu as="div" className="relative ml-3">
      <MenuButton
        className={clsx(
          'flex rounded-md p-2',
          disableDark
            ? 'text-zinc-600 hover:text-zinc-800'
            : 'text-zinc-500 hover:bg-gray-100 hover:text-zinc-700',
          !disableDark &&
            'dark:text-zinc-300 dark:hover:bg-zinc-900 hover:dark:text-zinc-100',
          'transition-colors duration-300',
          'focus:outline-none',
        )}
      >
        <span className="sr-only">Select theme</span>
        {resolvedTheme == 'dark' ? (
          <LuMoon className="block h-6 w-6" aria-hidden="true" />
        ) : (
          <LuSun className="block h-6 w-6" aria-hidden="true" />
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
          <NavDropdownItem current={theme == 'light'} action={() => setTheme('light')}>
            <LuSun className="mr-2 block h-6 w-6" aria-hidden="true" />
            Light
          </NavDropdownItem>
          <NavDropdownItem current={theme == 'dark'} action={() => setTheme('dark')}>
            <LuMoon className="mr-2 block h-6 w-6" aria-hidden="true" />
            Dark
          </NavDropdownItem>
          <NavDropdownItem
            current={theme == 'system'}
            action={() => setTheme('system')}
          >
            <LuComputer className="mr-2 block h-6 w-6" aria-hidden="true" />
            System
          </NavDropdownItem>
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
  linkType,
  mobileOnly,
}: {
  name: string
  href: string
  current: boolean
  list?: boolean
  linkType?: LinkType
  mobileOnly?: boolean
}) {
  const LinkTypeRef = linkType || Link

  const ariaCurrent = current ? 'page' : undefined
  const className: string = clsx(
    current
      ? 'text-brand-primary'
      : 'text-zinc-500 hover:text-zinc-700 dark:text-zinc-300 hover:dark:text-zinc-100 hover:bg-gray-100 dark:hover:bg-zinc-900',
    list && 'block',
    mobileOnly && 'sm:hidden',
    'rounded-md px-3 py-2 font-medium text-base',
    'transition-colors duration-200',
  )

  return list ? (
    <DisclosureButton
      as={linkType}
      href={href}
      className={className}
      aria-current={ariaCurrent}
    >
      {name}
    </DisclosureButton>
  ) : (
    <LinkTypeRef href={href} className={className} aria-current={ariaCurrent}>
      {name}
    </LinkTypeRef>
  )
}

export function Navigation({
  items,
  title,
  linkType,
  localeSetup,
}: {
  items: NavigationItem[]
  title?: string
  linkType?: LinkType
  localeSetup?: LocaleSetup
}) {
  const selectedLayoutSegment = useSelectedLayoutSegment()
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/'

  return (
    <Disclosure
      as="nav"
      className="sticky top-0 z-10 bg-white/85 backdrop-blur backdrop-filter dark:bg-zinc-950/85"
    >
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
                  <span className="small-caps ml-3 px-3 py-1.5 text-lg font-bold text-zinc-600 dark:text-zinc-200">
                    {title}
                  </span>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-3">
                    {items.map((item) => (
                      <NavigationElement
                        key={item.name}
                        name={item.name}
                        href={item.href}
                        current={pathname === item.href}
                        linkType={linkType}
                        mobileOnly={item.mobileOnly}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <ThemeMenu />
                {localeSetup && <LocaleMenu localeSetup={localeSetup} />}
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
                    name={item.name}
                    href={item.href}
                    current={pathname === item.href}
                    list={true}
                    linkType={linkType}
                    mobileOnly={item.mobileOnly}
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

export function NavigationControls({ localeSetup }: { localeSetup?: LocaleSetup }) {
  return (
    <nav className="absolute right-0 top-0 md:right-[50%]">
      <div className="px-3 sm:px-4">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <ThemeMenu disableDark={true} />
            {localeSetup && <LocaleMenu localeSetup={localeSetup} disableDark={true} />}
          </div>
        </div>
      </div>
    </nav>
  )
}
