'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Badge from '@/components/ui/Badge'
import Accordion from '@/components/ui/Accordion'

const faqItems = [
  {
    question: 'Quel est le tarif ?',
    answer:
      "Nous établissons un devis personnalisé selon votre activité, le volume d'interactions et vos besoins spécifiques. Contactez-nous pour obtenir une offre adaptée — sans engagement.",
  },
  {
    question: 'Combien de temps pour être opérationnel ?',
    answer:
      "En général, 48 à 72 heures. Nous gérons l'intégration de A à Z.",
  },
  {
    question: 'Comment Keelio répond-il à mes clients ?',
    answer:
      "Keelio utilise l'IA pour comprendre les demandes et y répondre de façon naturelle, en suivant les informations et le ton que vous lui avez fournis.",
  },
  {
    question: 'Dois-je signer un engagement longue durée ?',
    answer:
      'Non. Nos offres sont sans engagement. Vous pouvez arrêter à tout moment.',
  },
  {
    question: "Keelio s'intègre-t-il à mes outils actuels ?",
    answer:
      'Oui. Keelio se connecte à la plupart des outils professionnels : CRM, agenda, email, WhatsApp, et plus encore.',
  },
  {
    question: 'Que se passe-t-il si Keelio ne sait pas répondre ?',
    answer:
      'Keelio escalade automatiquement les demandes complexes vers votre équipe. Aucun client ne reste sans réponse.',
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

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section
      id="faq"
      className="py-32 section-bg"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24 items-start">
          <motion.div
            className="flex flex-col gap-5 lg:sticky lg:top-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <Badge>FAQ</Badge>
            </motion.div>
            <motion.h2
              variants={itemVariants}
              className="font-display font-semibold text-[var(--color-text)] leading-tight"
              style={{ fontSize: 'clamp(1.875rem, 3.5vw, 3rem)' }}
            >
              Vos questions, nos réponses.
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="font-body text-[var(--color-text-muted)] text-sm leading-relaxed"
            >
              Une autre question ? Écrivez-nous à{' '}
              <a
                href="mailto:contact@keelio.fr"
                className="text-[var(--color-accent-muted)] hover:text-[var(--color-accent)] transition-colors duration-300"
              >
                contact@keelio.fr
              </a>
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <Accordion
              items={faqItems}
              openIndex={openIndex}
              onToggle={handleToggle}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
