## Context

La landing Keelio utilise une palette entièrement sombre (`#0A0A0A` / `#111111`) avec des bordures très subtiles (`#1F1F1F`). En pratique, la différence de luminosité entre `--color-bg` et `--color-surface` est quasi imperceptible à l'écran, et les `border-t` horizontales se confondent avec le fond. Le visiteur lit la page comme un bloc homogène, sans rythme ni hiérarchie visuelle entre les sections.

L'enjeu est de créer de la séparation sans trahir la direction artistique premium (pas de cartes avec ombres, pas de couleurs vives, pas d'animations agressives).

## Goals / Non-Goals

**Goals:**
- Rendre les ruptures entre sections perceptibles à l'œil
- Distinguer visuellement les sections "clés" (Hero, QuoteCTA, CTAFinal) des sections "contenu" (Features, Problem, FAQ…)
- Rester dans la palette existante — aucune nouvelle couleur n'est introduite
- Impact performance minimal — pas d'images bitmap, tout en CSS

**Non-Goals:**
- Refonte de la palette de couleurs
- Ajout d'illustrations ou d'images d'ambiance
- Animations lourdes sur les fonds
- Compatibilité IE / navigateurs anciens (SVG filter grain non critique)

## Decisions

**Alternance de fonds `bg` / `surface`**
→ Sections sur `--color-surface` (#111111) : Problem, HowItWorks, FAQ. Sections sur `--color-bg` (#0A0A0A) : SocialProof, Features, Footer. L'alternance crée un rythme subtil sans rupture agressive. La différence de luminosité est petite (~7% en lightness HSL) mais suffisante pour que l'œil perçoive le changement.
Alternatif rejeté : des fonds distincts par couleur — briserait la cohérence monochrome.

**Gradient aura sur sections clés**
→ Un `radial-gradient` centré en haut, utilisant `var(--color-accent)` à 4% d'opacité max sur 60–70% de la largeur, crée un halo chaud imperceptible isolément mais qui distingue clairement ces sections dans le flux de la page. Technique utilisée par Vercel, Linear, Resend.
Implémentation : pseudo-élément `::before` en `position: absolute, inset: 0, pointer-events: none` pour ne pas perturber le layout.
Alternatif rejeté : `box-shadow` inset — non supporté sur sections full-width avec overflow caché.

**Grain CSS sur les sections aura**
→ Un `<svg>` de filtre feTurbulence inline dans globals.css, référencé via `filter: url(#grain)` sur le pseudo-élément aura, donne de la texture et évite l'aspect "flat gradient". L'opacité du grain est très basse (5–8%) pour rester subtil.
Alternatif rejeté : image PNG de bruit — overhead réseau inutile, moins flexible.

**Séparateurs dégradés**
→ Les bordures horizontales passent de `border-top: 1px solid var(--color-border)` à un `background: linear-gradient(to right, transparent, var(--color-border), transparent)` sur un div de 1px de hauteur. Effet : la ligne "apparaît" au centre et s'efface sur les bords — plus élégant, moins mécanique.
Alternatif rejeté : conserver les border-t existants — ils disparaissent sur fond très sombre.

## Risks / Trade-offs

- [Grain SVG filter] Peut ne pas s'afficher dans certains navigateurs anciens → Mitigation : dégradation gracieuse, le gradient seul reste lisible
- [Alternance bg/surface] Sur des écrans mal calibrés, la différence peut être imperceptible → Mitigation : la combinaison avec les séparateurs dégradés assure toujours une rupture visible
- [Pseudo-éléments absolute] Peut entrer en conflit avec des sections ayant `overflow: hidden` → Mitigation : vérifier et ajouter `position: relative` sur chaque section concernée
