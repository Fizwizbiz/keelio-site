import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Politique de confidentialité — Keelio',
  description: 'Politique de confidentialité et protection des données personnelles de Keelio.',
  robots: { index: false },
}

const articles = [
  {
    id: 'responsable',
    title: '1. Responsable de traitement',
    content: `Le responsable du traitement des données personnelles collectées sur le site www.keelio.fr est :

Keelio — SARL au capital de 1 000 euros
7 rue Pierre Mendès, 62113 Labourse, France
RCS Béthune 912 847 231
Email : contact@keelio.fr`,
  },
  {
    id: 'donnees-collectees',
    title: '2. Données collectées',
    subsections: [
      {
        title: '2.1 Via le formulaire de contact',
        content: `Lorsque vous remplissez le formulaire de contact ou de demande de devis, Keelio collecte les données suivantes :

— Prénom et nom
— Adresse email professionnelle
— Numéro de téléphone (facultatif)
— Message décrivant votre besoin

Ces données sont strictement nécessaires pour vous recontacter et établir une proposition commerciale.`,
      },
      {
        title: '2.2 Données de navigation',
        content: `Lors de votre visite sur le site, des données techniques peuvent être collectées automatiquement : adresse IP, type de navigateur, pages visitées, durée de la visite. Ces données sont utilisées uniquement à des fins statistiques anonymes.`,
      },
      {
        title: '2.3 Dans le cadre du Service',
        content: `Pour les clients ayant souscrit au Service Keelio, des données supplémentaires sont traitées dans le cadre de la fourniture du service d'assistant vocal. Ces traitements sont décrits dans les Conditions Générales de Vente.`,
      },
    ],
  },
  {
    id: 'finalites',
    title: '3. Finalités et bases légales',
    content: `Keelio traite vos données personnelles pour les finalités suivantes :

— Traitement de votre demande de contact ou de devis (base légale : intérêt légitime / exécution de mesures précontractuelles)
— Fourniture et gestion du Service souscrit (base légale : exécution du contrat)
— Amélioration du site et des services (base légale : intérêt légitime)
— Respect des obligations légales (base légale : obligation légale)`,
  },
  {
    id: 'duree',
    title: '4. Durée de conservation',
    content: `Vos données sont conservées pendant les durées suivantes :

— Données de formulaire de contact : 3 ans à compter du dernier contact
— Données clients (contrat en cours) : durée du contrat + 5 ans (obligations comptables et légales)
— Données de navigation : 13 mois maximum
— Enregistrements audio des appels : durée définie par les CGU de Vapi (sous-traitant)`,
  },
  {
    id: 'droits',
    title: '5. Vos droits',
    content: `Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des droits suivants concernant vos données personnelles :

— Droit d'accès : obtenir une copie de vos données
— Droit de rectification : corriger des données inexactes
— Droit à l'effacement : demander la suppression de vos données
— Droit à la limitation : restreindre le traitement de vos données
— Droit à la portabilité : recevoir vos données dans un format structuré
— Droit d'opposition : vous opposer à un traitement basé sur l'intérêt légitime

Pour exercer ces droits, adressez votre demande par email à : contact@keelio.fr

Vous pouvez également introduire une réclamation auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés) : www.cnil.fr`,
  },
  {
    id: 'sous-traitants',
    title: '6. Sous-traitants et destinataires',
    content: `Keelio fait appel à des prestataires techniques pour la fourniture du Service. Ces sous-traitants traitent vos données sous l'autorité de Keelio et sont tenus à la confidentialité :

— Vercel Inc. (hébergement du site, États-Unis) — mécanisme : clauses contractuelles types
— OpenAI (intelligence artificielle, États-Unis) — mécanisme : clauses contractuelles types
— ElevenLabs (synthèse vocale, États-Unis) — mécanisme : clauses contractuelles types
— Vapi (infrastructure d'appels vocaux, États-Unis) — mécanisme : clauses contractuelles types
— n8n (automatisation des workflows, Allemagne / auto-hébergé) — mécanisme : RGPD applicable

Keelio ne vend ni ne loue vos données personnelles à des tiers.`,
  },
  {
    id: 'transferts',
    title: '7. Transferts hors Union européenne',
    content: `Certains de nos sous-traitants sont établis aux États-Unis. Ces transferts de données sont encadrés par des mécanismes conformes au RGPD (clauses contractuelles types adoptées par la Commission européenne), garantissant un niveau de protection adéquat de vos données.`,
  },
  {
    id: 'cookies',
    title: '8. Cookies',
    content: `Le site www.keelio.fr peut utiliser des cookies techniques strictement nécessaires au fonctionnement du site. Aucun cookie publicitaire ou de tracking tiers n'est déposé sans votre consentement préalable.

Vous pouvez configurer votre navigateur pour refuser les cookies ou être alerté lorsqu'un cookie est envoyé. Toutefois, certaines fonctionnalités du site pourraient ne plus être disponibles.`,
  },
  {
    id: 'securite',
    title: '9. Sécurité',
    content: `Keelio met en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès non autorisé, perte, altération ou divulgation. Le site est servi exclusivement en HTTPS. Les accès aux systèmes traitant des données personnelles sont strictement contrôlés.`,
  },
  {
    id: 'modifications',
    title: '10. Modifications de la présente politique',
    content: `Keelio se réserve le droit de modifier la présente politique de confidentialité à tout moment, notamment pour se conformer à toute évolution légale, réglementaire ou technique. La date de dernière mise à jour est indiquée en bas de cette page. Nous vous encourageons à consulter régulièrement cette page.`,
  },
  {
    id: 'contact',
    title: '11. Contact',
    content: `Pour toute question relative à la protection de vos données personnelles ou pour exercer vos droits :

Email : contact@keelio.fr
Adresse : 7 rue Pierre Mendès, 62113 Labourse, France

Vous pouvez également contacter la CNIL :
Commission Nationale de l'Informatique et des Libertés
3 place de Fontenoy, 75007 Paris
www.cnil.fr`,
  },
]

