## Context

HowItWorks est actuellement un grid 3 colonnes avec des cards `bg-surface` sur fond `bg-surface` — les deux se confondent. Le composant existe dans `components/sections/HowItWorks.tsx` et est servi via `app/page.tsx`. Il n'a pas d'interactions complexes — c'est un composant purement présentatiel avec animations Framer Motion `whileInView`.

## Goals / Non-Goals

**Goals:**
- Layout "staircase" — chaque step est décalé horizontalement et/ou verticalement pour créer une impression de descente/progression
- Grands chiffres fantômes (Cormorant, opacité ~7%) en background de chaque step
- Connecteur vertical animé (ligne qui se dessine de haut en bas au scroll)
- Animations en chaîne (chaque step entre après le précédent)
- Fond `--color-bg` pour contraste maximum avec le reste du site

**Non-Goals:**
- Changer le contenu textuel des 3 étapes
- Ajouter des interactions au-delà de l'entrée en view
- Modifier d'autres sections

## Decisions

**Layout staircase desktop**
→ Chaque step occupe une colonne décalée : step 01 à gauche, step 02 au centre (marginTop 4rem), step 03 à droite (marginTop 8rem). Résultat : une diagonale descendante naturelle qui guide l'œil. Pas de grid uniforme — `flex` avec `justify-between` et `align-items: flex-start`.
Alternative rejetée : timeline verticale centrée — trop verticale, trop longue.

**Connecteur : ligne verticale à gauche de chaque step**
→ Un trait `1px` en `var(--color-accent)` à 20% d'opacité, hauteur `60px`, à gauche du titre de chaque étape (pseudo-élément CSS ou div). Ce connecteur est statique mais s'animerait via `scaleY: 0 → 1` synced avec l'entrée en viewport du step.
Alternative rejetée : SVG pathLength inter-steps — trop complexe, fragile en responsive.

**Grands chiffres fantômes**
→ `position: absolute`, `font-size: clamp(6rem, 12vw, 10rem)`, `opacity: 0.06`, `font-family: var(--font-display)`, `font-weight: 300`, coin supérieur droit de chaque step. `user-select: none`, `pointer-events: none`, `aria-hidden: true`.

**Animation stagger en chaîne**
→ `containerVariants` avec `staggerChildren: 0.25` (au lieu de 0.12 actuel). Chaque step entre en `x: -24 → 0` + `opacity: 0 → 1`, `duration: 0.7`. Le connecteur entre en `scaleY: 0 → 1`, `duration: 0.5`, légèrement en avance sur le texte.

**Mobile : colonne unique avec tirets accentués**
→ Sur mobile, les décalages desktop disparaissent. Les 3 steps s'empilent verticalement. Un tiret horizontal `2px × 24px` en accent-muted précède le numéro de chaque step pour maintenir un fil directeur visuel.

## Risks / Trade-offs

- [Overflow horizontal] Le décalage staircase peut créer un scroll horizontal sur petits écrans → Mitigation : `overflow-x: hidden` sur la section
- [Grands chiffres fantômes] Sur Firefox, certains SVG filters peuvent affecter le text-shadow → Mitigation : pas de filtre sur ces chiffres, opacité CSS suffit
