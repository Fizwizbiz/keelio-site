## MODIFIED Requirements

### Requirement: Tokens CSS de design
Le site SHALL définir l'ensemble des tokens de design comme variables CSS dans `globals.css`, couvrant couleurs, typographie et espacements selon la palette Keelio light :
- `--color-bg: #F5F0E6`, `--color-surface: #EDE7D9`, `--color-border: #D4C9B0`
- `--color-accent: #6B4F2E`, `--color-accent-muted: #9B7B52`
- `--color-text: #1C1917`, `--color-text-muted: #6B6050`
- `--font-display: 'Cormorant Garamond', serif` — titres
- `--font-body: 'DM Sans', sans-serif` — corps et UI

#### Scenario: Tokens disponibles globalement
- **WHEN** n'importe quel composant référence `var(--color-accent)`
- **THEN** la couleur `#6B4F2E` s'applique sans import supplémentaire

#### Scenario: Tokens exposés dans Tailwind
- **WHEN** un développeur utilise la classe `text-accent` dans un composant
- **THEN** la couleur `--color-accent` s'applique via la configuration Tailwind étendue

## REMOVED Requirements

### Requirement: Palette non-noire (design-foundation-v2)
**Reason**: Remplacé par la nouvelle exigence light mode — la palette n'est plus sombre du tout.
**Migration**: Voir spec `palette-light` pour les nouvelles exigences.
