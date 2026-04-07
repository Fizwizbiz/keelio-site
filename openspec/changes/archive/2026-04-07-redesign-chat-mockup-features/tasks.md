## 1. Fix overflow et wrapper hover

- [x] 1.1 Ajouter `overflow-hidden` sur le conteneur interne du mockup (pas sur le motion.div de hover) pour éviter tout débordement visuel au hover
- [x] 1.2 Vérifier que le `rounded-2xl` est bien appliqué sur le même conteneur pour cliper les coins proprement

## 2. Auto-scroll des messages

- [x] 2.1 Ajouter une `ref` sentinelle (div vide) à la fin de la liste de messages dans ChatMockup
- [x] 2.2 Ajouter un `useEffect` qui appelle `sentinelRef.current?.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth' })` à chaque changement de `visibleCount`

## 3. Redesign du mockup

- [x] 3.1 Mettre à jour les couleurs de fond du mockup : `bg-[var(--color-bg)]` pour le frame principal, `bg-[var(--color-surface)]` pour le header
- [x] 3.2 Changer la bordure extérieure en `border-[rgba(0,212,255,0.20)]` pour la signature cyan subtile
- [x] 3.3 Réduire la hauteur de la zone messages de `h-64` à `h-52` et les paddings internes de `px-4 py-5` à `px-3 py-3`
- [x] 3.4 Ajuster les bulles de messages : fond client en `rgba(0,212,255,0.10)`, fond Keelio en `rgba(17,34,64,0.8)` avec bordures correspondantes

## 4. Validation visuelle

- [x] 4.1 Vérifier le rendu desktop (1440px) : aucune zone blanche au hover, auto-scroll fluide, design cohérent
- [x] 4.2 Vérifier le rendu mobile (375px) : le mockup est masqué (`hidden lg:flex`) — confirmer qu'il n'y a pas de régression
- [x] 4.3 Tester avec `prefers-reduced-motion` : tous les messages s'affichent immédiatement, pas d'animation de scroll
