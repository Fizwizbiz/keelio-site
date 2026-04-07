import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Conditions Générales de Vente — Keelio',
  description: 'Conditions Générales de Vente de Keelio, version en vigueur au 1er janvier 2026.',
  robots: { index: false },
}

const articles = [
  {
    id: 'article-1',
    title: 'Article 1 — Objet',
    content: `Keelio propose des services d'assistants vocaux basés sur l'intelligence artificielle destinés aux professionnels (artisans, PME, indépendants), permettant la gestion automatisée des appels téléphoniques entrants, la prise de rendez-vous, la gestion d'agenda et la transmission d'informations aux clients finaux (ci-après les « Services »).

Les Services sont fournis sous forme d'abonnement mensuel. Les caractéristiques détaillées de chaque offre sont décrites sur le site internet www.keelio.fr et dans le devis ou la proposition commerciale transmis au Client.`,
  },
  {
    id: 'article-2',
    title: 'Article 2 — Conditions d\'accès et souscription',
    subsections: [
      {
        title: '2.1 Éligibilité',
        content: `Les Services de Keelio sont exclusivement réservés aux professionnels agissant dans le cadre de leur activité commerciale, artisanale ou libérale. Les particuliers ne peuvent pas souscrire aux Services.`,
      },
      {
        title: '2.2 Souscription',
        content: `La souscription aux Services est formalisée par la signature d'un bon de commande ou l'acceptation d'un devis par le Client, valant acceptation des présentes CGV. Keelio procède à la mise en service dans un délai de 48 à 72 heures ouvrées à compter de la réception de l'ensemble des informations nécessaires à la configuration du Service.`,
      },
      {
        title: '2.3 Obligations du Client',
        content: `Pour permettre la mise en service, le Client s'engage à fournir à Keelio :

— Les informations nécessaires à la configuration de l'assistant vocal (horaires, services, FAQ, contacts d'astreinte) ;
— L'accès à son agenda Google Calendar (Keelio crée le calendar pour le Client si nécessaire) ;
— La confirmation de l'activation du renvoi d'appel depuis son numéro professionnel actuel vers le numéro fourni par Keelio.`,
      },
    ],
  },
  {
    id: 'article-3',
    title: 'Article 3 — Prix et facturation',
    subsections: [
      {
        title: '3.1 Tarifs',
        content: `Les Services sont facturés selon un abonnement mensuel dont le montant est défini dans la proposition commerciale acceptée par le Client. Les tarifs sont exprimés en euros hors taxes. La TVA applicable au taux en vigueur s'ajoute au prix hors taxes.`,
      },
      {
        title: '3.2 Facturation',
        content: `La facturation est mensuelle, à terme à échoir, par prélèvement automatique ou virement bancaire. La première facture est émise à la date de mise en service du Service. Les factures suivantes sont émises le même jour de chaque mois.`,
      },
      {
        title: '3.3 Révision des tarifs',
        content: `Keelio se réserve le droit de modifier ses tarifs à tout moment. Toute modification tarifaire est notifiée au Client par email avec un préavis de 30 jours. Si le Client refuse la modification tarifaire, il peut résilier son abonnement sans pénalité dans ce délai de 30 jours.`,
      },
      {
        title: '3.4 Retard de paiement',
        content: `Tout retard de paiement entraîne de plein droit l'application de pénalités de retard au taux de trois fois le taux d'intérêt légal en vigueur, ainsi qu'une indemnité forfaitaire pour frais de recouvrement de 40 euros conformément à l'article L.441-10 du Code de commerce. Keelio se réserve le droit de suspendre le Service en cas de non-paiement à son échéance après mise en demeure restée sans effet pendant 15 jours.`,
      },
    ],
  },
  {
    id: 'article-4',
    title: 'Article 4 — Durée et résiliation',
    subsections: [
      {
        title: '4.1 Durée',
        content: `L'abonnement est souscrit pour une durée minimale d'un (1) mois, renouvelable tacitement chaque mois. Sauf engagement spécifique mentionné dans la proposition commerciale, aucune durée minimale d'engagement n'est imposée au-delà du premier mois.`,
      },
      {
        title: '4.2 Résiliation par le Client',
        content: `Le Client peut résilier son abonnement à tout moment en adressant une notification par email à contact@keelio.fr. La résiliation prend effet à la fin du mois en cours si elle est notifiée au moins 15 jours avant la date de renouvellement. Dans le cas contraire, elle prend effet à la fin du mois suivant. Aucun remboursement n'est effectué pour la période en cours.`,
      },
      {
        title: '4.3 Résiliation par Keelio',
        content: `Keelio peut résilier l'abonnement de plein droit, sans préavis ni indemnité, en cas de : (i) non-paiement d'une facture à son échéance après mise en demeure restée sans effet ; (ii) utilisation du Service contraire aux présentes CGV ou à la réglementation en vigueur ; (iii) fourniture d'informations inexactes ou mensongères lors de la souscription.`,
      },
    ],
  },
  {
    id: 'article-5',
    title: 'Article 5 — Obligations de Keelio',
    content: `Keelio s'engage à fournir le Service avec le soin et la diligence d'un prestataire professionnel, et à mettre en œuvre les moyens techniques appropriés pour assurer la disponibilité du Service. Keelio s'engage notamment à :

— Configurer et mettre en service l'assistant vocal dans les délais convenus ;
— Assurer la maintenance et les mises à jour nécessaires au bon fonctionnement du Service ;
— Notifier le Client de toute interruption planifiée du Service avec un préavis raisonnable ;
— Traiter les données du Client et de ses clients finaux conformément à la réglementation applicable en matière de protection des données personnelles ;
— Maintenir la confidentialité des informations communiquées par le Client.`,
  },
  {
    id: 'article-6',
    title: 'Article 6 — Limitations de responsabilité',
    subsections: [
      {
        title: '6.1 Obligation de moyens',
        content: `Keelio est tenue à une obligation de moyens et non de résultat. Le Service repose sur des technologies d'intelligence artificielle et de reconnaissance vocale dont les performances peuvent varier selon la qualité des communications téléphoniques, les accents, le bruit ambiant et d'autres facteurs indépendants de la volonté de Keelio.`,
      },
      {
        title: '6.2 Exclusions de responsabilité',
        content: `La responsabilité de Keelio ne saurait être engagée en cas de : (i) interruption du Service due à des causes extérieures (panne des opérateurs téléphoniques, interruption des services tiers tels qu'OpenAI, ElevenLabs, Twilio ou Vapi) ; (ii) utilisation incorrecte du Service par le Client ; (iii) perte de clients ou de chiffre d'affaires résultant d'une indisponibilité temporaire du Service ; (iv) informations incorrectes communiquées par l'assistant vocal du fait d'une FAQ erronée fournie par le Client.`,
      },
      {
        title: '6.3 Plafond d\'indemnisation',
        content: `En tout état de cause, la responsabilité totale de Keelio au titre des présentes CGV est plafonnée au montant des sommes effectivement versées par le Client au cours des trois (3) derniers mois précédant le fait générateur du dommage.`,
      },
    ],
  },
  {
    id: 'article-7',
    title: 'Article 7 — Données personnelles et RGPD',
    subsections: [
      {
        title: '7.1 Responsabilité de traitement',
        content: `Dans le cadre de la fourniture du Service, Keelio traite des données personnelles pour le compte du Client, qui agit en qualité de responsable de traitement au sens du Règlement (UE) 2016/679 (RGPD). Keelio agit en qualité de sous-traitant.`,
      },
      {
        title: '7.2 Données traitées',
        content: `Les données traitées dans le cadre du Service comprennent notamment :

— Les numéros de téléphone des appelants ;
— Les enregistrements audio des appels (conservés par Vapi selon leurs propres CGU) ;
— Les transcriptions des conversations ;
— Les informations communiquées oralement par les appelants (nom, adresse, motif d'appel).`,
      },
      {
        title: '7.3 Engagements de Keelio',
        content: `En qualité de sous-traitant, Keelio s'engage à :

— Traiter les données uniquement pour les finalités définies dans les présentes CGV ;
— Mettre en œuvre les mesures techniques et organisationnelles appropriées pour garantir la sécurité des données ;
— Ne pas sous-traiter le traitement sans l'accord préalable du Client ;
— Notifier le Client de toute violation de données personnelles dans les meilleurs délais ;
— Supprimer ou restituer les données au Client à la fin du contrat.`,
      },
      {
        title: '7.4 Transferts hors UE',
        content: `Le Client est informé que certains sous-traitants de Keelio (notamment OpenAI, ElevenLabs, Vapi) sont établis aux États-Unis. Ces transferts sont encadrés par les mécanismes appropriés prévus par le RGPD (clauses contractuelles types ou décision d'adéquation). Le Client reconnaît accepter ces transferts en souscrivant au Service.`,
      },
    ],
  },
  {
    id: 'article-8',
    title: 'Article 8 — Propriété intellectuelle',
    content: `Keelio reste seul propriétaire de l'ensemble des droits de propriété intellectuelle afférents au Service, aux algorithmes, aux interfaces, aux documents techniques et à tout élément développé dans le cadre de la prestation. Le Client dispose uniquement d'un droit d'usage non exclusif et non transférable du Service pendant la durée de son abonnement.

Le Client conserve la propriété de toutes les données qu'il communique à Keelio (FAQ, informations entreprise, données clients). Il accorde à Keelio une licence non exclusive d'utilisation de ces données pour les seules fins de la fourniture du Service.`,
  },
  {
    id: 'article-9',
    title: 'Article 9 — Confidentialité',
    content: `Chacune des parties s'engage à garder strictement confidentiels tous les documents, informations et données de toute nature relatifs à l'autre partie, dont elle aurait eu connaissance à l'occasion de la conclusion et de l'exécution du présent contrat. Cette obligation de confidentialité s'applique pendant toute la durée du contrat et pendant une période de deux (2) ans après son expiration.`,
  },
  {
    id: 'article-10',
    title: 'Article 10 — Référence commerciale',
    content: `Sauf opposition expresse du Client notifiée par email, Keelio se réserve le droit de mentionner le nom et le logo du Client à titre de référence commerciale, notamment sur son site internet et dans ses supports de présentation.`,
  },
  {
    id: 'article-11',
    title: 'Article 11 — Force majeure',
    content: `Aucune des parties ne sera tenue responsable vis-à-vis de l'autre de tout manquement ou retard dans l'exécution de ses obligations résultant d'un événement de force majeure au sens de l'article 1218 du Code civil. La partie affectée notifiera l'autre partie dans les meilleurs délais de la survenance d'un tel événement. Si l'événement de force majeure persiste au-delà de trente (30) jours, chaque partie pourra résilier le contrat de plein droit sans indemnité.`,
  },
  {
    id: 'article-12',
    title: 'Article 12 — Modifications des CGV',
    content: `Keelio se réserve le droit de modifier les présentes CGV à tout moment. Les nouvelles CGV sont communiquées au Client par email avec un préavis de 30 jours avant leur entrée en vigueur. La poursuite du Service après ce délai vaut acceptation des nouvelles CGV.`,
  },
  {
    id: 'article-13',
    title: 'Article 13 — Droit applicable et litiges',
    subsections: [
      {
        title: '13.1 Droit applicable',
        content: `Les présentes CGV sont soumises au droit français.`,
      },
      {
        title: '13.2 Règlement amiable',
        content: `En cas de litige relatif à l'interprétation ou à l'exécution des présentes CGV, les parties s'engagent à rechercher une solution amiable avant tout recours judiciaire. Une tentative de médiation sera initiée dans un délai de 30 jours à compter de la notification du litige par l'une des parties.`,
      },
      {
        title: '13.3 Tribunal compétent',
        content: `À défaut de règlement amiable, tout litige relatif à la formation, l'interprétation ou l'exécution des présentes CGV sera soumis à la compétence exclusive des tribunaux du ressort du siège social de Keelio, nonobstant pluralité de défendeurs ou appel en garantie.`,
      },
    ],
  },
  {
    id: 'article-14',
    title: 'Article 14 — Contacts',
    content: `Pour toute question relative aux présentes CGV ou au Service :

Email : contact@keelio.fr
Site web : www.keelio.fr
Adresse : 7 rue Pierre Mendès, 62113 Labourse, France`,
  },
]

