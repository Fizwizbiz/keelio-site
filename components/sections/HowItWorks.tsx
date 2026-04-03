'use client'

import { motion } from 'framer-motion'
import Badge from '@/components/ui/Badge'

const steps = [
  {
    number: '01',
    title: 'On discute',
    description:
      '30 minutes pour comprendre votre activité, vos clients, vos enjeux.',
  },
  {
    number: '02',
    title: 'On configure',
    description:
      "Notre équipe configure Keelio et l'int\u00e8gre à vos outils en 48h.",
  },
  {
    number: '03',
    title: "C'est live",
    description:
      'Votre Keelio est opérationnel. Vos clients sont pris en charge.',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65 },
  },
}

export default function HowItWorks() {
  return (
    <section
      id="comment-ca-marche"
      className="py-32 border-t border-[var(--color-border)]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="flex flex-col gap-5 mb-20 max-w-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <Badge>Comment ça marche</Badge>
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="font-display font-light text-[var(--color-text)] leading-tight"
            style={{ fontSize: 'clamp(1.875rem, 3.5vw, 3rem)' }}
          >
            Opérationnel en 3 étapes.
          </motion.h2>
        </motion.div>

        {/* Steps */}
        <motion.div
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={containerVariants}
        >
          {/* Desktop connecting line */}
          <div
            className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-[var(--color-border)]"
            style={{ top: '2rem' }}
            aria-hidden="true"
          />

          <div className="grid md:grid-cols-3 gap-0 md:gap-px bg-transparent md:bg-[var(--color-border)]">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                variants={itemVariants}
                className="relative bg-[var(--color-bg)] md:bg-[var(--color-bg)] px-0 md:px-10 py-0 md:py-12 flex flex-col gap-6 border-b border-[var(--color-border)] md:border-b-0 pb-10 md:pb-0 last:border-0"
              >
                {/* Number with circle */}
                <div className="relative z-10 w-16 h-16 flex items-center justify-center border border-[var(--color-border)] bg-[var(--color-bg)]">
                  <span className="font-display font-light text-xl text-[var(--color-accent-muted)]">
                    {step.number}
                  </span>
                </div>

                {/* Arrow between steps on mobile */}
                {i < 2 && (
                  <div className="md:hidden absolute bottom-4 right-0 text-[var(--color-border)]" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8 2L8 14M8 14L3 9M8 14L13 9" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}

                <div className="flex flex-col gap-3">
                  <h3 className="font-body font-medium text-[var(--color-text)] text-lg">
                    {step.title}
                  </h3>
                  <p className="font-body text-[var(--color-text-muted)] text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Desktop right arrow connector */}
                {i < 2 && (
                  <div
                    className="hidden lg:block absolute top-8 -right-px w-3 h-px bg-[var(--color-accent-muted)]"
                    aria-hidden="true"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
