## Why

Malgré l'ajustement précédent (`#141414`), le site reste perçu comme trop sombre. La direction est maintenant inverse : passer à un fond crème/beige chaud qui donne immédiatement une sensation d'élégance éditoriale premium — texte sombre sur fond clair, dans la tradition des agences de conseil et des marques de luxe.

## What Changes

- **BREAKING — Inversion de la palette** : passage d'un dark mode à un light mode crème. Le fond principal devient `#F5F0E6` (crème chaud), le texte principal `#1C1917` (brun quasi-noir). Rupture totale avec l'esthétique dark précédente.
- **Nouvelle palette de 7 tokens CSS** : remplacement complet des variables dans `globals.css`
- **Adaptation des composants** : vérifier que les composants hardcodés pour un fond sombre (texte blanc forcé, backgrounds sombres inline) s'adaptent à la nouvelle palette
- **Boutons et accents** : l'accent ne peut plus être crème sur fond crème — remplacer par un brun chaud (`#8B6F47`) ou un or profond (`#A0845C`)
- **Mise à jour de `CLAUDE.md`** : documentation palette mise à jour

## Capabilities

### New Capabilities
- `palette-light` : Fondation visuelle light mode — fond beige crème chaud, texte sombre, accents brun doré

### Modified Capabilities
- `design-foundation` : Les tokens couleurs changent entièrement, y compris la sémantique (light vs dark)
- `design-foundation-v2` : Le requirement "palette non-noire" est désormais dépassé — la palette est beige clair

## Impact

- `app/globals.css` — 7 variables CSS root (bg, surface, border, accent, accent-muted, text, text-muted)
- `CLAUDE.md` — section palette
- Potentiellement : composants avec `text-white`, `bg-black`, ou couleurs hardcodées incompatibles avec le fond clair — à vérifier via grep
- `tailwind.config.ts` — si des couleurs y sont hardcodées