function renderContent(content: string) {
  return content.split('\n\n').map((paragraph, i) => (
    <p key={i} className="font-body text-sm leading-relaxed text-[var(--color-text-muted)] whitespace-pre-line">
      {paragraph}
    </p>
  ))
}

export default function CGVPage() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--color-bg)' }}>
      {/* Header nav minimal */}
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
        {/* Title block */}
        <div className="mb-14 pb-10 border-b border-[var(--color-border)]">
          <p className="font-body text-xs text-[var(--color-accent)] uppercase tracking-[0.14em] mb-4">
            Document légal
          </p>
          <h1
            className="font-display font-bold text-[var(--color-text)] mb-6"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}
          >
            Conditions Générales de Vente
          </h1>
          <p className="font-body text-sm text-[var(--color-text-muted)]">
            Version en vigueur au 1er janvier 2026
          </p>
        </div>

        {/* Préambule */}
        <section className="mb-12 pb-10 border-b border-[var(--color-border)]">
          <h2 className="font-display font-semibold text-[var(--color-text)] text-lg mb-5">
            Préambule
          </h2>
          <div className="flex flex-col gap-4">
            <p className="font-body text-sm leading-relaxed text-[var(--color-text-muted)]">
              Les présentes Conditions Générales de Vente (ci-après « CGV ») régissent les relations contractuelles entre la société{' '}
              <span className="text-[var(--color-text)]">Keelio</span>, SARL au capital de{' '}
              <span className="text-[var(--color-text)]">1 000 euros</span>, dont le siège social est situé au{' '}
              <span className="text-[var(--color-text)]">7 rue Pierre Mendès, 62113 Labourse, France</span>, immatriculée au Registre du Commerce et des Sociétés sous le numéro{' '}
              <span className="text-[var(--color-text)]">RCS Béthune 912 847 231</span>{' '}
              (ci-après « Keelio » ou le « Prestataire »), et toute personne morale ou physique agissant dans le cadre de son activité professionnelle souscrivant aux services proposés (ci-après le « Client »).
            </p>
            <p className="font-body text-sm leading-relaxed text-[var(--color-text-muted)]">
              Toute souscription aux services de Keelio implique l'acceptation pleine et entière des présentes CGV. Les présentes CGV prévalent sur tout autre document du Client, sauf accord écrit préalable de Keelio.
            </p>
          </div>
        </section>

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

        {/* Articles */}
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

              {'content' in article && article.content && (
                <div className="flex flex-col gap-4">
                  {renderContent(article.content)}
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
                        {renderContent(sub.content)}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Footer légal */}
        <div className="mt-16 pt-10 border-t border-[var(--color-border)]">
          <p className="font-body text-xs text-[var(--color-text-muted)] leading-relaxed">
            Keelio — SARL au capital de 1 000 € — RCS Béthune 912 847 231 — Siège social : 7 rue Pierre Mendès, 62113 Labourse, France — Email :{' '}
            <a href="mailto:contact@keelio.fr" className="text-[var(--color-accent)] hover:underline">
              contact@keelio.fr
            </a>
          </p>
        </div>
      </main>
    </div>
  )
}
