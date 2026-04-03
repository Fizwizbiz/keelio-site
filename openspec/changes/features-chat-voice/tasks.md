## 1. Fix ChatMockup — stabilité layout + contenu RDV

- [x] 1.1 Ajouter une hauteur fixe sur la zone messages du ChatMockup (`h-64` avec `overflow-y-auto`)
- [x] 1.2 Remplacer la conversation par un scénario de prise de RDV
- [x] 1.3 Vérifier visuellement que la colonne gauche ne bouge plus pendant l'animation

## 2. Composant AudioPlayer

- [x] 2.1 Créer `components/ui/AudioPlayer.tsx` avec élément `<audio>` natif caché + `useRef`
- [x] 2.2 Implémenter le bouton play/pause avec icônes SVG
- [x] 2.3 Implémenter la barre de progression (`input[type=range]` stylisé) + seek
- [x] 2.4 Afficher le temps écoulé et la durée totale (format mm:ss)
- [x] 2.5 Gérer l'état fin de lecture (reset play + progression à zéro)
- [x] 2.6 Gérer le fallback si fichier audio absent (état désactivé + "Enregistrement à venir")

## 3. Intégration dans Features.tsx

- [x] 3.1 Importer et placer `AudioPlayer` dans la section Features, sous le bloc headline+ChatMockup
- [x] 3.2 Ajouter un label contextuel au-dessus du lecteur ("Écoutez une vraie conversation" ou similaire)

## 4. Qualité

- [x] 4.1 Tester visuellement à 375px, 768px et 1440px avec playwright-skill
