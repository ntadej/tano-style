import { ReactNode } from 'react'
import { Providers } from './providers'

export function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col bg-white text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

export function ErrorLayout({
  children,
  title,
  text,
}: {
  children?: ReactNode
  title: string
  text: string
}) {
  return (
    <>
      <section className="container mx-auto flex flex-grow items-center px-6 py-12">
        <div className="mx-auto flex flex-col items-center text-center sm:flex-row">
          <h1 className="px-6 py-2 text-4xl text-primary-700 dark:text-primary-300 sm:border-r-2 sm:border-r-primary-300 sm:dark:border-r-primary-700">
            {title}
          </h1>
          <h2 className="px-6 text-zinc-600 dark:text-zinc-300">{text}</h2>
          {children}
        </div>
      </section>
      <footer className="container mx-auto flex flex-shrink-0 flex-grow-0 flex-col p-6 text-center text-sm text-zinc-500">
        &copy; 2023 Tadej Novak
      </footer>
    </>
  )
}
