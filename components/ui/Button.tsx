'use client'

import { motion } from 'framer-motion'
import { ReactNode, ButtonHTMLAttributes } from 'react'

type Variant = 'primary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-sm',
}

const variants: Record<Variant, string> = {
  primary:
    'bg-[var(--color-accent)] text-[#0A0E1A] font-semibold rounded-lg hover:shadow-[0_0_24px_rgba(0,212,255,0.35)] hover:bg-[#1ADEFF]',
  ghost:
    'bg-transparent text-[var(--color-accent)] border border-[var(--color-accent)] rounded-lg hover:bg-[rgba(0,212,255,0.06)] hover:shadow-[0_0_16px_rgba(0,212,255,0.15)]',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  children: ReactNode
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
      transition={{ duration: 0.25 }}
      className={`inline-flex items-center justify-center gap-2 font-body font-medium tracking-wide transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-accent)] focus-visible:outline-offset-3 disabled:opacity-40 disabled:cursor-not-allowed ${sizes[size]} ${variants[variant]} ${className}`}
      {...(props as any)}
    >
      {children}
    </motion.button>
  )
}

interface ButtonLinkProps {
  variant?: Variant
  size?: Size
  children: ReactNode
  href: string
  className?: string
}

export function ButtonLink({
  variant = 'primary',
  size = 'md',
  children,
  href,
  className = '',
}: ButtonLinkProps) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
      transition={{ duration: 0.25 }}
      className={`inline-flex items-center justify-center gap-2 font-body font-medium tracking-wide transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-accent)] focus-visible:outline-offset-3 ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.a>
  )
}
