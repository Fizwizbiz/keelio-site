export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        {/* Desktop layout */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 text-center md:text-left">
          {/* Logo */}
          <a
            href="#"
            className="font-display text-xl font-bold tracking-[-0.01em] text-[var(--color-accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-accent)] focus-visible:outline-offset-3 flex-shrink-0"
          >
            Keelio
          </a>

          {/* Links */}
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            <nav className="flex flex-wrap items-center justify-center md:justify-start gap-6" aria-label="Liens légaux">
              <a
                href="#"
                className="font-body text-xs text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors duration-300 uppercase tracking-[0.1em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-accent)] focus-visible:outline-offset-3"
              >
                Mentions légales
              </a>
              <a
                href="/cgv"
                className="font-body text-xs text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors duration-300 uppercase tracking-[0.1em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-accent)] focus-visible:outline-offset-3"
              >
                CGV
              </a>
              <a
                href="#"
                className="font-body text-xs text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors duration-300 uppercase tracking-[0.1em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-accent)] focus-visible:outline-offset-3"
              >
                Politique de confidentialité
              </a>
            </nav>

            <div className="flex items-center gap-4">
              <a
                href="mailto:contact@keelio.fr"
                className="font-body text-xs text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors duration-300 uppercase tracking-[0.1em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-accent)] focus-visible:outline-offset-3"
              >
                contact@keelio.fr
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Keelio sur LinkedIn"
                className="w-8 h-8 flex items-center justify-center border border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent-muted)] transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-accent)] focus-visible:outline-offset-3"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-8 border-t border-[var(--color-border)] text-center md:text-left">
          <p className="font-body text-xs text-[var(--color-text-muted)]">
            © {year} Keelio. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
