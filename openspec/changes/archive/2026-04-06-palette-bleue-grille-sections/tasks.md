## 1. Palette et fond global

- [x] 1.1 Mettre à jour `app/globals.css` : nouvelles valeurs `--color-bg: #0B1629`, `--color-surface: #112240`, `--color-border: #1A3050`, `--color-text-muted: #7A9BB5`, `--color-text: #E8F4F8`
- [x] 1.2 Ajouter le quadrillage CSS sur `body` dans `globals.css` : `background-image: linear-gradient(rgba(0,212,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.04) 1px, transparent 1px); background-size: 40px 40px;`
- [x] 1.3 Mettre à jour `CLAUDE.md` avec la nouvelle palette et la documentation du quadrillage
- [x] 1.4 Corriger le `section-aura::before` dans `globals.css` pour que l'aura reste cohérente avec le nouveau fond bleu

## 2. Alternance des sections

- [x] 2.1 `components/sections/Features.tsx` : ajouter `bg-[var(--color-surface)]` sur la balise `<section>`
- [x] 2.2 `components/sections/SocialProof.tsx` : vérifier et laisser sur `bg` (fond par défaut)
- [x] 2.3 `components/sections/QuoteCTA.tsx` : ajouter `bg-[var(--color-surface)]` sur la balise `<section>`
- [x] 2.4 `components/sections/FAQ.tsx` : passer de `bg-[var(--color-surface)]` à `bg-[var(--color-bg)]` pour respecter l'alternance
- [x] 2.5 `components/sections/Problem.tsx` : vérifier que les pain point cards internes (`bg-[var(--color-bg)]`) restent visibles sur fond `surface` — ajuster si nécessaire

## 3. Validation

- [x] 3.1 Vérifier visuellement l'alternance des sections (aucune section identique adjacente)
- [x] 3.2 Tester avec Playwright desktop 1440px + mobile 375px, vérifier fond bleu et quadrillage visible
