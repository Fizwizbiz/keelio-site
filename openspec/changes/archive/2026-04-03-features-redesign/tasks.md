## 1. Restructuration du layout Features

- [x] 1.1 Remplacer le headline par "L'IA qui ne dort jamais." avec le nouveau sous-titre
- [x] 1.2 Créer la zone 2 colonnes desktop (texte gauche / ChatMockup droite)
- [x] 1.3 Vérifier le layout mobile : headline pleine largeur, ChatMockup masqué

## 2. Composant ChatMockup

- [x] 2.1 Créer le composant `ChatMockup` avec les messages de la conversation simulée
- [x] 2.2 Implémenter l'animation séquentielle (useState + useEffect, délai 1.2s par message)
- [x] 2.3 Implémenter la boucle (reset après 3s quand tous les messages sont affichés)
- [x] 2.4 Ajouter le support `prefers-reduced-motion` (tous les messages affichés statiquement)
- [x] 2.5 Styler le mockup : bulles client (droite, crème) / Keelio (gauche, surface), timestamps

## 3. Stats features compactes

- [x] 3.1 Remplacer les cards numérotées par 4 blocs stat horizontaux (chiffre clé + label + description)
- [x] 3.2 Ajouter les séparateurs verticaux `1px solid var(--color-border)` entre les stats desktop
- [x] 3.3 Passer en grille 2×2 sur mobile

## 4. Qualité

- [x] 4.1 Vérifier les animations whileInView sur l'ensemble de la section
- [x] 4.2 Tester visuellement à 375px, 768px et 1440px avec playwright-skill
