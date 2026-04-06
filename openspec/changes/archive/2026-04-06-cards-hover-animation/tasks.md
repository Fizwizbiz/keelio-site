## 1. Section Features — Stat cards et chat mockup

- [x] 1.1 Convertir les stat cards dans `Features.tsx` en `motion.div` avec `whileHover={{ y: -5, boxShadow: '0 0 0 1px rgba(0,212,255,0.4), 0 0 20px rgba(0,212,255,0.12), 0 8px 32px rgba(0,0,0,0.4)' }}` et `transition={{ duration: 0.35 }}`
- [x] 1.2 Ajouter `style={{ position: 'relative', zIndex }}` au hover sur les stat cards pour éviter le chevauchement en grid
- [x] 1.3 Envelopper le chat mockup (`ChatMockup`) dans un `motion.div` avec `whileHover={{ y: -4, boxShadow: '0 0 32px rgba(0,212,255,0.10), 0 8px 24px rgba(0,0,0,0.5)' }}`

## 2. Section Problem — Pain point cards

- [x] 2.1 Convertir les pain point cards dans `Problem.tsx` en `motion.div` avec `whileHover={{ y: -5, boxShadow: '0 0 0 1px rgba(0,212,255,0.35), 0 0 18px rgba(0,212,255,0.10)' }}`
- [x] 2.2 Animer l'icône de la card au hover — légère intensification de l'accent (`whileHover` sur la div icône : scale 1.08)

## 3. Section HowItWorks — Step cards

- [x] 3.1 Convertir les step cards dans `HowItWorks.tsx` en `motion.div` avec `whileHover={{ x: -3 }}` sur le contenu principal
- [x] 3.2 Augmenter l'opacité de la ligne verticale cyan au hover (0.22 → 0.55) en passant la valeur via un état hover local ou `whileHover` sur la `motion.div` de la ligne

## 4. Accessibilité

- [x] 4.1 Vérifier que `useReducedMotion()` de Framer Motion est respecté — si `true`, ne pas appliquer `whileHover` (passer `undefined` ou wrapper conditionnel)
- [x] 4.2 Tester avec Playwright les 3 sections aux breakpoints desktop 1440px, tablette 768px et vérifier qu'aucun chevauchement visuel n'apparaît
