## Context

Le site utilise déjà Framer Motion pour les animations d'entrée (whileInView, stagger). Les cards et cadres actuels sont des éléments statiques — ils ne réagissent pas au survol de la souris. Le style dark midnight + cyan se prête parfaitement aux effets hover lumineux (glow) combinés à une micro-élévation.

## Goals / Non-Goals

**Goals:**
- Ajouter `whileHover` Framer Motion sur toutes les cards/cadres interactifs
- Effets cohérents : translate-Y -4px à -6px + glow cyan sur bordure au hover
- Transitions douces 0.3s–0.4s, `ease: [0.25, 0.1, 0.25, 1]`
- Respect de `prefers-reduced-motion` (animations désactivées si préférence système)

**Non-Goals:**
- Animations click/tap (uniquement hover)
- Effets sur les éléments de texte purs (paragraphes, titres)
- Animations 3D ou perspective complexes

## Decisions

### 1. Framer Motion `whileHover` sur les wrappers de cards

Chaque card devient une `motion.div` (ou la div existante est convertie). Le `whileHover` applique :
```js
whileHover={{ y: -5, boxShadow: '0 0 24px rgba(0,212,255,0.15), 0 8px 32px rgba(0,0,0,0.4)' }}
transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
```

Alternatives considérées :
- CSS `transform: translateY` pur → moins contrôlable, pas d'accès à `prefers-reduced-motion` via Framer
- `scale(1.02)` → risque de chevauchement sur les grids, rejeté

### 2. Glow sur bordure via `boxShadow` animé

La bordure cyan glows via `box-shadow` plutôt que `border-color` (pas de layout recalculation). La valeur hover est `0 0 0 1px rgba(0,212,255,0.4), 0 0 20px rgba(0,212,255,0.12)`.

### 3. `prefers-reduced-motion` via hook custom

Un hook `useReducedMotion()` de Framer Motion (`import { useReducedMotion } from 'framer-motion'`) permet de désactiver les animations si l'utilisateur a configuré cette préférence système.

## Risks / Trade-offs

- **Performance GPU** → `transform` et `box-shadow` sont composited par le navigateur, pas de reflow. Risque minimal.
- **Superposition de cartes** → Si les cards sont dans une grille serrée, un `y: -5` peut chevaucher la card du dessus. Mitigation : ajouter `position: relative; z-index: 1` au hover.
