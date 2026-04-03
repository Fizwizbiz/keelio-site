'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Badge from '@/components/ui/Badge'

// ─── Chat Mockup ─────────────────────────────────────────────────────────────

const messages = [
  {
    from: 'client',
    text: 'Bonsoir, j\'aurais besoin d\'un devis pour votre service.',
    time: '22:14',
  },
  {
    from: 'keelio',
    text: 'Bonsoir ! Je suis Keelio, l\'assistant de cette entreprise. Je serais ravi de vous aider.',
    time: '22:14',
  },
  {
    from: 'keelio',
    text: 'Pouvez-vous me préciser la taille de votre équipe et votre secteur d\'activité ?',
    time: '22:14',
  },
  {
    from: 'client',
    text: 'On est 8 personnes, dans le BTP.',
    time: '22:15',
  },
  {
    from: 'keelio',
    text: 'Parfait. Votre demande a été qualifiée et transmise à l\'équipe. Vous serez recontacté demain matin.',
    time: '22:15',
  },
  {
    from: 'system',
    text: 'Lead transmis — réponse en 28 secondes',
    time: '22:15',
  },
]

function ChatMockup() {
  const [visibleCount, setVisibleCount] = useState(0)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const prefersReduced =
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false

  useEffect(() => {
    if (prefersReduced) {
      setVisibleCount(messages.length)
      return
    }

    function showNext(count: number) {
      if (count < messages.length) {
        timerRef.current = setTimeout(() => {
          setVisibleCount(count + 1)
          showNext(count + 1)
        }, 1200)
      } else {
        // Loop: reset after 3s
        timerRef.current = setTimeout(() => {
          setVisibleCount(0)
          showNext(0)
        }, 3000)
      }
    }

    timerRef.current = setTimeout(() => showNext(0), 600)

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [prefersReduced])

  return (
    <div className="relative w-full max-w-sm mx-auto lg:mx-0">
      {/* Phone frame */}
      <div className="border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden">
        {/* Header */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-[var(--color-border)]">
          <div className="w-7 h-7 bg-[rgba(232,224,208,0.12)] border border-[var(--color-border)] flex items-center justify-center flex-shrink-0">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <circle cx="6" cy="6" r="4" stroke="var(--color-accent-muted)" strokeWidth="1" />
              <path d="M6 4v2.5l1.5 1" stroke="var(--color-accent-muted)" strokeWidth="1" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <p className="font-body text-xs font-medium text-[var(--color-text)]">Keelio</p>
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
              <p className="font-body text-[0.65rem] text-[var(--color-text-muted)]">En ligne</p>
            </div>
          </div>
          <span className="ml-auto font-body text-[0.65rem] text-[var(--color-text-muted)]">22:14</span>
        </div>

        {/* Messages */}
        <div className="px-4 py-5 flex flex-col gap-3 min-h-[280px]" aria-live="polite" aria-label="Conversation de démonstration">
          <AnimatePresence>
            {messages.slice(0, visibleCount).map((msg, i) => {
              if (msg.from === 'system') {
                return (
                  <motion.div
                    key={i}
                    initial={prefersReduced ? false : { opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex items-center justify-center gap-2 py-1"
                  >
                    <div className="h-px flex-1 bg-[var(--color-border)]" />
                    <span className="font-body text-[0.6rem] text-[var(--color-text-muted)] uppercase tracking-[0.1em] px-2">
                      {msg.text}
                    </span>
                    <div className="h-px flex-1 bg-[var(--color-border)]" />
                  </motion.div>
                )
              }

              const isClient = msg.from === 'client'
              return (
                <motion.div
                  key={i}
                  initial={prefersReduced ? false : { opacity: 0, y: 8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.35 }}
                  className={`flex flex-col gap-1 ${isClient ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[85%] px-3 py-2 font-body text-xs leading-relaxed ${
                      isClient
                        ? 'bg-[rgba(232,224,208,0.1)] border border-[rgba(232,224,208,0.15)] text-[var(--color-text)]'
                        : 'bg-[rgba(255,255,255,0.04)] border border-[var(--color-border)] text-[var(--color-text-muted)]'
                    }`}
                  >
                    {!isClient && (
                      <span className="block text-[0.6rem] text-[var(--color-accent-muted)] uppercase tracking-wider mb-1">
                        Keelio
                      </span>
                    )}
                    {msg.text}
                  </div>
                  <span className="font-body text-[0.6rem] text-[var(--color-text-muted)] px-1">
                    {msg.time}
                  </span>
                </motion.div>
              )
            })}
          </AnimatePresence>

          {/* Typing indicator — shows when keelio is about to respond */}
          {visibleCount < messages.length &&
            messages[visibleCount]?.from === 'keelio' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center gap-1.5 px-1"
              >
                {[0, 1, 2].map((dot) => (
                  <motion.span
                    key={dot}
                    className="w-1 h-1 rounded-full bg-[var(--color-accent-muted)]"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 0.8, repeat: Infinity, delay: dot * 0.15 }}
                  />
                ))}
              </motion.div>
            )}
        </div>
      </div>

      {/* Subtle glow under the mockup */}
      <div
        className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-8 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(232,224,208,0.08) 0%, transparent 70%)' }}
        aria-hidden="true"
      />
    </div>
  )
}

// ─── Stats ────────────────────────────────────────────────────────────────────

const stats = [
  {
    value: '< 30s',
    label: 'Temps de réponse',
    description: 'Vos clients ne patientent jamais',
  },
  {
    value: '24/7',
    label: 'Disponibilité',
    description: 'Nuits, week-ends, jours fériés',
  },
  {
    value: '48h',
    label: 'Déploiement',
    description: 'Opérationnel en deux jours',
  },
  {
    value: '100%',
    label: 'Automatisé',
    description: 'Zéro intervention manuelle requise',
  },
]

// ─── Variants ─────────────────────────────────────────────────────────────────

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function Features() {
  return (
    <section
      id="fonctionnalites"
      className="py-32 border-t border-[var(--color-border)]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col gap-20">

        {/* Top: headline left + mockup right */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — headline */}
          <motion.div
            className="flex flex-col gap-6"
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
              className="font-display font-light text-[var(--color-text)] leading-[1.06]"
              style={{ fontSize: 'clamp(2.25rem, 4.5vw, 4rem)' }}
            >
              L'IA qui ne dort jamais.
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="font-body text-[var(--color-text-muted)] text-[1rem] leading-[1.75] max-w-md"
            >
              Pendant que vous dormez, Keelio répond, qualifie et transmet.
              Aucune demande ne reste sans réponse.
            </motion.p>
          </motion.div>

          {/* Right — chat mockup (hidden on mobile) */}
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <ChatMockup />
          </motion.div>
        </div>

        {/* Bottom: 4 stats in a horizontal row */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 border border-[var(--color-border)]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={containerVariants}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className={`flex flex-col gap-2 p-6 lg:p-8 ${
                i < stats.length - 1
                  ? 'border-b lg:border-b-0 lg:border-r border-[var(--color-border)]'
                  : ''
              } ${i % 2 === 0 && i < 2 ? 'border-r lg:border-r-0 border-[var(--color-border)]' : ''}`}
            >
              <span
                className="font-display font-light text-[var(--color-accent)]"
                style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
              >
                {stat.value}
              </span>
              <div className="flex flex-col gap-1">
                <span className="font-body font-medium text-[var(--color-text)] text-sm">
                  {stat.label}
                </span>
                <span className="font-body text-[var(--color-text-muted)] text-xs leading-relaxed">
                  {stat.description}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
