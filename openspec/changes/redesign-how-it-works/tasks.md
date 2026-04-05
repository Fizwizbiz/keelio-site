## 1. Refonte du composant HowItWorks

- [x] 1.1 Changer le fond de la `<section>` de `bg-[var(--color-surface)]` à `bg-[var(--color-bg)]`
- [x] 1.2 Supprimer le grid 3 colonnes et les cards à bordures — remplacer par un layout `flex` avec décalages verticaux staircase sur desktop
- [x] 1.3 Ajouter les grands chiffres fantômes (Cormorant, clamp 6rem→10rem, opacité 0.07, `position: absolute`, `aria-hidden`) en arrière-plan de chaque step
- [x] 1.4 Ajouter le connecteur décoratif : tiret vertical `1px × 48px` en `var(--color-accent)` à 20% d'opacité avant le titre de chaque step, avec animation `scaleY: 0 → 1`
- [x] 1.5 Mettre à jour les variants Framer Motion : `staggerChildren: 0.25`, entrée en `x: -24 → 0` + `opacity: 0 → 1`, `duration: 0.7`
- [x] 1.6 Ajouter `overflow-x: hidden` sur la section pour éviter le scroll horizontal mobile dû aux décalages

## 2. Responsive mobile

- [x] 2.1 Vérifier que les décalages `mt-` desktop sont conditionnés avec `lg:` et n'affectent pas mobile
- [x] 2.2 Sur mobile, ajouter un tiret horizontal `2px × 20px` en `--color-accent-muted` devant chaque numéro d'étape (substitut visuel du staircase)

## 3. Tests Playwright

- [x] 3.1 Screenshot desktop 1440px — vérifier le layout staircase, les chiffres fantômes, le fond sombre
- [x] 3.2 Screenshot mobile 375px — vérifier l'empilement vertical, pas de scroll horizontal
