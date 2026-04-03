'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ButtonLink } from '@/components/ui/Button'

const navLinks = [
  { label: 'Fonctionnalités', href: '#fonctionnalites' },
  { label: 'Comment ça marche', href: '#comment-ca-marche' },
  { label: 'Tarifs', href: '#tarifs' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled ? 'rgba(17,17,17,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a
              href="#"
              className="font-display text-xl font-light tracking-[0.08em] text-[var(--color-accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-accent)] focus-visible:outline-offset-3"
            >
              Keelio
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8" aria-label="Navigation principale">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-body text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-accent)] focus-visible:outline-offset-3"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <ButtonLink href="#contact" size="sm">
                Démarrer maintenant
              </ButtonLink>
            </div>

            {/* Hamburger */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-accent)] focus-visible:outline-offset-3"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={menuOpen}
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="block w-5 h-px bg-[var(--color-accent)]"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.2 }}
                className="block w-5 h-px bg-[var(--color-accent)]"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="block w-5 h-px bg-[var(--color-accent)]"
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 right-0 z-40 bg-[rgba(17,17,17,0.97)] backdrop-blur-xl border-b border-[var(--color-border)] md:hidden"
          >
            <nav className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4" aria-label="Navigation mobile">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className="font-body text-base text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors duration-300 py-2 border-b border-[var(--color-border)] last:border-0"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="pt-2">
                <ButtonLink href="#contact" size="md" className="w-full justify-center">
                  Démarrer maintenant
                </ButtonLink>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
