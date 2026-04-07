## Context

Le site Keelio passe d'un dark mode anthracite (`#141414`) à un light mode crème chaud. Ce n'est pas un simple swap de variables — de nombreux composants contiennent des couleurs hardcodées `rgba(232,224,208,...)` (ancienne teinte accent) et `rgba(17,17,17,...)` (ancien fond sombre) qui cassent sur fond clair. Le grain texture et les effets d'aura sont également calibrés pour un fond sombre.

## Goals / Non-Goals

**Goals:**
- Fond `#F5F0E6` (crème chaud) — élégant, éditorial, premium sur fond clair
- Texte `#1C1917` (brun quasi-noir) — lisible, chaud, pas froid
- Accent `#6B4F2E` (brun cuir profond) — visible sur fond clair, signature Keelio
- Corriger tous les rgba hardcodés dans les composants
- Adapter Nav, Hero, Features, Badge, Button, AudioPlayer, globals.css
- Conserver les animations Framer Motion et la structure des sections

**Non-Goals:**
- Changer la typographie ou le layout
- Ajouter un toggle dark/light — le site est clair par conception
- Modifier les animations ou transitions

## Decisions

### Décision 1 — Palette finale

```css
--color-bg:          #F5F0E6;   /* Crème chaud — fond principal */
--color-surface:     #EDE7D9;   /* Crème légèrement plus sombre pour les surfaces */
--color-border:      #D4C9B0;   /* Beige moyen — bordures subtiles */
--color-accent:      #6B4F2E;   /* Brun cuir profond — accent principal */
--color-accent-muted:#9B7B52;   /* Brun doré atténué */
--color-text:        #1C1917;   /* Brun quasi-noir chaud */
--color-text-muted:  #6B6050;   /* Brun gris — textes secondaires */
```

**Rationale** : Le brun cuir `#6B4F2E` sur fond crème donne le ratio de contraste WCAG AA (~6:1). Pas de bleu, pas de gris froid — tout reste dans les tons chauds.

### Décision 2 — Composants avec rgba hardcodés

Les occurrences `rgba(232,224,208,X)` dans les composants référencent l'ancienne teinte accent. Elles doivent être remplacées par `rgba(107,79,46,X)` (nouvelle teinte accent `#6B4F2E`). Les opacités restent identiques.

Les `rgba(17,17,17,X)` dans Nav.tsx (backdrop du header) deviennent `rgba(245,240,230,X)`.

### Décision 3 — Effets à adapter dans globals.css

- **Grain texture** : conserver (subtil, invisible sur fond clair)
- **`section-aura`** : radial-gradient avec rgba accent → adapter à `rgba(107,79,46,X)` avec opacités réduites (la teinte est plus foncée donc moins besoin d'opacité élevée)
- **`SectionDivider`** : `rgba(232,224,208,0.22)` → `rgba(107,79,46,0.18)`
- **`h1,h2 text-shadow`** : supprimer ou adapter (glow ne fonctionne pas sur fond clair)

### Décision 4 — Bouton primary

Sur fond clair, `bg-[var(--color-accent)]` donne un bouton brun avec texte crème — rendu premium et lisible. Le hover-shadow adapté : `rgba(107,79,46,0.25)`.

## Risks / Trade-offs

- [Hero SVG décoratif] → Les strokes `rgba(232,224,208,...)` très transparents sur fond sombre deviennent invisibles sur fond clair. Remplacer par `rgba(107,79,46,X)` — les strokes resteront subtils mais perceptibles.
- [Contact.tsx erreurs rouge] → `rgba(220,100,100,...)` restent valides (couleur sémantique erreur, pas liée à la palette)
- [Features.tsx `rgba(255,255,255,0.04)`] → Devient transparent sur fond clair, remplacer par `rgba(107,79,46,0.06)`

## Migration Plan

1. `globals.css` — 7 variables + section-aura + SectionDivider + heading glow
2. `Nav.tsx` — rgba fond header
3. `Hero.tsx` — tous les rgba SVG + gradient overlay
4. `Features.tsx` — rgba backgrounds et borders
5. `Button.tsx` — hover shadow
6. `Badge.tsx` — bg et border rgba
7. `AudioPlayer.tsx` — hover rgba
8. `CLAUDE.md` — palette mise à jour
9. Tests Playwright 3 breakpoints
