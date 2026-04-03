## Why

La section Features actuelle est trop neutre visuellement : 4 cards numérotées sur fond sombre sans aucun élément concret pour montrer Keelio en action. Elle n'inspire pas confiance car elle ne montre rien — elle décrit. L'ajout d'un visuel de démonstration (mockup de conversation IA) et d'un layout plus dramatique permettra de convertir davantage en rendant le produit tangible.

## What Changes

- Remplacement complet de `components/sections/Features.tsx`
- Nouveau layout : headline grande taille à gauche + mockup conversationnel à droite (desktop), puis cards features en dessous
- Ajout d'un composant `ChatMockup` : une fausse conversation client/Keelio animée, avec timestamps, qui illustre concrètement la réponse automatique 24/7
- Headline reformulé : plus court, plus fort ("L'IA qui ne dort jamais.")
- Les 4 features deviennent des stats+labels compacts sous le visuel principal

## Capabilities

### New Capabilities

- `features-section-v2` : Section Features redessinée avec visuel de démo conversationnel intégré, headline dramatique et layout 2 colonnes desktop

### Modified Capabilities

## Impact

- Modification de `components/sections/Features.tsx` uniquement
- Aucune dépendance externe — le composant `ChatMockup` est créé inline dans le fichier
- Aucun breaking change sur les autres sections
