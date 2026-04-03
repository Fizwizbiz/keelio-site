'use client'

import { motion } from 'framer-motion'
import Badge from '@/components/ui/Badge'

const features = [
  {
    number: '01',
    title: 'Réponse instantanée 24/7',
    description:
      "Vos clients reçoivent une réponse en moins de 30 secondes, à toute heure. Nuits, week-ends, jours fériés \u2014 Keelio ne s'arr\u00eate jamais.",
    large: true,
  },
  {
    number: '02',
    title: 'Qualification automatique',
    description:
      'Keelio filtre et qualifie les demandes avant de vous les transmettre. Vous ne gérez que ce qui compte.',
    large: false,
  },
  {
    number: '03',
    title: 'Intégration simple',
    description:
      'Connecté à vos outils existants en moins de 48h. Aucune compétence technique requise.',
    large: false,
  },
  {
    number: '04',
    title: 'Apprentissage continu',
    description:
      "Plus Keelio répond, plus il comprend votre activité et s'am\u00e9liore.",
    large: false,
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export default function Features() {
  return (
    <section
      id="fonctionnalites"
      className="py-32 border-t border-[var(--color-border)]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="flex flex-col gap-5 mb-16 max-w-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <Badge>La solution</Badge>
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="font-display font-light text-[var(--color-text)] leading-tight"
            style={{ fontSize: 'clamp(1.875rem, 3.5vw, 3rem)' }}
          >
            L'IA qui travaille quand vous ne le faites pas.
          </motion.h2>
        </motion.div>

        {/* Asymmetric grid: large card left + 3 smaller on right */}
        <motion.div
          className="grid lg:grid-cols-3 gap-px bg-[var(--color-border)]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={containerVariants}
        >
          {/* Large card — spans 1 col but taller */}
          <motion.div
            variants={itemVariants}
            className="lg:row-span-2 bg-[var(--color-surface)] p-8 lg:p-10 flex flex-col justify-between gap-12 min-h-[280px] lg:min-h-[400px]"
          >
            <span className="font-body text-[var(--color-text-muted)] text-xs tracking-[0.14em] uppercase">
              {features[0].number}
            </span>
            <div className="flex flex-col gap-4">
              <h3
                className="font-display font-light text-[var(--color-text)] leading-tight"
                style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}
              >
                {features[0].title}
              </h3>
              <p className="font-body text-[var(--color-text-muted)] text-sm leading-relaxed">
                {features[0].description}
              </p>
              {/* Decorative element */}
              <div className="flex gap-2 mt-4">
                {['< 30s', '24h/24', '7j/7'].map((tag) => (
                  <span
                    key={tag}
                    className="font-body text-[0.65rem] tracking-wider uppercase px-2.5 py-1 border border-[rgba(232,224,208,0.15)] text-[var(--color-accent-muted)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 3 smaller cards */}
          {features.slice(1).map((feature) => (
            <motion.div
              key={feature.number}
              variants={itemVariants}
              className="bg-[var(--color-surface)] p-8 flex flex-col justify-between gap-8 min-h-[180px]"
            >
              <span className="font-body text-[var(--color-text-muted)] text-xs tracking-[0.14em] uppercase">
                {feature.number}
              </span>
              <div className="flex flex-col gap-3">
                <h3 className="font-body font-medium text-[var(--color-text)] text-base leading-snug">
                  {feature.title}
                </h3>
                <p className="font-body text-[var(--color-text-muted)] text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
