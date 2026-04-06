'use client'

import { motion } from 'framer-motion'
import { ButtonLink } from '@/components/ui/Button'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export default function QuoteCTA() {
  return (
    <section
      id="devis"
      className="section-aura section-surface relative py-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="flex flex-col items-center text-center gap-6 max-w-2xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="font-display font-bold text-[var(--color-text)] leading-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            Un projet ?{' '}
            <span style={{ color: 'var(--color-accent)' }}>Parlons-en.</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="font-body text-[var(--color-text-muted)] text-base leading-relaxed"
          >
            Chaque entreprise est différente. Nous vous préparons une offre sur mesure après un premier échange sans engagement.
          </motion.p>
          <motion.div variants={itemVariants}>
            <ButtonLink href="#contact" size="lg">
              Demander un devis
            </ButtonLink>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
