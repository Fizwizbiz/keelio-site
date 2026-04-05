## 1. Infrastructure CSS globale

- [x] 1.1 Dans `app/globals.css`, ajouter le SVG inline `<filter id="grain">` (feTurbulence + feColorMatrix) et la classe utilitaire `.section-aura` avec son pseudo-élément `::before` (radial-gradient accent + filter grain)
- [x] 1.2 Dans `app/globals.css`, ajouter la classe utilitaire `.section-divider` : `div` de 1px, `background: linear-gradient(to right, transparent, var(--color-border), transparent)`

## 2. Sections clés — aura gradient (Hero, QuoteCTA, CTAFinal)

- [x] 2.1 `Hero.tsx` : ajouter `position: relative` sur la `<section>`, appliquer la classe `.section-aura`
- [x] 2.2 `QuoteCTA.tsx` : ajouter `position: relative` sur la `<section>`, appliquer la classe `.section-aura`
- [x] 2.3 `CTAFinal.tsx` : ajouter `position: relative` sur la `<section>`, appliquer la classe `.section-aura`

## 3. Sections contenu — fond surface

- [x] 3.1 `Problem.tsx` : changer le fond de la `<section>` en `background-color: var(--color-surface)`
- [x] 3.2 `HowItWorks.tsx` : changer le fond de la `<section>` en `background-color: var(--color-surface)`
- [x] 3.3 `FAQ.tsx` : changer le fond de la `<section>` en `background-color: var(--color-surface)`

## 4. Séparateurs dégradés

- [x] 4.1 Remplacer les `border-t border-[var(--color-border)]` hardcodés dans les composants par le retrait de la bordure + insertion du composant `<SectionDivider />` (ou div avec classe `.section-divider`) dans `app/page.tsx` entre chaque section
- [x] 4.2 Créer le petit composant `components/ui/SectionDivider.tsx` (div 1px avec le gradient) pour réutilisation propre

## 5. Tests Playwright

- [x] 5.1 Screenshot desktop 1440px pleine page — vérifier la lisibilité des séparations entre sections
- [x] 5.2 Screenshot mobile 375px — vérifier que l'aura Hero est visible et non écrasée
- [x] 5.3 Vérifier visuellement que les 3 sections "aura" (Hero, QuoteCTA, CTAFinal) se distinguent des sections "surface"
