'use client'

import { motion } from 'framer-motion'
import { ButtonLink } from '@/components/ui/Button'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
}

export default function CTAFinal() {
  return (
    <section
      className="relative py-40 border-t border-[var(--color-border)] overflow-hidden"
      style={{
        background:
          'linear-gradient(180deg, var(--color-bg) 0%, var(--color-surface) 50%, var(--color-bg) 100%)',
      }}
    >
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(232,224,208,0.04) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={containerVariants}
          className="flex flex-col items-center gap-8"
        >
          <motion.h2
            variants={itemVariants}
            className="font-display font-light text-[var(--color-text)] leading-tight text-balance"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)' }}
          >
            Prêt à ne plus jamais rater une opportunité ?
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="font-body text-[var(--color-text-muted)] text-[1.0625rem] leading-relaxed max-w-lg"
          >
            Rejoignez les entreprises qui font confiance à Keelio pour leur croissance.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center">
            <ButtonLink href="#contact" size="lg">
              Démarrer maintenant
            </ButtonLink>
            <ButtonLink href="mailto:contact@keelio.fr" variant="ghost" size="lg">
              Parler à un expert
            </ButtonLink>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="font-body text-xs text-[var(--color-text-muted)] tracking-wide"
          >
            Déploiement en 48h · Sans engagement · Accompagnement inclus
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
