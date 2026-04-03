'use client'

import { motion } from 'framer-motion'
import Badge from '@/components/ui/Badge'
import { ButtonLink } from '@/components/ui/Button'

const plans = [
  {
    name: 'Starter',
    tagline: 'Pour démarrer',
    price: '297',
    features: [
      '500 interactions / mois',
      '1 canal',
      'Support email',
      'Sans engagement',
    ],
    cta: 'Démarrer',
    highlighted: false,
  },
  {
    name: 'Pro',
    tagline: 'Pour les actifs',
    price: '597',
    features: [
      '2 000 interactions / mois',
      '3 canaux',
      'Support prioritaire',
      'IA personnalisée',
    ],
    cta: 'Choisir Pro',
    highlighted: true,
  },
  {
    name: 'Expert',
    tagline: 'Sur mesure',
    price: '997',
    features: [
      'Interactions illimitées',
      'Canaux illimités',
      'Support dédié',
      'Intégrations avancées',
    ],
    cta: 'Nous contacter',
    highlighted: false,
  },
]

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

export default function Pricing() {
  return (
    <section
      id="tarifs"
      className="py-32 border-t border-[var(--color-border)]"
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
            <Badge>Tarifs</Badge>
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="font-display font-light text-[var(--color-text)] leading-tight"
            style={{ fontSize: 'clamp(1.875rem, 3.5vw, 3rem)' }}
          >
            Simple et transparent.
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="font-body text-[var(--color-text-muted)] text-base leading-relaxed"
          >
            Pas de frais cachés. Pas d'engagement minimum. Vous payez mois par mois.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-px bg-[var(--color-border)]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={containerVariants}
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={itemVariants}
              className={`relative flex flex-col p-8 lg:p-10 gap-8 ${
                plan.highlighted
                  ? 'bg-[var(--color-surface)]'
                  : 'bg-[var(--color-bg)]'
              }`}
              style={
                plan.highlighted
                  ? {
                      outline: '1px solid var(--color-accent)',
                      outlineOffset: '-1px',
                    }
                  : {}
              }
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="font-body text-[0.65rem] uppercase tracking-[0.14em] px-3 py-1 bg-[var(--color-accent)] text-[var(--color-bg)] font-medium">
                    Recommandé
                  </span>
                </div>
              )}

              <div className="flex flex-col gap-1">
                <h3 className="font-body font-medium text-[var(--color-text)] text-lg">
                  {plan.name}
                </h3>
                <p className="font-body text-[var(--color-text-muted)] text-sm">
                  {plan.tagline}
                </p>
              </div>

              <div className="flex items-baseline gap-1">
                <span
                  className="font-display font-light text-[var(--color-text)]"
                  style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
                >
                  {plan.price}€
                </span>
                <span className="font-body text-[var(--color-text-muted)] text-sm">
                  /mois
                </span>
              </div>

              <ul className="flex flex-col gap-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 font-body text-sm text-[var(--color-text-muted)]"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      className="flex-shrink-0 mt-0.5 text-[var(--color-accent-muted)]"
                      aria-hidden="true"
                    >
                      <path
                        d="M2 7L5.5 10.5L12 4"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <ButtonLink
                  href="#contact"
                  variant={plan.highlighted ? 'primary' : 'ghost'}
                  size="md"
                  className="w-full justify-center"
                >
                  {plan.cta}
                </ButtonLink>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
