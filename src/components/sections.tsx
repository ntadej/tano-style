import { ReactNode } from 'react'
import { classNames } from '../utils'

export function Section({
  children,
  title,
  subtitle,
}: {
  children: ReactNode
  title: string
  subtitle: string
}) {
  return (
    <section className="section">
      <div className="container mx-auto mt-2 p-4">
        <h1 className="text-2xl font-semibold text-primary-700 dark:text-primary-300 sm:text-3xl">
          {title}
        </h1>
        <h2 className="mb-4 mt-1 max-w-lg text-zinc-500 dark:text-zinc-400">
          {subtitle}
        </h2>

        {children}
      </div>
    </section>
  )
}

export function Content({
  children,
  fullWidth,
}: {
  children: ReactNode
  fullWidth?: boolean
}) {
  return (
    <div
      className={classNames(
        'prose prose-zinc dark:prose-invert',
        fullWidth ? 'max-w-none' : '',
        'prose-headings:mb-1 prose-headings:text-primary-700 dark:prose-headings:text-primary-300',
        'prose-a:text-primary-700 prose-a:underline prose-a:transition-all prose-a:duration-300',
        'hover:prose-a:decoration-primary-300 dark:prose-a:text-primary-300 dark:hover:prose-a:decoration-primary-700',
      )}
    >
      {children}
    </div>
  )
}
