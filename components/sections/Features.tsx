'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import Badge from '@/components/ui/Badge'
import AudioPlayer from '@/components/ui/AudioPlayer'

// ─── Chat Mockup ─────────────────────────────────────────────────────────────

const messages = [
  {
    from: 'client',
    text: 'Bonjour, je voudrais prendre rendez-vous avec votre équipe.',
    time: '19:42',
  },
  {
    from: 'keelio',
    text: 'Bonjour ! Je suis Keelio. Avec plaisir — quelle est votre disponibilité cette semaine ?',
    time: '19:42',
  },
  {
    from: 'client',
    text: 'Plutôt jeudi ou vendredi après-midi.',
    time: '19:43',
  },
  {
    from: 'keelio',
    text: 'Jeudi 10 avril à 14h ou vendredi 11 à 15h30 — les deux créneaux sont disponibles.',
    time: '19:43',
  },
  {
    from: 'client',
    text: 'Jeudi 14h, ce sera parfait.',
    time: '19:43',
  },
  {
    from: 'system',
    text: 'RDV confirmé — jeudi 10 avril à 14h00',
    time: '19:43',
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
      <div className="border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden rounded-sm">
        {/* Header */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-[var(--color-border)]">
          <div className="w-7 h-7 bg-[rgba(0,212,255,0.08)] border border-[rgba(0,212,255,0.20)] flex items-center justify-center flex-shrink-0">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <circle cx="6" cy="6" r="4" stroke="var(--color-accent)" strokeWidth="1" />
              <path d="M6 4v2.5l1.5 1" stroke="var(--color-accent)" strokeWidth="1" strokeLinecap="round" />
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
        <div className="px-4 py-5 flex flex-col gap-3 h-64 overflow-y-auto" aria-live="polite" aria-label="Conversation de démonstration">
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
                    <span className="font-body text-[0.6rem] text-[var(--color-accent)] uppercase tracking-[0.1em] px-2">
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
                        ? 'bg-[rgba(0,212,255,0.08)] border border-[rgba(0,212,255,0.15)] text-[var(--color-text)]'
                        : 'bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-text-muted)]'
                    }`}
                  >
                    {!isClient && (
                      <span className="block text-[0.6rem] text-[var(--color-accent)] uppercase tracking-wider mb-1">
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
                    className="w-1 h-1 rounded-full bg-[var(--color-accent)]"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 0.8, repeat: Infinity, delay: dot * 0.15 }}
                  />
                ))}
              </motion.div>
            )}
        </div>
      </div>

      {/* Cyan glow under the mockup */}
      <div
        className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-8 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(0,212,255,0.08) 0%, transparent 70%)' }}
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
    value: '0',
    label: 'Appel manqué',
    description: 'Chaque demande reçoit une réponse',
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
  visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function Features() {
  const shouldReduce = useReducedMotion()

  return (
    <section
      id="fonctionnalites"
      className="py-32 section-surface"
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
              className="font-display font-bold text-[var(--color-text)] leading-[1.06]"
              style={{ fontSize: 'clamp(1.875rem, 3.5vw, 3rem)' }}
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

          {/* Right — chat mockup + audio player */}
          <motion.div
            className="hidden lg:flex flex-col gap-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <motion.div
              whileHover={shouldReduce ? undefined : { y: -4, boxShadow: '0 0 32px rgba(0,212,255,0.10), 0 8px 24px rgba(0,0,0,0.5)' }}
              transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              style={{ position: 'relative' }}
            >
              <ChatMockup />
            </motion.div>
            <div className="w-full max-w-sm mx-auto lg:mx-0 flex flex-col gap-2">
              <p className="font-body text-[0.7rem] text-[var(--color-text-muted)] uppercase tracking-[0.1em]">
                Écoutez une vraie conversation
              </p>
              <AudioPlayer src="/demo-conversation.mp3" />
            </div>
          </motion.div>
        </div>

        {/* Bottom: 4 stats */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 border border-[var(--color-border)] bg-[var(--color-bg)]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={containerVariants}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              whileHover={shouldReduce ? undefined : {
                y: -5,
                boxShadow: '0 0 0 1px rgba(0,212,255,0.4), 0 0 20px rgba(0,212,255,0.12), 0 8px 32px rgba(0,0,0,0.4)',
                zIndex: 1,
              }}
              transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              style={{ position: 'relative' }}
              className={`flex flex-col gap-2 p-6 lg:p-8 border-[var(--color-border)] cursor-default
                ${i % 2 === 0 ? 'border-r' : i < stats.length - 1 ? 'lg:border-r' : ''}
                ${i < 2 ? 'border-b lg:border-b-0' : ''}`}
            >
              <span
                className="font-display font-bold text-[var(--color-accent)]"
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
