## ADDED Requirements

### Requirement: Tokens CSS de design
Le site SHALL définir l'ensemble des tokens de design comme variables CSS dans `globals.css`, couvrant couleurs, typographie et espacements selon la palette Keelio :
- `--color-bg: #0A0A0A`, `--color-surface: #111111`, `--color-border: #1F1F1F`
- `--color-accent: #E8E0D0`, `--color-accent-muted: #A09880`
- `--color-text: #F5F0E8`, `--color-text-muted: #6B6560`
- `--font-display: 'Cormorant Garamond', serif` — titres
- `--font-body: 'DM Sans', sans-serif` — corps et UI

#### Scenario: Tokens disponibles globalement
- **WHEN** n'importe quel composant référence `var(--color-accent)`
- **THEN** la couleur `#E8E0D0` s'applique sans import supplémentaire

#### Scenario: Tokens exposés dans Tailwind
- **WHEN** un développeur utilise la classe `text-accent` dans un composant
- **THEN** la couleur `--color-accent` s'applique via la configuration Tailwind étendue

### Requirement: Typographie chargée via next/font
Le site SHALL charger Cormorant Garamond (weights 300, 400, 600) et DM Sans (weights 400, 500) via `next/font/google` pour garantir le self-hosting et l'absence de CLS.

#### Scenario: Chargement sans requête externe
- **WHEN** la page se charge pour la première fois
- **THEN** aucune requête vers `fonts.googleapis.com` n'est émise (auto-hébergé par Next.js)

#### Scenario: Variables CSS de police disponibles
- **WHEN** le layout global applique les variables de font
- **THEN** `--font-display` et `--font-body` sont disponibles dans tout l'arbre de composants

### Requirement: Composant Button
Le site SHALL fournir un composant `Button` supportant les variantes `primary` (fond accent crème, texte sombre) et `ghost` (transparent, bordure accent), ainsi que les tailles `sm`, `md`, `lg`.

#### Scenario: Hover CTA primary
- **WHEN** l'utilisateur survole un bouton primary
- **THEN** une légère translation Y (-2px) et un glow subtil sur l'accent s'appliquent avec une transition 0.4s

#### Scenario: Focus visible
- **WHEN** l'utilisateur navigue au clavier sur le bouton
- **THEN** un outline visible respectant WCAG AA est affiché

### Requirement: Composant Badge
Le site SHALL fournir un composant `Badge` pour les labels de section (texte uppercase, 0.75rem, letter-spacing 0.12em, fond semi-transparent sur surface).

#### Scenario: Affichage badge de section
- **WHEN** un Badge est rendu avec le texte "Fonctionnalités"
- **THEN** il s'affiche en uppercase avec le style typographique caps défini

### Requirement: Layout global et métadonnées
Le layout (`app/layout.tsx`) SHALL définir les métadonnées SEO de base (title, description, og:image), appliquer les polices et le fond noir par défaut.

#### Scenario: Métadonnées présentes dans le head
- **WHEN** le robot d'indexation visite la page
- **THEN** les balises `<title>`, `<meta name="description">` et Open Graph sont présentes

#### Scenario: Fond noir par défaut
- **WHEN** la page se charge
- **THEN** le body a `background-color: var(--color-bg)` et `color: var(--color-text)`

### Requirement: Contraste WCAG AA
Tous les textes du site SHALL respecter un ratio de contraste minimum de 4.5:1 (texte normal) ou 3:1 (grand texte) par rapport à leur fond.

#### Scenario: Texte principal sur fond noir
- **WHEN** du texte `--color-text` (#F5F0E8) est affiché sur `--color-bg` (#0A0A0A)
- **THEN** le ratio de contraste est supérieur à 4.5:1

### Requirement: Séparation visuelle des sections
Le site SHALL différencier visuellement les sections adjacentes par une combinaison de trois mécanismes : alternance de fonds (bg / surface), gradient aura sur les sections clés, et séparateurs horizontaux dégradés. Aucune nouvelle couleur n'est introduite — seuls les tokens existants sont utilisés à des opacités variées.

#### Scenario: Alternance de fond perceptible
- **WHEN** le visiteur fait défiler la page
- **THEN** les sections Problem, HowItWorks et FAQ affichent `background-color: var(--color-surface)` (#1E1B17), tandis que SocialProof et Features restent sur `var(--color-bg)` (#0A0A0A)

#### Scenario: Aura gradient sur sections clés
- **WHEN** les sections Hero, QuoteCTA et CTAFinal sont rendues
- **THEN** chacune affiche un radial-gradient centré en haut avec `--color-accent` à ≤ 18% d'opacité, via un pseudo-élément `::before` positionné en absolu sur toute la surface de la section

#### Scenario: Séparateurs dégradés entre sections
- **WHEN** deux sections se succèdent dans le flux de la page
- **THEN** le séparateur horizontal est un `div` de 1px dont le fond est `linear-gradient(to right, transparent, rgba(232,224,208,0.22), transparent)`

#### Scenario: Pas de dégradation du contraste WCAG
- **WHEN** les effets de fond (aura, alternance) sont appliqués
- **THEN** tous les textes maintiennent un ratio de contraste ≥ 4.5:1 sur leur fond effectif
