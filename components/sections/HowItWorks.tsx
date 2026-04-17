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
      className={`relative flex-1 ${desktopOffsets[index]}`}
      onHoverStart={() => !shouldReduce && setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {/* Card container */}
      <motion.div
        animate={shouldReduce ? undefined : {
          y: hovered ? -5 : 0,
          boxShadow: hovered
            ? '0 0 0 1px rgba(0,212,255,0.35), 0 0 16px rgba(0,212,255,0.15), 0 8px 24px rgba(0,0,0,0.08)'
            : '0 0 0 1px rgba(226,234,240,1), 0 2px 8px rgba(0,0,0,0.04)',
        }}
        transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative overflow-hidden bg-[var(--color-surface-light)] border border-[var(--color-border-light)] rounded-2xl p-6 lg:p-8 pl-10 flex flex-col gap-6"
      >
        {/* Accent bar gauche */}
        <div
          className="absolute left-0 top-0 bottom-0 w-1 bg-[var(--color-accent)]"
          style={{ opacity: hovered ? 1 : 0.5, transition: 'opacity 0.3s' }}
          aria-hidden="true"
        />

        {/* Ghost number — large decorative background */}
        <span
          className="absolute -top-4 right-4 font-display font-bold select-none pointer-events-none"
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
        <span className="font-body text-[0.7rem] font-bold text-[var(--color-accent)] tracking-[0.16em] uppercase">
          {step.number}
        </span>

        {/* Title */}
        <div className="flex items-start gap-4">
          <motion.div
            className="flex-shrink-0 bg-[var(--color-accent)] mt-1"
            style={{ width: '2px', height: '48px', transformOrigin: 'top' }}
            variants={lineVariants}
            animate={shouldReduce ? undefined : { opacity: hovered ? 0.7 : 0.4 }}
            transition={{ duration: 0.3 }}
            aria-hidden="true"
          />
          <h3
            className="font-display font-semibold text-[var(--color-text-dark)] leading-tight"
            style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}
          >
            {step.title}
          </h3>
        </div>

        <p className="font-body text-[var(--color-text-dark-muted)] text-sm leading-relaxed">
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
      className="py-20 section-light overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="flex flex-col gap-5 mb-14 max-w-xl"
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
            className="font-display font-bold text-[var(--color-text-dark)] leading-tight"
            style={{ fontSize: 'clamp(1.875rem, 3.5vw, 3rem)' }}
          >
            Opérationnel en 3 étapes.
          </motion.h2>
        </motion.div>

        {/* Steps — staircase layout */}
        <motion.div
          className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 lg:gap-6 pb-4 lg:pb-20"
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
