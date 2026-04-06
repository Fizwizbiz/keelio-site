## MODIFIED Requirements

### Requirement: Tokens CSS de design
Le site SHALL définir l'ensemble des tokens de design comme variables CSS dans `globals.css`, couvrant couleurs, typographie et espacements selon la palette Keelio revisée :
- `--color-bg: #141414`, `--color-surface: #1E1E1E`, `--color-border: #2E2E2E`
- `--color-accent: #D4C5A9`, `--color-accent-muted: #8F8270`
- `--color-text: #F0EBE1`, `--color-text-muted: #7A7570`
- `--font-display: 'Cormorant Garamond', serif` — titres
- `--font-body: 'DM Sans', sans-serif` — corps et UI

#### Scenario: Tokens disponibles globalement
- **WHEN** n'importe quel composant référence `var(--color-accent)`
- **THEN** la couleur `#D4C5A9` s'applique sans import supplémentaire

#### Scenario: Tokens exposés dans Tailwind
- **WHEN** un développeur utilise la classe `text-accent` dans un composant
- **THEN** la couleur `--color-accent` s'applique via la configuration Tailwind étendue

## REMOVED Requirements

### Requirement: Section CTAFinal redondante
**Reason**: Le composant `CTAFinal` ("Prêt à ne plus jamais rater une opportunité ?") est redondant avec `QuoteCTA` qui couvre déjà la même intention de conversion finale.
**Migration**: Supprimer `components/sections/CTAFinal.tsx` et retirer l'import + usage de `<CTAFinal />` dans `app/page.tsx`.
