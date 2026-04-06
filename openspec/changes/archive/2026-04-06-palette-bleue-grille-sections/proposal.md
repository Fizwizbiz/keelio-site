## Why

Deux problèmes visuels constatés après la refonte dark : (1) les sections Hero, Features et SocialProof s'enchaînent sur le même fond — aucun contraste visuel entre elles — et HowItWorks + QuoteCTA aussi. (2) La palette actuelle (`#0A0E1A`) est trop proche du noir pur et ne reflète pas le bleu profond du site de référence. Un quadrillage subtil en fond manque pour renforcer l'esthétique tech.

## What Changes

- **BREAKING** Ajustement de la palette : fond principal plus bleu (`#0B1629`) et surface clairement distincte (`#112240`) — plus de bleu, moins de noir
- Ajout d'un quadrillage CSS subtil en fond (lignes cyan très transparentes, 40px × 40px)
- Correction de l'alternance des sections : Features passe en `--color-surface`, QuoteCTA passe en `--color-surface` pour briser la monotonie
- Mise à jour de `globals.css` et `CLAUDE.md`

## Capabilities

### New Capabilities

- `background-grid`: Quadrillage CSS subtil appliqué au fond de page pour renforcer l'esthétique tech

### Modified Capabilities

- `design-foundation-v3`: Palette réajustée (bleu plus présent, surface plus contrastée) + documentation CLAUDE.md mise à jour

## Impact

- `app/globals.css` : nouvelles variables `--color-bg` et `--color-surface`, ajout du pattern quadrillage
- `CLAUDE.md` : palette mise à jour
- `components/sections/Features.tsx` : `bg-[var(--color-surface)]` sur la section
- `components/sections/QuoteCTA.tsx` : `bg-[var(--color-surface)]` sur la section
