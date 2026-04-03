## Context

La section Features actuelle (`components/sections/Features.tsx`) affiche 4 features sous forme de cards numérotées dans un grid asymétrique. Le problème : aucun élément visuel ne montre ce que Keelio fait concrètement. L'utilisateur lit des descriptions, mais ne "voit" pas le produit. Le design system (couleurs, polices, Framer Motion) est en place.

## Goals / Non-Goals

**Goals:**
- Ajouter un mockup conversationnel animé qui illustre une interaction Keelio réelle
- Headline plus court et plus percutant
- Layout 2 colonnes desktop : texte + visuel demo en haut, stats features en bas
- Garder la cohérence avec le design system existant (palette crème/noir, Cormorant Garamond, Framer Motion)

**Non-Goals:**
- Modifier les autres sections
- Ajouter une vraie API ou intégration — le mockup est entièrement statique/animé
- Changer la navigation ou le routage

## Decisions

### D1 — ChatMockup : composant inline animé avec Framer Motion
**Choix** : Créer un composant `ChatMockup` dans le même fichier `Features.tsx`, qui affiche une conversation simulée avec `useEffect` et `useState` pour révéler les messages séquentiellement.  
**Raison** : Montre le produit en action sans complexité supplémentaire. L'animation séquentielle (un message toutes les 1.2s) rend la démo vivante et engageante.  
**Alternative écartée** : GIF ou vidéo — trop lourd, pas cohérent avec le style premium du site.

### D2 — Layout : 2 colonnes en haut, row de stats en bas
**Choix** : Sur desktop, headline + sous-titre à gauche, ChatMockup à droite. En dessous, les 4 features deviennent des blocs stat compacts (icône + chiffre clé + label) sur une ligne.  
**Raison** : Crée une hiérarchie visuelle claire — on comprend le produit (visuel) puis on scanne les détails (stats). Plus dramatique qu'une grille de cards équivalentes.  
**Alternative écartée** : Garder les cards complètes en dessous — trop dense, double la longueur sans apporter de valeur.

### D3 — Headline : "L'IA qui ne dort jamais."
**Choix** : Remplacer "L'IA qui travaille quand vous ne le faites pas" par "L'IA qui ne dort jamais."  
**Raison** : Plus court, plus mémorable, image concrète. 5 mots vs 10.

## Risks / Trade-offs

- **[Animation loop infinie]** → Le ChatMockup relance l'animation toutes les ~8s pour rester vivant sur la page. Utiliser `useRef` pour tracker l'état et éviter les memory leaks au unmount.
- **[Accessibilité animation]** → Respecter `prefers-reduced-motion` : si activé, afficher tous les messages statiquement sans délai.
- **[Mobile ChatMockup]** → Le mockup est masqué sur mobile pour éviter l'encombrement. Les stats features restent visibles en colonne.
