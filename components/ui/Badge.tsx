import { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  className?: string
}

export default function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1 font-body font-medium uppercase tracking-[0.12em] text-[0.7rem] text-[var(--color-accent)] bg-[rgba(0,212,255,0.08)] border border-[rgba(0,212,255,0.20)] ${className}`}
    >
      <span className="w-1 h-1 rounded-full bg-[var(--color-accent)] opacity-70 flex-shrink-0" aria-hidden="true" />
      {children}
    </span>
  )
}
