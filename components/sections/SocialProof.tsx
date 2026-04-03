'use client'

import { motion } from 'framer-motion'

const logos = [
  { name: 'Artisan+', viewBox: '0 0 120 32' },
  { name: 'Florval', viewBox: '0 0 100 32' },
  { name: 'Nexum', viewBox: '0 0 110 32' },
  { name: 'Bricard & Co', viewBox: '0 0 130 32' },
  { name: 'Solveo', viewBox: '0 0 105 32' },
]

function LogoPlaceholder({ name }: { name: string }) {
  return (
    <motion.div
      className="flex items-center justify-center px-6 py-3 transition-all duration-500 cursor-default"
      style={{ opacity: 0.45 }}
      whileHover={{ opacity: 0.9 }}
      transition={{ duration: 0.4 }}
    >
      <span
        className="font-display font-light tracking-[0.08em] text-[var(--color-accent)]"
        style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}
      >
        {name}
      </span>
    </motion.div>
  )
}

export default function SocialProof() {
  return (
    <section className="py-16 border-t border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="font-body text-xs text-[var(--color-text-muted)] uppercase tracking-[0.14em] text-center mb-10">
          Ils nous font confiance
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-0 md:flex-nowrap md:divide-x md:divide-[var(--color-border)]">
          {logos.map((logo) => (
            <LogoPlaceholder key={logo.name} name={logo.name} />
          ))}
        </div>
      </div>
    </section>
  )
}
