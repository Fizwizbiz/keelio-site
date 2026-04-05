import { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  className?: string
}

export default function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1 font-body font-medium uppercase tracking-[0.12em] text-[0.7rem] text-[var(--color-accent-muted)] bg-[rgba(232,224,208,0.07)] border border-[rgba(232,224,208,0.22)] ${className}`}
    >
      <span className="w-1 h-1 rounded-full bg-[var(--color-accent-muted)] opacity-70 flex-shrink-0" aria-hidden="true" />
      {children}
    </span>
  )
}
