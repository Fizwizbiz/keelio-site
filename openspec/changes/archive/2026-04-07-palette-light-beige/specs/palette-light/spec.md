## ADDED Requirements

### Requirement: Light mode crème chaud
Le site SHALL utiliser un fond clair crème chaud (`#F5F0E6`) avec texte sombre (`#1C1917`) — le site n'est plus en dark mode. Le contraste WCAG AA SHALL être respecté sur tous les textes.

#### Scenario: Fond crème visible
- **WHEN** un utilisateur charge la page
- **THEN** le fond est perçu comme un beige crème chaud (non blanc), élégant et éditorial

#### Scenario: Contraste texte/fond WCAG AA
- **WHEN** le texte principal `#1C1917` s'affiche sur `--color-bg` (`#F5F0E6`)
- **THEN** le ratio de contraste est supérieur à 7:1 (WCAG AAA)

### Requirement: Composants sans rgba sombres hardcodés
Tous les composants SHALL utiliser des valeurs `rgba` basées sur la nouvelle teinte accent `#6B4F2E` (107,79,46) ou sur les tokens CSS — aucun `rgba(17,17,17,...)` ou `rgba(232,224,208,...)` ne SHALL subsister.

#### Scenario: Nav backdrop sur fond clair
- **WHEN** l'utilisateur scrolle et le header devient opaque
- **THEN** le backdrop est `rgba(245,240,230,0.85)` avec blur — lisible sur fond crème

#### Scenario: Bouton primary lisible
- **WHEN** un bouton primary est rendu
- **THEN** le fond est `--color-accent` (#6B4F2E) avec texte `--color-bg` (#F5F0E6) — contraste suffisant

### Requirement: Effets visuels adaptés au fond clair
Les effets `section-aura`, grain texture et séparateurs SHALL être adaptés pour un fond clair — opacités et teintes révisées pour rester subtils sans disparaître.

#### Scenario: Section-aura perceptible
- **WHEN** une section avec la classe `section-aura` est rendue
- **THEN** un gradient radial subtil utilisant `rgba(107,79,46,X)` est visible sans agressivité

#### Scenario: Séparateur visible
- **WHEN** un SectionDivider est rendu entre deux sections
- **THEN** la ligne dégradée est perceptible sur fond crème
