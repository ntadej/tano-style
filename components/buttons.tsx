import { ButtonHTMLAttributes } from 'react'
import { ReactNode } from 'react'

export function Button({
  children,
  type,
}: {
  children: ReactNode
  type: ButtonHTMLAttributes<HTMLButtonElement>['type']
}) {
  return (
    <button
      type={type}
      className="transform rounded-lg bg-primary-600 px-6 py-2 font-medium capitalize tracking-wide text-gray-50 transition-colors duration-300 hover:bg-primary-700 hover:text-gray-100 focus:outline-none focus:ring focus:ring-primary-300 focus:ring-opacity-80"
    >
      {children}
    </button>
  )
}
