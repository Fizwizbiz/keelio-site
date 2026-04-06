## Why

La palette actuelle est trop sombre : fond `#0A0A0A` avec des surfaces `#1E1B17` crée une expérience oppressante qui nuit à la lisibilité et à la perception premium recherchée. L'objectif est de conserver l'élégance et la classe du design actuel tout en relevant significativement la luminosité pour rendre le site plus accessible, plus aéré, et plus agréable à parcourir. Par ailleurs, la section `CTAFinal` ("Prêt à ne plus jamais rater une opportunité ?") est redondante avec `QuoteCTA` et alourdit la page.

## What Changes

- **Nouvelle palette de couleurs** : remplacement complet des variables CSS `--color-bg`, `--color-surface`, `--color-border`, `--color-accent`, `--color-accent-muted`, `--color-text`, `--color-text-muted` par une palette plus lumineuse mais toujours élégante (inspiration : ton chaud, légèrement crémeux — ni blanc pur ni noir profond)
- **Mise à jour de `globals.css`** : nouvelles valeurs des variables CSS root
- **Mise à jour de `CLAUDE.md`** : palette documentée mise à jour
- **Suppression de la section `CTAFinal`** : retrait du composant `CTAFinal.tsx` et de son usage dans `app/page.tsx`
- **Vérification de cohérence** : s'assurer qu'aucun composant n'utilise des couleurs hardcodées incompatibles avec la nouvelle palette

## Capabilities

### New Capabilities
- `design-foundation-v2` : Nouvelle fondation visuelle couleur du site — palette relevée, plus lumineuse, toujours premium et élégante

### Modified Capabilities
- `design-foundation` : Les variables CSS de couleur changent entièrement — impact sur tous les composants qui utilisent les custom properties

## Impact

- `app/globals.css` — variables CSS root
- `CLAUDE.md` — documentation palette
- `components/sections/CTAFinal.tsx` — suppression
- `app/page.tsx` — retrait de l'import et usage de `CTAFinal`
- Tous les composants utilisant `--color-bg`, `--color-surface`, `--color-border`, `--color-accent`, `--color-text` (impact indirect via CSS variables — pas de modification fichier par fichier nécessaire si les variables sont bien utilisées)
