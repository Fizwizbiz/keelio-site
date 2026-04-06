'use client'

import { useState } from 'react'
import { motion, type Variants, useReducedMotion } from 'framer-motion'
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

const lineVariants: Variants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
}

// ─── StepCard — sous-composant avec hover local ────────────────────────────

interface StepCardProps {
  step: typeof steps[number]
  index: number
  shouldReduce: boolean | null
}

function StepCard({ step, index, shouldReduce }: StepCardProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      variants={itemVariants}
      className={`relative flex-1 flex flex-col gap-6 ${desktopOffsets[index]}`}
      onHoverStart={() => !shouldReduce && setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {/* Horizontal separator on mobile */}
      {index > 0 && (
        <div
          className="lg:hidden absolute -top-8 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(to right, var(--color-accent), transparent)', opacity: 0.20 }}
          aria-hidden="true"
        />
      )}
      {/* Vertical connector on desktop */}
      {index > 0 && (
        <div
          className="hidden lg:block absolute top-8 -left-3 w-px"
          style={{ height: '80px', background: 'linear-gradient(to bottom, transparent, var(--color-accent), transparent)', opacity: 0.18 }}
          aria-hidden="true"
        />
      )}

      {/* Ghost number — large decorative background */}
      <span
        className="absolute -top-6 right-0 font-display font-bold select-none pointer-events-none"
        style={{
          fontSize: 'clamp(5rem, 10vw, 9rem)',
          color: 'var(--color-accent)',
          opacity: 0.05,
          lineHeight: 1,
          letterSpacing: '-0.04em',
        }}
        aria-hidden="true"
      >
        {step.number}
      </span>

      {/* Step number label */}
      <div className="flex items-center gap-3 lg:block">
        <span
          className="lg:hidden flex-shrink-0 bg-[var(--color-accent)]"
          style={{ width: '20px', height: '2px', opacity: 0.5 }}
          aria-hidden="true"
        />
        <span className="font-body text-[0.7rem] font-bold text-[var(--color-accent)] tracking-[0.16em] uppercase">
          {step.number}
        </span>
      </div>

      {/* Inner content — translates on hover */}
      <motion.div
        animate={shouldReduce ? undefined : { x: hovered ? -3 : 0 }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        className="flex flex-col gap-6"
      >
        {/* Vertical line + title */}
        <div className="flex items-start gap-4">
          <motion.div
            className="flex-shrink-0 bg-[var(--color-accent)] mt-1"
            style={{
              width: '2px',
              height: '48px',
              transformOrigin: 'top',
            }}
            variants={lineVariants}
            animate={shouldReduce ? undefined : { opacity: hovered ? 0.6 : 0.35 }}
            transition={{ duration: 0.3 }}
            aria-hidden="true"
          />
          <h3
            className="font-display font-semibold text-[var(--color-text)] leading-tight"
            style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}
          >
            {step.title}
          </h3>
        </div>

        <p className="font-body text-[var(--color-text-muted)] text-sm leading-relaxed max-w-[18rem]">
          {step.description}
        </p>
      </motion.div>
    </motion.div>
  )
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function HowItWorks() {
  const shouldReduce = useReducedMotion()

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
            className="font-display font-bold text-[var(--color-text)] leading-tight"
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
            <StepCard
              key={step.number}
              step={step}
              index={i}
              shouldReduce={shouldReduce}
            />
          ))}
        </motion.div>

      </div>
    </section>
  )
}
