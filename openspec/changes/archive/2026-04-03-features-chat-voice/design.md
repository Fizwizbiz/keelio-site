## Context

`Features.tsx` contient le ChatMockup animé. Le problème de layout vient de l'absence de hauteur fixe sur la zone messages. La zone vide sous le mockup sera remplacée par un lecteur audio custom qui lit `public/demo-conversation.mp3`.

## Goals / Non-Goals

**Goals:**
- Hauteur fixe sur le ChatMockup — plus aucun saut de layout
- Scénario de conversation RDV dans le chat
- Lecteur audio custom : play/pause, barre de progression cliquable, affichage durée/temps
- Style cohérent avec le design system (fond surface, bordure accent, typographie DM Sans)

**Non-Goals:**
- Enregistrement en temps réel
- Transcription automatique
- Tout traitement audio côté serveur

## Decisions

### D1 — AudioPlayer basé sur l'API HTML `<audio>` native
**Choix** : Utiliser un élément `<audio>` caché + `useRef` pour contrôler la lecture via JS, avec une UI custom en React.  
**Raison** : Zéro dépendance, fonctionne dans tous les navigateurs modernes, suffisant pour play/pause + barre de progression.

### D2 — Barre de progression interactive
**Choix** : `<input type="range">` stylisé en CSS pour la barre de progression — permet seek natif avec accessibilité clavier.

### D3 — Placeholder si pas de fichier audio
**Choix** : Si `public/demo-conversation.mp3` n'existe pas, afficher le lecteur en état désactivé avec le texte "Enregistrement à venir".  
**Raison** : Ne pas crasher pendant le développement.

## Risks / Trade-offs

- **[Autoplay bloqué]** → Pas d'autoplay, uniquement lecture sur clic utilisateur — conforme aux politiques navigateurs.
- **[Fichier audio manquant]** → Fallback en état désactivé, pas d'erreur visible.
