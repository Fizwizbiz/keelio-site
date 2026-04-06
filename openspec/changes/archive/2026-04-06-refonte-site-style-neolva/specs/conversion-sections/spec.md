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
