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

### Requirement: Bloc CTA Final
Le site SHALL afficher un bloc de conversion final avec un headline fort, un sous-titre court et un CTA primaire "Démarrer maintenant". Ce bloc SHALL avoir un fond légèrement différencié (gradient subtil ou fond `--color-surface`) pour marquer visuellement la fin de la page.

#### Scenario: Headline impactant
- **WHEN** le bloc CTA final est rendu
- **THEN** le headline est en Cormorant Garamond, grande taille, centré, avec un message de bénéfice concret

#### Scenario: Animation d'entrée
- **WHEN** le bloc entre dans le viewport
- **THEN** headline et CTA apparaissent en fade-up avec `whileInView` (`once: true`)

## MODIFIED Requirements

### Requirement: Bloc CTA final dark avec gradient et headline fort
Le bloc CTA final SHALL utiliser un fond dark légèrement différencié (gradient ou surface élevée) pour se distinguer des sections précédentes, avec un headline fort et le CTA primaire en accent cyan.

#### Scenario: Fond CTA final distinct
- **WHEN** le bloc CTA final est affiché
- **THEN** il utilise un fond légèrement plus clair que `--color-bg` (ex: `--color-surface`) ou un gradient subtil pour marquer la rupture visuelle

#### Scenario: CTA primaire bien visible
- **WHEN** le bloc CTA final est affiché
- **THEN** le bouton "Démarrer maintenant" est en `--color-accent` (#00D4FF) avec glow au hover, clairement distinct du fond dark

#### Scenario: Animation d'entrée whileInView
- **WHEN** l'utilisateur scrolle jusqu'au bloc CTA final
- **THEN** le headline et le CTA apparaissent en fade-up avec une transition douce (0.5s)
