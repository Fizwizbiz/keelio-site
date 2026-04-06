## Why

Le site dark est visuellement propre mais les éléments interactifs (cards stats, cards pain points, cadres mockup) sont statiques. Ajouter des animations hover subtiles — légère élévation, glow cyan, micro-mouvement — renforce le dynamisme tech du style inspiré de neolva.fr et améliore la perception de qualité et de vie du produit.

## What Changes

- Ajout d'un effet hover sur les cards de stats dans la section Features (légère élévation + glow cyan sur la bordure)
- Ajout d'un effet hover sur les cards pain points dans la section Problem (translate-Y + bordure cyan)
- Ajout d'un effet hover subtle sur le cadre du chat mockup dans Features (scale légère + glow)
- Ajout d'un micro-mouvement hover sur les steps de HowItWorks (translate-X + accent line glow)
- Tous les effets restent calmes et maîtrisés — durée 0.3s–0.4s, pas de bounce

## Capabilities

### New Capabilities

- `card-hover-interactions`: Interactions hover dynamiques sur tous les éléments de type card/cadre du site — élévation, glow cyan, micro-mouvements Framer Motion

### Modified Capabilities

- `features-section-v2`: Les stats cards et le chat mockup acquièrent des interactions hover
- `value-sections`: Les pain point cards de la section Problem acquièrent un hover dynamique

## Impact

- `components/sections/Features.tsx` : wrapper Framer Motion `whileHover` sur les stat cards et le chat mockup
- `components/sections/Problem.tsx` : wrapper `whileHover` sur les pain point cards
- `components/sections/HowItWorks.tsx` : micro-hover sur les step cards
- Aucune dépendance nouvelle — Framer Motion déjà installé
