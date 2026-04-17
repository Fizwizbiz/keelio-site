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
  const messagesRef = useRef<HTMLDivElement | null>(null)
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
        }, 1400)
      } else {
        timerRef.current = setTimeout(() => {
          setVisibleCount(0)
          showNext(0)
        }, 3000)
      }
    }
    timerRef.current = setTimeout(() => showNext(0), 800)
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, [prefersReduced])

  useEffect(() => {
    const el = messagesRef.current
    if (!el) return
    el.scrollTop = el.scrollHeight
  }, [visibleCount])

  return (
    <div className="relative mx-auto lg:mx-0" style={{ width: '240px' }} aria-label="Démonstration de conversation Keelio">

      {/* Boutons latéraux gauche (volume) */}
      <div className="absolute left-0 top-[88px] -translate-x-full pr-px flex flex-col gap-2" aria-hidden="true">
        <div className="w-[3px] h-7 rounded-l-sm" style={{ background: '#0f172a' }} />
        <div className="w-[3px] h-7 rounded-l-sm" style={{ background: '#0f172a' }} />
      </div>
      {/* Bouton latéral droit (power) */}
      <div className="absolute right-0 top-[100px] translate-x-full pl-px" aria-hidden="true">
        <div className="w-[3px] h-10 rounded-r-sm" style={{ background: '#0f172a' }} />
      </div>

      {/* Corps du téléphone — blanc style iPhone */}
      <div
        className="overflow-hidden"
        style={{
          borderRadius: '36px',
          background: '#ffffff',
          border: '8px solid #0f172a',
          boxShadow: '0 32px 80px rgba(0,0,0,0.35)',
        }}
      >
        {/* Dynamic Island */}
        <div className="flex justify-center pt-3 pb-1" aria-hidden="true">
          <div className="w-[70px] h-[20px] rounded-full flex items-center justify-end px-2" style={{ background: '#000' }}>
            <span className="w-1 h-1 rounded-full" style={{ background: '#22c55e' }} />
          </div>
        </div>

        {/* Status bar */}
        <div className="flex items-center justify-between px-4 pb-1" aria-hidden="true">
          <span className="font-body text-[0.6rem] font-semibold" style={{ color: '#0f172a' }}>22:14</span>
          <div className="flex items-center gap-1">
            {/* Signal */}
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
              <rect x="0" y="6" width="2" height="4" rx="0.5" fill="rgba(15,23,42,0.6)"/>
              <rect x="3" y="4" width="2" height="6" rx="0.5" fill="rgba(15,23,42,0.6)"/>
              <rect x="6" y="2" width="2" height="8" rx="0.5" fill="rgba(15,23,42,0.6)"/>
              <rect x="9" y="0" width="2" height="10" rx="0.5" fill="rgba(15,23,42,0.6)"/>
            </svg>
            {/* Wifi */}
            <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
              <path d="M1 3.5C2.9 1.5 5.3 0.5 6 0.5C6.7 0.5 9.1 1.5 11 3.5" stroke="rgba(15,23,42,0.6)" strokeWidth="1.2" strokeLinecap="round"/>
              <path d="M2.8 5.3C3.9 4.1 5.1 3.5 6 3.5C6.9 3.5 8.1 4.1 9.2 5.3" stroke="rgba(15,23,42,0.6)" strokeWidth="1.2" strokeLinecap="round"/>
              <circle cx="6" cy="7.5" r="1" fill="rgba(15,23,42,0.8)"/>
            </svg>
            {/* Battery */}
            <svg width="18" height="9" viewBox="0 0 18 9" fill="none">
              <rect x="0.5" y="0.5" width="14" height="8" rx="2" stroke="rgba(15,23,42,0.4)" strokeWidth="0.8"/>
              <rect x="1.5" y="1.5" width="10" height="6" rx="1.2" fill="rgba(15,23,42,0.65)"/>
              <path d="M15.5 3V6" stroke="rgba(15,23,42,0.4)" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
          </div>
        </div>

        {/* App header */}
        <div className="flex items-center gap-2.5 px-4 py-2.5 border-b" style={{ borderColor: '#e2e8f0', background: '#ffffff' }}>
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 font-display font-bold text-[0.6rem] text-white relative"
            style={{ background: 'linear-gradient(135deg, #00D4FF 0%, #0099CC 100%)' }}
            aria-hidden="true"
          >
            K
            <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full border-[1.5px] border-white" style={{ background: '#22c55e' }} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-body text-[0.7rem] font-semibold leading-none" style={{ color: '#0f172a' }}>Keelio</p>
            <p className="font-body text-[0.55rem] mt-0.5" style={{ color: '#64748b' }}>En ligne</p>
          </div>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <circle cx="7" cy="7" r="6" stroke="rgba(100,116,139,0.4)" strokeWidth="1"/>
            <path d="M7 6.5V10" stroke="rgba(100,116,139,0.6)" strokeWidth="1" strokeLinecap="round"/>
            <circle cx="7" cy="4.5" r="0.7" fill="rgba(100,116,139,0.6)"/>
          </svg>
        </div>

        {/* Messages area */}
        <div
          ref={messagesRef}
          className="px-3 py-3 flex flex-col gap-2 overflow-y-auto scrollbar-none"
          style={{ height: '220px', background: '#f8fafc' }}
          aria-live="polite"
        >
          <AnimatePresence>
            {messages.slice(0, visibleCount).map((msg, i) => {
              if (msg.from === 'system') {
                return (
                  <motion.div
                    key={i}
                    initial={prefersReduced ? false : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="flex items-center gap-2 py-1"
                  >
                    <div className="h-px flex-1" style={{ background: '#e2e8f0' }} />
                    <span className="font-body text-[0.55rem] font-semibold uppercase tracking-[0.1em] px-2 py-0.5 rounded-full"
                      style={{ background: '#eef2ff', color: '#6366f1', border: '1px solid #e0e7ff' }}>
                      {msg.text}
                    </span>
                    <div className="h-px flex-1" style={{ background: '#e2e8f0' }} />
                  </motion.div>
                )
              }
              const isClient = msg.from === 'client'
              return (
                <motion.div
                  key={i}
                  initial={prefersReduced ? false : { opacity: 0, y: 6, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className={`flex flex-col gap-0.5 ${isClient ? 'items-end' : 'items-start'}`}
                >
                  {!isClient && (
                    <span className="font-body text-[0.55rem] font-semibold uppercase tracking-wide px-1"
                      style={{ color: '#00D4FF' }}>
                      Keelio
                    </span>
                  )}
                  <div
                    className="max-w-[88%] px-2.5 py-1.5 font-body text-[0.65rem] leading-relaxed"
                    style={{
                      borderRadius: isClient ? '14px 14px 4px 14px' : '14px 14px 14px 4px',
                      background: isClient ? '#1e293b' : '#ffffff',
                      border: isClient ? 'none' : '1px solid #e2e8f0',
                      color: isClient ? '#f1f5f9' : '#334155',
                    }}
                  >
                    {msg.text}
                  </div>
                  <span className="font-body text-[0.55rem] px-1 opacity-60" style={{ color: '#94a3b8' }}>
                    {msg.time}
                  </span>
                </motion.div>
              )
            })}
          </AnimatePresence>

          {/* Typing indicator */}
          {visibleCount < messages.length && messages[visibleCount]?.from === 'keelio' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-1 px-1"
            >
              {[0, 1, 2].map((dot) => (
                <motion.span
                  key={dot}
                  className="w-1 h-1 rounded-full"
                  style={{ background: '#94a3b8' }}
                  animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1, 0.8] }}
                  transition={{ duration: 0.8, repeat: Infinity, delay: dot * 0.2 }}
                />
              ))}
            </motion.div>
          )}
        </div>

        {/* Bottom action bar */}
        <div
          className="flex items-center justify-around px-6 py-3 border-t"
          style={{ borderColor: '#e2e8f0', background: '#ffffff' }}
          aria-hidden="true"
        >
          {/* Mute */}
          <button className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: '#f1f5f9' }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 1.5C5.9 1.5 5 2.4 5 3.5V7C5 8.1 5.9 9 7 9C8.1 9 9 8.1 9 7V3.5C9 2.4 8.1 1.5 7 1.5Z" stroke="rgba(100,116,139,0.7)" strokeWidth="0.9"/>
              <path d="M3.5 7C3.5 8.9 5.1 10.5 7 10.5C8.9 10.5 10.5 8.9 10.5 7" stroke="rgba(100,116,139,0.7)" strokeWidth="0.9" strokeLinecap="round"/>
              <path d="M7 10.5V12.5" stroke="rgba(100,116,139,0.7)" strokeWidth="0.9" strokeLinecap="round"/>
            </svg>
          </button>
          {/* Hang up — red */}
          <button className="w-11 h-11 rounded-full flex items-center justify-center" style={{ background: '#E5334A', boxShadow: '0 8px 20px rgba(229,51,74,0.35)' }}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M2.5 11.5C2.5 10.4 3.2 9.5 4.2 9.1L6 8.5L7.5 10.5L6.5 11.5C7.5 12.8 9.2 14.5 10.5 15.5L11.5 14.5L13.5 16L12.9 17.8C12.5 18.8 11.6 19.5 10.5 19.5C6 19.5 2.5 16 2.5 11.5Z" fill="white" transform="scale(0.78) translate(1.5, -3) rotate(-30, 9, 9)"/>
              <path d="M5 4C6.5 2.5 8.5 1.5 10.5 1.5C12.5 1.5 14.5 2.5 16 4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
          {/* Speaker */}
          <button className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: '#f1f5f9' }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 5H4.5L7 2.5V11.5L4.5 9H2V5Z" stroke="rgba(100,116,139,0.7)" strokeWidth="0.9" strokeLinejoin="round"/>
              <path d="M9.5 4.5C10.5 5.2 11 6 11 7C11 8 10.5 8.8 9.5 9.5" stroke="rgba(100,116,139,0.7)" strokeWidth="0.9" strokeLinecap="round"/>
              <path d="M11 2.5C12.5 3.7 13.5 5.2 13.5 7C13.5 8.8 12.5 10.3 11 11.5" stroke="rgba(100,116,139,0.7)" strokeWidth="0.9" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Home indicator */}
        <div className="flex justify-center py-2" aria-hidden="true">
          <div className="w-20 h-1 rounded-full" style={{ background: '#cbd5e1' }} />
        </div>
      </div>

      {/* Glow sous le téléphone */}
      <div
        className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-10 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(0,212,255,0.15) 0%, transparent 70%)' }}
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
      className="py-20 section-light bg-grid-light"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col gap-16">

        {/* Top: headline left + mockup right */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — headline + stats */}
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
              className="font-display font-bold text-[var(--color-text-dark)] leading-[1.06]"
              style={{ fontSize: 'clamp(1.875rem, 3.5vw, 3rem)' }}
            >
              L'IA qui ne dort jamais.
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="font-body text-[var(--color-text-dark-muted)] text-[1rem] leading-[1.75] max-w-md"
            >
              Pendant que vous dormez, Keelio répond, qualifie et transmet.
              Aucune demande ne reste sans réponse.
            </motion.p>

            {/* Stats grid — typographic, no container border */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-x-8 gap-y-8 border-t border-[var(--color-border-light)] pt-8 mt-2"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <span
                    className="font-display font-bold text-[var(--color-accent)]"
                    style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)' }}
                  >
                    {stat.value}
                  </span>
                  <span className="font-body font-semibold text-[var(--color-text-dark)] text-xs uppercase tracking-wider">
                    {stat.label}
                  </span>
                  <span className="font-body text-[var(--color-text-dark-muted)] text-xs leading-relaxed">
                    {stat.description}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — phone mockup + audio */}
          <motion.div
            className="hidden lg:flex flex-col items-center gap-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative">
              {/* Glow ambiant derrière le téléphone */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[420px] pointer-events-none"
                style={{ background: 'radial-gradient(ellipse, rgba(0,212,255,0.12) 0%, transparent 70%)', filter: 'blur(40px)' }}
                aria-hidden="true"
              />
              <motion.div
                whileHover={shouldReduce ? undefined : { y: -6 }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <ChatMockup />
              </motion.div>
            </div>

            {/* Audio player */}
            <div className="flex flex-col gap-2 items-center w-[280px]">
              <p className="font-body text-[0.65rem] text-[var(--color-text-dark-muted)] uppercase tracking-[0.1em]">
                Écoutez une vraie conversation
              </p>
              <AudioPlayer src="/demo-conversation.mp3" light />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
