import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  highlighted?: boolean
}

export default function Card({ children, className = '', highlighted = false }: CardProps) {
  return (
    <div
      className={`bg-[var(--color-surface)] p-6 transition-colors duration-300 ${
        highlighted
          ? 'border border-[var(--color-accent)]'
          : 'border border-[var(--color-border)]'
      } ${className}`}
    >
      {children}
    </div>
  )
}
