## Why

Le site actuel utilise exclusivement des angles droits (sharp corners) et un thème entièrement dark. L'inspiration neolva.fr adopte une esthétique plus moderne et aérée : angles arrondis sur toutes les cartes/cadres, et une alternance claire entre sections sombres et sections blanches/claires qui crée un rythme visuel fort et améliore la lisibilité.

## What Changes

- **Angles arrondis** : tous les cadres (cartes pain points, stats, mockup chat, étapes HowItWorks, accordéon FAQ, formulaire Contact, badges) passent de angles droits à `rounded-2xl` (16px) ou `rounded-xl` (12px)
- **Sections claires** : une section sur deux passe à fond blanc/très clair avec texte sombre, créant une alternance dark ↔ light à la manière de neolva.fr
- **Palette étendue** : ajout de tokens CSS pour les sections claires (`--color-bg-light`, `--color-text-dark`, `--color-surface-light`)
- **Adaptation des composants** : textes, bordures, icônes et accents s'adaptent au contexte clair (pas de texte blanc sur fond blanc)

## Capabilities

### New Capabilities
- `light-sections`: Sections à fond clair/blanc avec adaptation complète des couleurs (texte sombre, bordures, accents)
- `rounded-ui`: Système de border-radius cohérent sur tous les composants de l'interface

### Modified Capabilities
- `design-foundation-v3`: Ajout des tokens de couleur pour le mode clair (`--color-bg-light`, `--color-surface-light`, `--color-text-dark`, `--color-text-dark-muted`)
- `card-hover-interactions`: Les effets hover doivent s'adapter au contexte clair (glow cyan reste, mais ombres et couleurs ajustées)

## Impact

- `app/globals.css` : nouveaux tokens CSS, nouvelles classes `.section-light`, `.section-light-surface`
- `components/ui/Badge.tsx` : `rounded-full` sur les badges
- `components/ui/Button.tsx` : `rounded-lg` sur les boutons
- `components/ui/AudioPlayer.tsx` : `rounded-xl`
- `components/sections/Features.tsx` : section passe en light, stats cards arrondies
- `components/sections/HowItWorks.tsx` : section light, step cards arrondies
- `components/sections/FAQ.tsx` : accordion items arrondis
- `components/sections/Contact.tsx` : form inputs et container arrondis
- `components/sections/SocialProof.tsx` : logos cards arrondie
