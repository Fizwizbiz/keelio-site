import { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  className?: string
}

export default function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-block px-3 py-1 font-body font-medium uppercase tracking-[0.12em] text-[0.7rem] text-[var(--color-accent-muted)] bg-[rgba(232,224,208,0.06)] border border-[rgba(232,224,208,0.12)] ${className}`}
    >
      {children}
    </span>
  )
}
