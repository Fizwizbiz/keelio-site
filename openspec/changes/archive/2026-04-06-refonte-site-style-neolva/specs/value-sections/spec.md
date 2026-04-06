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
