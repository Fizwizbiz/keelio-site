'use client'

import { motion } from 'framer-motion'
import Badge from '@/components/ui/Badge'
import { ButtonLink } from '@/components/ui/Button'

function GeometricVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center select-none pointer-events-none">
      <motion.svg
        width="480"
        height="480"
        viewBox="0 0 480 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        className="max-w-full"
      >
        {/* Outer ring — slow rotation */}
        <motion.circle
          cx="240"
          cy="240"
          r="200"
          stroke="rgba(0,212,255,0.12)"
          strokeWidth="1"
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '240px 240px' }}
        />
        {/* Tick marks on outer ring */}
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = (i / 24) * Math.PI * 2
          const r = 200
          const x1 = 240 + Math.cos(angle) * (r - 6)
          const y1 = 240 + Math.sin(angle) * (r - 6)
          const x2 = 240 + Math.cos(angle) * r
          const y2 = 240 + Math.sin(angle) * r
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="rgba(0,212,255,0.20)"
              strokeWidth="1"
            />
          )
        })}

        {/* Middle ring */}
        <motion.circle
          cx="240"
          cy="240"
          r="145"
          stroke="rgba(0,212,255,0.07)"
          strokeWidth="1"
          strokeDasharray="4 12"
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '240px 240px' }}
        />

        {/* Inner ring */}
        <circle
          cx="240"
          cy="240"
          r="90"
          stroke="rgba(0,212,255,0.10)"
          strokeWidth="1"
        />

        {/* Cross lines */}
        <line x1="40" y1="240" x2="440" y2="240" stroke="rgba(0,212,255,0.05)" strokeWidth="1" />
        <line x1="240" y1="40" x2="240" y2="440" stroke="rgba(0,212,255,0.05)" strokeWidth="1" />

        {/* Diagonal lines */}
        <line x1="98" y1="98" x2="382" y2="382" stroke="rgba(0,212,255,0.04)" strokeWidth="1" />
        <line x1="382" y1="98" x2="98" y2="382" stroke="rgba(0,212,255,0.04)" strokeWidth="1" />

        {/* Center dot */}
        <motion.circle
          cx="240"
          cy="240"
          r="3"
          fill="rgba(0,212,255,0.7)"
          animate={{ scale: [1, 1.4, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '240px 240px' }}
        />

        {/* Orbiting dot */}
        <motion.circle
          r="5"
          fill="var(--color-accent)"
          animate={{
            cx: [440, 240, 40, 240, 440],
            cy: [240, 440, 240, 40, 240],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          style={{ filter: 'drop-shadow(0 0 6px rgba(0,212,255,0.8))' }}
        />

        {/* Corner accent squares */}
        {[
          { x: 236, y: 36 },
          { x: 236, y: 440 },
          { x: 36, y: 236 },
          { x: 440, y: 236 },
        ].map((pos, i) => (
          <rect
            key={i}
            x={pos.x}
            y={pos.y}
            width="8"
            height="8"
            fill="none"
            stroke="rgba(0,212,255,0.30)"
            strokeWidth="1"
          />
        ))}
      </motion.svg>

      {/* Radial glow at center */}
      <div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(0,212,255,0.06) 0%, transparent 65%)',
        }}
      />
    </div>
  )
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1 },
  }),
}

export default function Hero() {
  return (
    <section className="section-aura relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient — cyan radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 65% 45%, rgba(0,212,255,0.05) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      {/* Top-left accent glow */}
      <div
        className="absolute -top-40 -left-40 w-96 h-96 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full pt-28 pb-20 lg:pt-40 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — text */}
          <div className="flex flex-col gap-8">
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <Badge>Automatisation IA</Badge>
            </motion.div>

            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="font-display font-bold text-[var(--color-text)] leading-[1.08] tracking-[-0.02em]"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
            >
              Votre entreprise répond,{' '}
              <span style={{ color: 'var(--color-accent)' }}>même quand vous dormez.</span>
            </motion.h1>

            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="font-body text-[var(--color-text-muted)] text-[1.0625rem] leading-[1.75] max-w-lg"
            >
              Keelio connecte l'IA à votre activité pour gérer les demandes
              clients automatiquement. Sans complexité. Sans interruption.
            </motion.p>

            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-wrap gap-4"
            >
              <ButtonLink href="#contact" size="lg">
                Démarrer maintenant
              </ButtonLink>
              <ButtonLink href="#comment-ca-marche" variant="ghost" size="lg">
                Voir comment ça marche
              </ButtonLink>
            </motion.div>

            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex items-center gap-3 pt-2"
            >
              <div className="flex items-center gap-1.5">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]"
                    style={{ opacity: 0.5 + i * 0.2 }}
                  />
                ))}
              </div>
              <span className="font-body text-xs text-[var(--color-text-muted)] tracking-wide">
                Sans engagement · Support inclus
              </span>
            </motion.div>
          </div>

          {/* Right — geometric visual */}
          <div className="hidden lg:flex items-center justify-center h-[480px]">
            <GeometricVisual />
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, transparent, var(--color-bg))',
        }}
        aria-hidden="true"
      />
    </section>
  )
}
