import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mentions légales — Keelio',
  description: 'Mentions légales du site Keelio.',
  robots: { index: false },
}

const sections = [
  {
    id: 'editeur',
    title: 'Éditeur du site',
    content: `Le site www.keelio.fr est édité par la société :

Keelio
SARL au capital de 1 000 euros
Siège social : 7 rue Pierre Mendès, 62113 Labourse, France
RCS Béthune 912 847 231
Email : contact@keelio.fr`,
  },
  {
    id: 'hebergement',
    title: 'Hébergement',
    content: `Le site est hébergé par :

Vercel Inc.
340 Pine Street, Suite 701
San Francisco, CA 94104, États-Unis
Site web : vercel.com`,
  },
  {
    id: 'directeur',
    title: 'Directeur de la publication',
    content: `Le directeur de la publication est le représentant légal de la société Keelio. Pour toute question relative au site, vous pouvez contacter Keelio à l'adresse email : contact@keelio.fr.`,
  },
  {
    id: 'propriete',
    title: 'Propriété intellectuelle',
    content: `L'ensemble des éléments constituant ce site (textes, graphismes, logiciels, photographies, images, sons, plans, noms, logos, marques, créations et œuvres protégeables diverses, bases de données…) sont la propriété exclusive de Keelio ou font l'objet d'une autorisation d'utilisation.

Toute reproduction, représentation, utilisation ou adaptation, sous quelque forme que ce soit, de tout ou partie de ces éléments, sans l'accord écrit préalable de Keelio, est strictement interdite et constituerait une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle.`,
  },
  {
    id: 'responsabilite',
    title: 'Responsabilité',
    content: `Les informations contenues sur ce site sont aussi précises que possible et le site est régulièrement mis à jour. Toutefois, Keelio ne peut garantir l'exactitude, la complétude et l'actualité des informations diffusées sur ce site.

Keelio décline toute responsabilité pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur le site, ainsi que pour tout dommage résultant d'une intrusion frauduleuse d'un tiers ou d'une indisponibilité du service.

Les liens hypertextes mis en place dans le cadre de ce site internet en direction d'autres ressources présentes sur le réseau Internet ne sauraient engager la responsabilité de Keelio.`,
  },
  {
    id: 'donnees',
    title: 'Données personnelles',
    content: `Les informations relatives à la collecte et au traitement des données personnelles des utilisateurs du site sont détaillées dans notre Politique de confidentialité, accessible depuis le pied de page du site.

Conformément à la loi n° 78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés, et au Règlement (UE) 2016/679 (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression et de portabilité de vos données personnelles. Pour exercer ces droits, contactez-nous à : contact@keelio.fr.`,
  },
  {
    id: 'cookies',
    title: 'Cookies',
    content: `Ce site est susceptible d'utiliser des cookies à des fins de mesure d'audience et d'amélioration de l'expérience utilisateur. Pour plus d'informations, consultez notre Politique de confidentialité.`,
  },
  {
    id: 'droit',
    title: 'Droit applicable',
    content: `Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.`,
  },
]

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--color-bg)' }}>
      <header className="border-b border-[var(--color-border)]">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="font-display text-lg font-bold tracking-[-0.01em] text-[var(--color-accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-accent)] focus-visible:outline-offset-2"
          >
            Keelio
          </Link>
          <Link
            href="/"
            className="font-body text-xs text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors duration-200 uppercase tracking-[0.1em]"
          >
            ← Retour
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16 lg:py-24">
        <div className="mb-14 pb-10 border-b border-[var(--color-border)]">
          <p className="font-body text-xs text-[var(--color-accent)] uppercase tracking-[0.14em] mb-4">
            Document légal
          </p>
          <h1
            className="font-display font-bold text-[var(--color-text)] mb-6"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}
          >
            Mentions légales
          </h1>
          <p className="font-body text-sm text-[var(--color-text-muted)]">
            Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l'économie numérique.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="pb-10 border-b border-[var(--color-border)] last:border-0 last:pb-0 scroll-mt-8"
            >
              <h2 className="font-display font-semibold text-[var(--color-text)] text-lg mb-5">
                {section.title}
              </h2>
              <div className="flex flex-col gap-4">
                {section.content.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="font-body text-sm leading-relaxed text-[var(--color-text-muted)] whitespace-pre-line">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-16 pt-10 border-t border-[var(--color-border)]">
          <p className="font-body text-xs text-[var(--color-text-muted)] leading-relaxed">
            Keelio — SARL au capital de 1 000 € — RCS Béthune 912 847 231 — 7 rue Pierre Mendès, 62113 Labourse, France —{' '}
            <a href="mailto:contact@keelio.fr" className="text-[var(--color-accent)] hover:underline">
              contact@keelio.fr
            </a>
          </p>
        </div>
      </main>
    </div>
  )
}