export default function PolitiqueConfidentialitePage() {
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
            Politique de confidentialité
          </h1>
          <p className="font-body text-sm text-[var(--color-text-muted)]">
            Dernière mise à jour : 1er janvier 2026 — Conformément au Règlement (UE) 2016/679 (RGPD) et à la loi Informatique et Libertés.
          </p>
        </div>

        {/* Table des matières */}
        <nav className="mb-12 pb-10 border-b border-[var(--color-border)]" aria-label="Table des matières">
          <p className="font-body text-xs text-[var(--color-text-muted)] uppercase tracking-[0.1em] mb-4">
            Sommaire
          </p>
          <ol className="flex flex-col gap-2">
            {articles.map((article) => (
              <li key={article.id}>
                <a
                  href={`#${article.id}`}
                  className="font-body text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors duration-200"
                >
                  {article.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="flex flex-col gap-12">
          {articles.map((article) => (
            <section
              key={article.id}
              id={article.id}
              className="pb-10 border-b border-[var(--color-border)] last:border-0 last:pb-0 scroll-mt-8"
            >
              <h2 className="font-display font-semibold text-[var(--color-text)] text-lg mb-5">
                {article.title}
              </h2>

              {'content' in article && (
                <div className="flex flex-col gap-4">
                  {article.content.split('\n\n').map((paragraph, i) => (
                    <p key={i} className="font-body text-sm leading-relaxed text-[var(--color-text-muted)] whitespace-pre-line">
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}

              {'subsections' in article && article.subsections && (
                <div className="flex flex-col gap-8">
                  {article.subsections.map((sub) => (
                    <div key={sub.title}>
                      <h3 className="font-body font-semibold text-[var(--color-text)] text-sm mb-3">
                        {sub.title}
                      </h3>
                      <div className="flex flex-col gap-4">
                        {sub.content.split('\n\n').map((paragraph, i) => (
                          <p key={i} className="font-body text-sm leading-relaxed text-[var(--color-text-muted)] whitespace-pre-line">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
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
