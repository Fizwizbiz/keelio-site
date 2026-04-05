## MODIFIED Requirements

### Requirement: Section Comment ça marche
Le site SHALL afficher 3 étapes numérotées illustrant le processus d'onboarding Keelio (1. On discute, 2. On configure, 3. C'est live). Sur desktop, le layout est en "staircase" — les étapes sont décalées verticalement pour créer une diagonale descendante. Sur mobile, les étapes sont empilées verticalement en colonne. La section SHALL utiliser `background-color: var(--color-bg)` pour s'intégrer dans le flux sombre.

#### Scenario: Étapes numérotées
- **WHEN** la section est rendue
- **THEN** chaque étape affiche un numéro stylisé (01/02/03), un titre et une description courte

#### Scenario: Layout staircase desktop
- **WHEN** la section est affichée sur desktop (lg+)
- **THEN** les 3 étapes sont disposées horizontalement avec des décalages verticaux progressifs (step 02 plus bas que 01, step 03 plus bas que 02), créant une diagonale visuelle descendante

#### Scenario: Grand chiffre fantôme
- **WHEN** chaque étape est rendue
- **THEN** le numéro de l'étape apparaît en grand (≥ 6rem) en arrière-plan, en Cormorant Garamond, opacité ≤ 8%, `aria-hidden: true`, sans interférer avec la lisibilité du texte principal

#### Scenario: Connecteur visuel entre étapes
- **WHEN** la section est affichée
- **THEN** une ligne ou trait décoratif de couleur accent (opacité ≤ 20%) accompagne chaque étape pour créer un fil directeur visuel

#### Scenario: Animation en chaîne
- **WHEN** la section entre dans le viewport
- **THEN** les étapes apparaissent séquentiellement avec un stagger ≥ 0.2s, chaque step glissant en `x` ou `y` avec `opacity: 0 → 1`

#### Scenario: Responsive mobile
- **WHEN** la section est affichée sur mobile (< lg)
- **THEN** les décalages desktop disparaissent, les étapes s'empilent verticalement en colonne unique sans scroll horizontal
