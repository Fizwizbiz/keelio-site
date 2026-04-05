## Why

Toutes les sections de la landing partagent le même fond `#0A0A0A` et les mêmes bordures `1px solid #1F1F1F` — le résultat est une page qui se lit comme un bloc monolithique sombre. Le visiteur ne perçoit pas les ruptures visuelles entre les sections, ce qui nuit à la lisibilité et à la sensation de progression dans la page.

## What Changes

- **Alternance de fonds** : les sections alternent entre `--color-bg` (#0A0A0A) et `--color-surface` (#111111) pour créer un rythme visuel perceptible sans casser la cohérence sombre
- **Gradient aura sur sections accent** : Hero, QuoteCTA et CTAFinal reçoivent un radial gradient warm (couleur accent à très faible opacité ~4–6%) en fond, centré, pour les distinguer comme sections "clés"
- **Grain CSS sur les sections à aura** : un pseudo-élément avec filtre SVG noise léger donne de la texture et évite l'aspect plat du gradient pur
- **Renforcement des séparateurs** : les `border-t` entre sections passent d'une ligne invisible à un dégradé linéaire horizontal (transparent → border → transparent) pour souligner la transition sans alourdir
- **Mise en valeur des sections intermédiaires** : Problem, HowItWorks et FAQ passent sur `--color-surface` pour rompre la monotonie, Features et SocialProof restent sur `--color-bg`

## Capabilities

### New Capabilities

### Modified Capabilities
- `design-foundation` : Ajout d'exigences de séparation visuelle des sections (alternance de fond, gradient aura, séparateurs dégradés) — la palette et les tokens de base ne changent pas mais les règles d'application entre sections sont formalisées

## Impact

- `app/globals.css` — ajout d'une classe utilitaire `.section-aura` et du filtre grain SVG
- `components/sections/Hero.tsx` — fond aura + grain
- `components/sections/Problem.tsx` — fond `--color-surface`
- `components/sections/HowItWorks.tsx` — fond `--color-surface`
- `components/sections/QuoteCTA.tsx` — fond aura + grain
- `components/sections/CTAFinal.tsx` — fond aura + grain
- `components/sections/FAQ.tsx` — fond `--color-surface`
- Séparateurs `border-t` dans `app/page.tsx` ou directement dans les composants
