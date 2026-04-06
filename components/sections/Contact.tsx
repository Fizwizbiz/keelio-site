'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'

const schema = z.object({
  prenom: z.string().min(1, 'Le prénom est requis'),
  nom: z.string().min(1, 'Le nom est requis'),
  email: z.string().min(1, "L'email est requis").email("Format d'email invalide"),
  telephone: z.string().optional(),
  message: z.string().optional(),
})

type FormValues = z.infer<typeof schema>

type Status = 'idle' | 'loading' | 'success' | 'error'

const inputClass =
  'w-full bg-transparent border border-[var(--color-border)] text-[var(--color-text)] font-body text-sm px-4 py-3 placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent-muted)] transition-colors duration-300'

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

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormValues) => {
    setStatus('loading')
    setErrorMessage('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) throw new Error()

      setStatus('success')
      reset()
    } catch {
      setStatus('error')
      setErrorMessage(
        'Une erreur est survenue. Merci de réessayer ou de nous contacter directement par email.'
      )
    }
  }

  return (
    <section
      id="contact"
      className="py-32 section-bg section-grid"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24 items-start">
          <motion.div
            className="flex flex-col gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <Badge>Devis</Badge>
            </motion.div>
            <motion.h2
              variants={itemVariants}
              className="font-display font-semibold text-[var(--color-text)] leading-tight"
              style={{ fontSize: 'clamp(1.875rem, 3.5vw, 3rem)' }}
            >
              Parlons de votre projet.
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="font-body text-[var(--color-text-muted)] text-sm leading-relaxed"
            >
              Décrivez votre projet et nous vous préparons une offre sur mesure. Réponse sous 24h, sans engagement.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-col gap-3 pt-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-[var(--color-accent-muted)]" />
                <span className="font-body text-xs text-[var(--color-text-muted)] tracking-wide">
                  Réponse sous 24h
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-[var(--color-accent-muted)]" />
                <span className="font-body text-xs text-[var(--color-text-muted)] tracking-wide">
                  Sans engagement
                </span>
              </div>

            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-4 p-8 border border-[var(--color-border)] bg-[var(--color-surface)]"
              >
                <div className="w-10 h-10 flex items-center justify-center border border-[var(--color-accent-muted)]">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M2 8L6.5 12.5L14 3.5" stroke="var(--color-accent)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-body font-medium text-[var(--color-text)] text-base">
                  Message envoyé.
                </h3>
                <p className="font-body text-[var(--color-text-muted)] text-sm leading-relaxed">
                  Merci ! Nous vous recontacterons dans les 24h.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-5"
                noValidate
              >
                {/* Error banner */}
                {status === 'error' && (
                  <div
                    role="alert"
                    className="p-4 border border-[rgba(220,100,100,0.3)] bg-[rgba(220,100,100,0.05)] font-body text-sm text-[rgba(220,150,150,1)]"
                  >
                    {errorMessage}
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Prénom */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="prenom" className="font-body text-xs text-[var(--color-text-muted)] uppercase tracking-[0.1em]">
                      Prénom <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="prenom"
                      type="text"
                      autoComplete="given-name"
                      aria-required="true"
                      aria-describedby={errors.prenom ? 'prenom-error' : undefined}
                      className={inputClass}
                      placeholder="Jean"
                      {...register('prenom')}
                    />
                    {errors.prenom && (
                      <span
                        id="prenom-error"
                        role="alert"
                        className="font-body text-xs text-[rgba(220,150,150,1)]"
                      >
                        {errors.prenom.message}
                      </span>
                    )}
                  </div>

                  {/* Nom */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="nom" className="font-body text-xs text-[var(--color-text-muted)] uppercase tracking-[0.1em]">
                      Nom <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="nom"
                      type="text"
                      autoComplete="family-name"
                      aria-required="true"
                      aria-describedby={errors.nom ? 'nom-error' : undefined}
                      className={inputClass}
                      placeholder="Dupont"
                      {...register('nom')}
                    />
                    {errors.nom && (
                      <span
                        id="nom-error"
                        role="alert"
                        className="font-body text-xs text-[rgba(220,150,150,1)]"
                      >
                        {errors.nom.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="font-body text-xs text-[var(--color-text-muted)] uppercase tracking-[0.1em]">
                    Email professionnel <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    aria-required="true"
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className={inputClass}
                    placeholder="jean@entreprise.fr"
                    {...register('email')}
                  />
                  {errors.email && (
                    <span
                      id="email-error"
                      role="alert"
                      className="font-body text-xs text-[rgba(220,150,150,1)]"
                    >
                      {errors.email.message}
                    </span>
                  )}
                </div>

                {/* Téléphone */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="telephone" className="font-body text-xs text-[var(--color-text-muted)] uppercase tracking-[0.1em]">
                    Téléphone
                  </label>
                  <input
                    id="telephone"
                    type="tel"
                    autoComplete="tel"
                    className={inputClass}
                    placeholder="+33 6 12 34 56 78"
                    {...register('telephone')}
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="font-body text-xs text-[var(--color-text-muted)] uppercase tracking-[0.1em]">
                    Décrivez votre besoin
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className={`${inputClass} resize-none`}
                    placeholder="Décrivez brièvement votre activité et ce que vous souhaitez automatiser…"
                    {...register('message')}
                  />
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={status === 'loading'}
                    className="w-full sm:w-auto"
                  >
                    {status === 'loading' ? (
                      <>
                        <svg
                          className="animate-spin w-4 h-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden="true"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="2"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          />
                        </svg>
                        Envoi en cours…
                      </>
                    ) : (
                      'Envoyer'
                    )}
                  </Button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
