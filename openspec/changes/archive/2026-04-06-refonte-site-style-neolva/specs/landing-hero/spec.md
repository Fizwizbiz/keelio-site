## MODIFIED Requirements

### Requirement: Hero dark avec gradient midnight et accent cyan
Le hero SHALL utiliser un fond gradient dark (midnight vers navy) avec le headline principal en texte blanc/clair, un sous-titre en texte muted bleuté, et le CTA primaire en accent cyan avec glow.

#### Scenario: Fond hero gradient dark
- **WHEN** la page se charge
- **THEN** le hero affiche un fond gradient de `#0A0E1A` vers `#111827` (ou avec une teinte radiale cyan subtile en arrière-plan)

#### Scenario: Headline visible sur fond dark
- **WHEN** le hero est affiché
- **THEN** le H1 est en `--color-text` (#F0F4F8), font Poppins weight 700, clamp(2.5rem, 5vw, 4.5rem)

#### Scenario: CTA primaire cyan avec glow
- **WHEN** le hero est affiché
- **THEN** le bouton CTA primaire "Démarrer maintenant" utilise `--color-accent` (#00D4FF) comme couleur de fond ou de bordure, avec un glow au hover

#### Scenario: Animation stagger fade-up au chargement
- **WHEN** la page se charge
- **THEN** les éléments du hero (badge, H1, sous-titre, CTAs) apparaissent en stagger fade-up avec delays de 0.1s entre chaque
