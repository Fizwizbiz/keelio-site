'use client'

const logos = [
  'Artisan+',
  'Florval',
  'Nexum',
  'Bricard & Co',
  'Solveo',
  'Artisan+',
  'Florval',
  'Nexum',
  'Bricard & Co',
  'Solveo',
]

export default function SocialProof() {
  return (
    <section className="py-14 section-bg border-y border-[var(--color-border)] overflow-hidden">
      <p className="font-body text-[0.65rem] text-[var(--color-text-muted)] uppercase tracking-[0.18em] text-center mb-10">
        Ils nous font confiance
      </p>

      <div className="relative w-full overflow-hidden">
        {/* Fade edges */}
        <div
          className="absolute left-0 top-0 w-32 h-full pointer-events-none z-10"
          style={{ background: 'linear-gradient(to right, var(--color-bg), transparent)' }}
        />
        <div
          className="absolute right-0 top-0 w-32 h-full pointer-events-none z-10"
          style={{ background: 'linear-gradient(to left, var(--color-bg), transparent)' }}
        />

        <div className="animate-marquee gap-16 opacity-50 hover:opacity-80 transition-opacity duration-500">
          {logos.map((name, i) => (
            <div
              key={i}
              className="flex items-center justify-center px-8 flex-shrink-0"
            >
              <span
                className="font-display font-medium tracking-[0.06em] text-[var(--color-text)]"
                style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)' }}
              >
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
