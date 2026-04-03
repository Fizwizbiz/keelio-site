## Why

Le ChatMockup actuel déstabilise le layout (la colonne gauche descend quand les messages apparaissent) et la conversation parle d'un devis générique. De plus, la zone sous le mockup est vide — l'opportunité d'y placer un vrai enregistrement audio du fondateur en conversation avec Keelio renforce immédiatement la crédibilité du produit.

## What Changes

- **Fix layout stabilité** : hauteur fixe sur le ChatMockup — les messages défilent à l'intérieur, la colonne gauche ne bouge plus jamais
- **Nouveau contenu conversation** : scénario de prise de rendez-vous
- **Lecteur audio** : dans la zone sous le mockup, un lecteur audio custom (play/pause, barre de progression, durée) qui lit un fichier MP3 fourni par le client — sa vraie conversation avec Keelio

## Capabilities

### New Capabilities

- `audio-player`: Lecteur audio custom minimaliste — play/pause, barre de progression, durée, style cohérent avec le design system

### Modified Capabilities

- `features-section-v2`: Stabilité layout ChatMockup (hauteur fixe) + nouveau scénario prise de RDV

## Impact

- Modification de `components/sections/Features.tsx`
- Ajout de `components/ui/AudioPlayer.tsx`
- Fichier audio à placer dans `public/demo-conversation.mp3` (fourni par le client)
- Aucune dépendance externe
