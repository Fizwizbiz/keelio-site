## MODIFIED Requirements

### Requirement: Cards features dark avec bordure subtile et hover cyan
Les cards de features SHALL utiliser un fond `--color-surface` avec une bordure `--color-border`, et afficher un accent cyan (bordure top ou icône) au hover pour souligner la feature active.

#### Scenario: Card feature en style dark
- **WHEN** la section Features est affichée
- **THEN** chaque card a un fond `#111827`, une bordure `1px solid #1E2A3A`, sans shadow agressive

#### Scenario: Hover cyan sur card feature
- **WHEN** l'utilisateur survole une card de feature
- **THEN** la bordure top de la card passe en `--color-accent` (#00D4FF) avec une transition douce de 0.3s

#### Scenario: Icône feature en accent cyan
- **WHEN** une card de feature est affichée
- **THEN** l'icône ou le pictogramme de la feature est coloré en `--color-accent` (#00D4FF)

#### Scenario: Animation whileInView sur les cards
- **WHEN** l'utilisateur scrolle jusqu'à la section Features
- **THEN** les cards apparaissent en stagger fade-up (once: true) avec un délai de 0.15s entre chaque card
