## Why

Le mockup de conversation dans la section Features souffre de deux défauts visuels et UX : un débordement blanc visible au survol (overflow non contenu dans le parent) et une conversation statique qui nécessite un scroll manuel, brisant l'effet de démonstration vivante. Le design général du bloc droit mérite aussi d'être repensé pour être plus compact et percutant.

## What Changes

- Corriger le débordement horizontal du mockup chat (blanc visible à droite au hover)
- Remplacer le scroll manuel par un défilement automatique des messages (auto-scroll) ou un affichage en fondu enchaîné avec disparition des anciens messages
- Revoir le design global du cadre chat : plus condensé, plus élégant, mieux intégré à la palette dark du site
- Supprimer ou intégrer l'AudioPlayer dans le nouveau layout de façon plus naturelle

## Capabilities

### New Capabilities

- `chat-mockup-animated`: Mockup de conversation animé avec auto-scroll fluide, overflow corrigé et design revu (fond sombre, bulles compactes, intégration palette cyan/dark)

### Modified Capabilities

- Aucune modification de spec existante

## Impact

- `components/sections/Features.tsx` : refonte du composant `ChatMockup` et de son layout
- `components/ui/AudioPlayer.tsx` : repositionnement ou intégration dans le nouveau design
- Aucune dépendance externe ajoutée
