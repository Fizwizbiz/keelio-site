'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Badge from '@/components/ui/Badge'

const painPoints = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
        <path d="M10 18C7.79086 18 6 16.2091 6 14C6 11.7909 7.79086 10 10 10" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
        <circle cx="4" cy="16" r="1" fill="currentColor"/>
        <path d="M10 6V10L12 12" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Appels manqués',
    description:
      "Vos clients appellent à 19h. Vous n'\u00eates plus là. Ils appellent un concurrent.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="2" y="4" width="16" height="12" rx="0" stroke="currentColor" strokeWidth="1"/>
        <path d="M6 4V2M14 4V2" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
        <path d="M2 8H18" stroke="currentColor" strokeWidth="1"/>
        <path d="M6 12H9M11 12H14" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Disponibilité limitée',
    description:
      "Vos horaires d'ouverture limitent vos opportunités à 35h par semaine.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M4 5H16M4 10H12M4 15H9" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
        <path d="M15 12L15 18M12 15H18" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Tâches répétitives',
    description:
      'Votre équipe passe des heures à répondre aux mêmes questions basiques.',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export default function Problem() {
  const shouldReduce = useReducedMotion()

  return (
    <section
      id="probleme"
      className="py-32 bg-[var(--color-surface)]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="flex flex-col gap-5 mb-16 max-w-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <Badge>Le problème</Badge>
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="font-display font-semibold text-[var(--color-text)] leading-tight"
            style={{ fontSize: 'clamp(1.875rem, 3.5vw, 3rem)' }}
          >
            Chaque appel manqué est un client perdu.
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-px bg-[var(--color-border)]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={containerVariants}
        >
          {painPoints.map((point) => (
            <motion.div
              key={point.title}
              variants={itemVariants}
              whileHover={shouldReduce ? undefined : {
                y: -5,
                boxShadow: '0 0 0 1px rgba(0,212,255,0.35), 0 0 18px rgba(0,212,255,0.10), 0 8px 24px rgba(0,0,0,0.4)',
                zIndex: 1,
              }}
              transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              style={{ position: 'relative' }}
              className="bg-[var(--color-bg)] p-8 lg:p-10 flex flex-col gap-5 cursor-default"
            >
              <motion.div
                className="w-10 h-10 flex items-center justify-center border border-[rgba(0,212,255,0.20)] bg-[rgba(0,212,255,0.05)] text-[var(--color-accent)]"
                whileHover={shouldReduce ? undefined : { scale: 1.08 }}
                transition={{ duration: 0.25 }}
              >
                {point.icon}
              </motion.div>
              <div className="flex flex-col gap-2">
                <h3 className="font-body font-medium text-[var(--color-text)] text-base">
                  {point.title}
                </h3>
                <p className="font-body text-[var(--color-text-muted)] text-sm leading-relaxed">
                  {point.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
