## Why

La section "Opérationnel en 3 étapes" souffre de trois défauts cumulés : (1) les cards utilisent `bg-[var(--color-surface)]` sur une section elle-même `--color-surface` — tout se confond dans le même brun clair ; (2) l'animation est un fade-up générique sans sentiment de progression ; (3) le layout 3 colonnes égales est le pattern le plus classique qui soit — rien ne le distingue.

## What Changes

- **Fond de section** : retour à `--color-bg` (#0A0A0A) — la section s'intègre dans le flux sombre, sans sur-éclairage
- **Layout** : abandon des cards bornées ; les 3 étapes deviennent des blocs typographiques décalés verticalement sur desktop (staircase), reliés par une ligne verticale animée côté gauche
- **Numéros** : les chiffres `01 / 02 / 03` deviennent de grands glyphes Cormorant Garamond (8–10rem, opacité 6–8%) en arrière-plan absolu de chaque step — décoratifs, non-informatifs
- **Connecteur animé** : une ligne verticale fine (`1px`, couleur accent à 20%) sur le côté gauche se dessine progressivement (pathLength Framer Motion) au fur et à mesure que les étapes entrent en vue
- **Animations** : chaque step entre en `x: -20 → 0` + `opacity: 0 → 1` avec un stagger de 0.2s — sentiment de chaîne plutôt que d'apparition simultanée
- **Suppression** des cards à bordures et du grid 3 colonnes

## Capabilities

### New Capabilities

### Modified Capabilities
- `value-sections` : La section "Comment ça marche" change de layout (staircase vertical vs grid horizontal) et d'animation (chaîne progressive vs stagger simple)

## Impact

- `components/sections/HowItWorks.tsx` — réécriture complète du composant
- `app/globals.css` — aucun changement de token requis
- `app/page.tsx` — inchangé
