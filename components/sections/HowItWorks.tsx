'use client'

import { motion } from 'framer-motion'
import Badge from '@/components/ui/Badge'

const steps = [
  {
    number: '01',
    title: 'On discute',
    description: '30 minutes pour comprendre votre activité, vos clients, vos enjeux.',
  },
  {
    number: '02',
    title: 'On configure',
    description: "Notre équipe configure Keelio et l'intègre à vos outils existants.",
  },
  {
    number: '03',
    title: "C'est live",
    description: 'Votre Keelio est opérationnel. Vos clients sont pris en charge.',
  },
]

const desktopOffsets = ['lg:mt-0', 'lg:mt-20', 'lg:mt-40']

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.25 } },
}

const itemVariants = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const },
  },
}

const lineVariants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export default function HowItWorks() {
  return (
    <section
      id="comment-ca-marche"
      className="py-32 bg-[var(--color-bg)] overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="flex flex-col gap-5 mb-24 max-w-xl"
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

        {/* Steps — staircase layout */}
        <motion.div
          className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-16 lg:gap-6 pb-16 lg:pb-40"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={containerVariants}
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              variants={itemVariants}
              className={`relative flex-1 flex flex-col gap-6 ${desktopOffsets[i]}`}
            >
              {/* Ghost number — decorative background */}
              <span
                className="absolute -top-6 right-0 font-display font-light select-none pointer-events-none text-[var(--color-text)]"
                style={{
                  fontSize: 'clamp(5rem, 10vw, 9rem)',
                  opacity: 0.065,
                  lineHeight: 1,
                  letterSpacing: '-0.04em',
                }}
                aria-hidden="true"
              >
                {step.number}
              </span>

              {/* Step number label — mobile has accent dash */}
              <div className="flex items-center gap-3 lg:block">
                <span
                  className="lg:hidden flex-shrink-0 bg-[var(--color-accent-muted)]"
                  style={{ width: '20px', height: '2px', opacity: 0.55 }}
                  aria-hidden="true"
                />
                <span className="font-body text-[0.7rem] text-[var(--color-text-muted)] tracking-[0.16em] uppercase">
                  {step.number}
                </span>
              </div>

              {/* Vertical connector + title */}
              <div className="flex items-start gap-4">
                <motion.div
                  className="flex-shrink-0 bg-[var(--color-accent)] mt-1"
                  style={{
                    width: '1px',
                    height: '48px',
                    opacity: 0.22,
                    transformOrigin: 'top',
                  }}
                  variants={lineVariants}
                  aria-hidden="true"
                />
                <h3
                  className="font-display font-light text-[var(--color-text)] leading-tight"
                  style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}
                >
                  {step.title}
                </h3>
              </div>

              <p className="font-body text-[var(--color-text-muted)] text-sm leading-relaxed max-w-[18rem]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
