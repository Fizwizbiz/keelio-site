## MODIFIED Requirements

### Requirement: Footer dark avec liens hover cyan
Le footer SHALL utiliser un fond dark (légèrement plus sombre que `--color-bg` ou identique), du texte muted bleuté, et des liens qui passent en `--color-accent` cyan au hover.

#### Scenario: Fond footer dark cohérent
- **WHEN** le footer est affiché
- **THEN** il utilise `--color-bg` ou une variante légèrement plus sombre, sans fond clair résiduel

#### Scenario: Liens footer hover cyan
- **WHEN** l'utilisateur survole un lien dans le footer
- **THEN** la couleur du lien passe de `--color-text-muted` à `--color-accent` (#00D4FF) avec une transition de 0.2s

#### Scenario: Logo Keelio visible sur fond dark
- **WHEN** le footer est affiché
- **THEN** le logo ou le nom Keelio est en `--color-text` (#F0F4F8) ou en version blanche, lisible sur fond dark
