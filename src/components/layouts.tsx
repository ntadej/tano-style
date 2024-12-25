import { ReactNode } from 'react'
import { ibmPlexMono, ibmPlexSans } from '../fonts'
import { Providers } from './providers'

export function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${ibmPlexSans.variable} ${ibmPlexMono.variable}`}
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col bg-white text-prose-light dark:bg-zinc-900 dark:text-prose-dark">
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
          <h1 className="px-6 py-2 font-mono text-4xl text-brand-light sm:border-r-2 sm:border-r-brand-dark dark:text-brand-dark sm:dark:border-r-brand-light">
            {title}
          </h1>
          <h2 className="px-6 text-prose-light dark:text-prose-dark">{text}</h2>
          {children}
        </div>
      </section>
      <footer className="container mx-auto flex flex-shrink-0 flex-grow-0 flex-col p-6 text-center text-sm text-zinc-500 dark:text-zinc-400">
        &copy; 2025 Tadej Novak
      </footer>
    </>
  )
}
