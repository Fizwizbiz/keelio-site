## Context

Le composant `ChatMockup` dans `components/sections/Features.tsx` est un mockup de conversation animé (messages qui apparaissent progressivement). Il est rendu dans un grid `lg:grid-cols-2` à droite du texte marketing. Deux problèmes :

1. **Débordement** : le conteneur parent n'a pas `overflow-hidden`, si bien qu'au hover (translateY + boxShadow), un artefact blanc devient visible à droite sur les écrans clairs ou au niveau du clip du parent.
2. **Scroll statique** : la zone de messages a une hauteur fixe (`h-64`) avec `overflow-y-auto`. Une fois les messages apparus, ils restent en bas mais rien ne guide l'œil — l'utilisateur doit scroller manuellement ou ne voit pas les derniers messages.
3. **Design** : le fond du mockup utilise `--color-surface` (bleu marine), mais le layout parent `section-light` est blanc, créant une friction visuelle. Le cadre mériterait plus de profondeur et une meilleure intégration.

## Goals / Non-Goals

**Goals:**
- Corriger l'overflow visible au hover (aucun débordement hors du conteneur)
- Implémenter un auto-scroll fluide : quand un nouveau message apparaît, la zone scroll automatiquement vers le bas
- Revoir le design du mockup : plus compact, palette sombre cohérente (dark card sur fond blanc = contraste fort et premium), bordure cyan subtile
- Maintenir l'animation de cycling (messages → reset → messages)

**Non-Goals:**
- Refonte de la section complète Features
- Ajout de nouvelles données ou de vrais messages
- Intégration de l'AudioPlayer dans le mockup lui-même (il reste en dessous)

## Decisions

### Auto-scroll via `useEffect` + `scrollIntoView`

Plutôt qu'un `scrollTop` manuel, on attache une `ref` sur un élément sentinelle en bas de la liste et on appelle `.scrollIntoView({ behavior: 'smooth' })` à chaque fois que `visibleCount` augmente. C'est plus simple qu'animer le scroll avec Framer Motion et reste compatible avec `prefers-reduced-motion`.

**Alternative écartée** : fade-out des anciens messages. Cela implique de gérer un état "sliding window" plus complexe et perd le contexte de la conversation — l'auto-scroll est plus naturel pour un chat.

### Fix overflow : `overflow-hidden` sur le wrapper motion

Le `motion.div` de hover wrapper dans Features n'a pas `overflow-hidden`. Ajouter `overflow-hidden rounded-2xl` sur ce wrapper garantit que le `boxShadow` ne déborde pas et qu'aucun contenu enfant ne sort du clip.

### Design : dark card on light background

Sur fond blanc (`section-light`), un mockup sombre (`#0B1629` / `#112240`) avec bordure cyan subtile crée un contraste fort — effet "device screen" premium. On réduit la hauteur de la zone messages (`h-52` au lieu de `h-64`) pour être plus compact, et on resserre les paddings internes.

## Risks / Trade-offs

- [Scroll automatique désagréable si trop rapide] → Le timing entre messages (1200ms) laisse le temps à l'animation scroll d'être perçue comme naturelle
- [overflow-hidden peut clipper le boxShadow du hover] → Mettre `overflow-hidden` sur un wrapper interne (pas le motion.div de hover lui-même), ou utiliser `outline` au lieu de `box-shadow` pour le glow — à ajuster selon rendu
