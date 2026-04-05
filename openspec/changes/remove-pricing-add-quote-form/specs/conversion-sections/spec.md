## REMOVED Requirements

### Requirement: Section Tarifs
**Reason**: Le modèle tarifaire fixe est remplacé par un devis personnalisé. Afficher des prix publics ne correspond plus à la stratégie commerciale — les prospects sont invités à contacter Keelio pour obtenir une offre adaptée.
**Migration**: Le composant `Pricing.tsx` (ou équivalent) est supprimé. `app/page.tsx` retire l'import et l'usage de ce composant. La nav retire le lien d'ancre `#tarifs` et le remplace par `#contact`.

## ADDED Requirements

### Requirement: Bloc "Demander un devis"
À la place de la section Tarifs, le site SHALL afficher un bloc de conversion intermédiaire invitant le visiteur à demander un devis. Ce bloc contient : un headline court (ex. "Un projet ? Parlons-en."), un sous-titre (1 ligne expliquant que le tarif est personnalisé), et un CTA primaire "Demander un devis" qui scrolle vers la section `#contact`.

#### Scenario: CTA scroll vers contact
- **WHEN** l'utilisateur clique sur "Demander un devis"
- **THEN** la page scrolle jusqu'à la section `#contact` de façon smooth

#### Scenario: Rendu cohérent avec le design system
- **WHEN** le bloc est rendu
- **THEN** il utilise la même typographie (Cormorant Garamond pour le headline), les couleurs du design system (`--color-accent`, `--color-border`), et des animations `whileInView` (`once: true`)

#### Scenario: Responsive
- **WHEN** le bloc est affiché sur mobile (375px)
- **THEN** headline, sous-titre et CTA sont centrés et lisibles sans overflow

## MODIFIED Requirements

### Requirement: Section FAQ en accordéon
Le site SHALL afficher 5 à 6 questions fréquentes dans un composant accordéon animé. Une seule question est ouverte à la fois. Les animations d'ouverture/fermeture sont fluides (Framer Motion, 0.3s). Les questions SHALL couvrir : délai de mise en place, fonctionnement technique, support, engagement, et devis/tarification.

#### Scenario: Ouverture d'une question
- **WHEN** l'utilisateur clique sur une question fermée
- **THEN** la réponse s'affiche avec une animation d'expansion smooth et la question précédemment ouverte se ferme

#### Scenario: Accessibilité accordéon
- **WHEN** l'utilisateur navigue au clavier
- **THEN** chaque item FAQ est accessible via Tab et activable via Espace/Entrée, avec aria-expanded mis à jour

#### Scenario: Questions pertinentes
- **WHEN** la section FAQ est rendue
- **THEN** au moins 5 questions couvrent : délai de mise en place, engagement, fonctionnement technique, support, et tarification (réponse : devis personnalisé sur demande)
