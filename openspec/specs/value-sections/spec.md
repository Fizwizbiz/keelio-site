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
Le site SHALL afficher 3 étapes numérotées illustrant le processus d'onboarding Keelio (ex. : 1. On discute, 2. On configure, 3. C'est live). Format horizontal sur desktop, vertical sur mobile.

#### Scenario: Étapes numérotées
- **WHEN** la section est rendue
- **THEN** chaque étape affiche un numéro stylisé, un titre et une description courte

#### Scenario: Connecteur visuel entre étapes
- **WHEN** la section est affichée sur desktop
- **THEN** une ligne ou flèche décorative relie visuellement les 3 étapes
