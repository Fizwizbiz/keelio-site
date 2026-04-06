## ADDED Requirements

### Requirement: Section Social Proof
Le site SHALL afficher une section "Ils nous font confiance" avec des logos clients en grayscale disposés horizontalement. En l'absence d'assets clients réels, des placeholders SVG cohérents sont utilisés.

#### Scenario: Affichage des logos
- **WHEN** la section social proof est visible
- **THEN** les logos sont affichés en grayscale avec un filtre `opacity: 0.6` et passent en `opacity: 1` au hover

#### Scenario: Responsive logos
- **WHEN** la section est affichée sur mobile
- **THEN** les logos sont disposés en grille 2 colonnes ou scroll horizontal

### Requirement: Section Problème
Le site SHALL afficher une section mettant en évidence ce que le client perd sans Keelio : appels manqués, disponibilité limitée, temps perdu. Format : headline accrocheur + liste de pain points avec icônes ou marqueurs visuels.

#### Scenario: Animation d'entrée au scroll
- **WHEN** la section entre dans le viewport
- **THEN** les éléments apparaissent en fade-up avec `whileInView` Framer Motion (`once: true`)

#### Scenario: Pain points clairs
- **WHEN** un visiteur lit la section
- **THEN** au moins 3 pain points distincts sont présentés (ex. : appels manqués, indisponibilité la nuit/weekend, temps perdu en tâches répétitives)

### Requirement: Section Features / Solution
Le site SHALL afficher 3 à 4 fonctionnalités clés de Keelio dans un grid asymétrique (pas de 3 colonnes identiques). Chaque feature : icône ou visuel, titre court, description 2–3 lignes.

#### Scenario: Grid asymétrique desktop
- **WHEN** la section est affichée sur desktop
- **THEN** la mise en page varie les proportions (ex. : une card grande + deux petites, ou layout en L)

#### Scenario: Responsive features
- **WHEN** la section est affichée sur mobile
- **THEN** les features sont empilées verticalement en colonne unique

#### Scenario: Animation staggered des cards
- **WHEN** la section entre dans le viewport
- **THEN** les cards de features apparaissent en séquence avec un délai de 0.1s

### Requirement: Section Comment ça marche
Le site SHALL afficher 3 étapes numérotées illustrant le processus d'onboarding Keelio (1. On discute, 2. On configure, 3. C'est live). Sur desktop, le layout est en "staircase" — les étapes sont décalées verticalement pour créer une diagonale descendante. Sur mobile, les étapes sont empilées verticalement en colonne. La section SHALL utiliser `background-color: var(--color-bg)` pour s'intégrer dans le flux sombre.

#### Scenario: Étapes numérotées
- **WHEN** la section est rendue
- **THEN** chaque étape affiche un numéro stylisé (01/02/03), un titre et une description courte

#### Scenario: Layout staircase desktop
- **WHEN** la section est affichée sur desktop (lg+)
- **THEN** les 3 étapes sont disposées horizontalement avec des décalages verticaux progressifs créant une diagonale visuelle descendante

#### Scenario: Grand chiffre fantôme
- **WHEN** chaque étape est rendue
- **THEN** le numéro de l'étape apparaît en grand (≥ 6rem) en arrière-plan, en Cormorant Garamond, opacité ≤ 8%, `aria-hidden: true`

#### Scenario: Connecteur visuel entre étapes
- **WHEN** la section est affichée
- **THEN** une ligne verticale de couleur accent (opacité ≤ 22%) accompagne chaque étape, animée en `scaleY 0→1` au scroll

#### Scenario: Responsive mobile
- **WHEN** la section est affichée sur mobile (< lg)
- **THEN** les décalages desktop disparaissent, les étapes s'empilent verticalement en colonne unique sans scroll horizontal

## MODIFIED Requirements

### Requirement: Section Problème en dark avec highlights cyan sur les pertes
La section problème SHALL afficher les conséquences négatives pour le client (appels manqués, disponibilité limitée) sur fond dark, avec les chiffres clés ou éléments de douleur mis en évidence par la couleur accent cyan ou un rouge atténué.

#### Scenario: Fond dark sur section problème
- **WHEN** la section problème est affichée
- **THEN** elle utilise `--color-bg` ou `--color-surface` comme fond, sans fond clair ou beige résiduel

#### Scenario: Éléments de douleur visibles
- **WHEN** les points de douleur client sont listés
- **THEN** les chiffres ou mots clés sont en `--color-accent` (#00D4FF) ou `--color-text` bold pour attirer l'œil

### Requirement: Section HowItWorks dark avec étapes numérotées accent cyan
La section HowItWorks SHALL afficher les 3 étapes avec des numéros larges en accent cyan sur fond dark, donnant une lisibilité et un impact visuel fort.

#### Scenario: Numéros d'étape en cyan
- **WHEN** la section HowItWorks est affichée
- **THEN** les numéros (01, 02, 03) sont affichés en grand, couleur `--color-accent` (#00D4FF), Poppins weight 700

#### Scenario: Connecteur visuel entre étapes
- **WHEN** les étapes HowItWorks sont affichées sur desktop
- **THEN** une ligne fine ou des flèches relient visuellement les étapes, en `--color-border`

### Requirement: Hover interactif sur les pain point cards de Problem
Les 3 cards de la section Problem (Appels manqués, Disponibilité limitée, Tâches répétitives) SHALL réagir au hover avec élévation et glow cyan sur leur bordure.

#### Scenario: Pain point card animée au hover
- **WHEN** l'utilisateur survole une pain point card
- **THEN** la card se translate de -5px en Y, affiche un glow cyan (`0 0 0 1px rgba(0,212,255,0.35), 0 0 18px rgba(0,212,255,0.10)`) et son icône passe en couleur accent plus vive

### Requirement: Micro-hover sur les étapes HowItWorks
Les 3 étapes de la section HowItWorks SHALL réagir au hover avec un léger décalage horizontal et un accent line glow.

#### Scenario: Step card HowItWorks animée au hover
- **WHEN** l'utilisateur survole une étape HowItWorks
- **THEN** le contenu de l'étape se translate de -3px en X et la ligne verticale cyan augmente légèrement en opacité (0.22 → 0.55)
