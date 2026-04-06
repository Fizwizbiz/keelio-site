## 1. Fondation visuelle

- [x] 1.1 Mettre à jour `CLAUDE.md` avec la nouvelle palette dark midnight/cyan et la nouvelle direction artistique (typographie Poppins + Inter)
- [x] 1.2 Mettre à jour `app/globals.css` : remplacer toutes les variables CSS par la palette dark (`--color-bg: #0A0E1A`, `--color-accent: #00D4FF`, etc.)
- [x] 1.3 Mettre à jour `app/layout.tsx` : remplacer les imports Google Fonts (Cormorant Garamond / DM Sans → Poppins + Inter)

## 2. Composants UI atomiques

- [x] 2.1 Refondre `components/ui/Button.tsx` : style dark avec variante cyan glow pour le CTA primaire, variante outline dark pour le secondaire
- [x] 2.2 Refondre `components/ui/Badge.tsx` : fond dark semi-transparent, texte cyan, bordure accent subtile
- [x] 2.3 Adapter `components/ui/AudioPlayer.tsx` si nécessaire pour le nouveau style dark

## 3. Navigation

- [x] 3.1 Refondre `components/sections/Nav.tsx` : fond dark avec blur backdrop, liens hover cyan, CTA bouton accent

## 4. Hero

- [x] 4.1 Refondre `components/sections/Hero.tsx` : fond gradient midnight, headline Poppins weight 700, sous-titre Inter muted, CTA primaire cyan avec glow, animation stagger fade-up

## 5. Sections valeur

- [x] 5.1 Refondre `components/sections/Features.tsx` : cards dark (`--color-surface`), bordure subtile, hover bordure-top cyan, icônes cyan, animation whileInView stagger
- [x] 5.2 Refondre `components/sections/HowItWorks.tsx` : numéros 01/02/03 en grand cyan Poppins, fond dark, connecteur visuel entre étapes

## 6. Sections de conversion et footer

- [x] 6.1 Adapter les sections de conversion (CTA final) dans `app/page.tsx` ou composants associés : fond surface élevé, CTA cyan glow
- [x] 6.2 Refondre le footer : fond dark, texte muted bleuté, liens hover cyan, logo lisible

## 7. Validation

- [x] 7.1 Vérifier le contraste WCAG AA sur les combinaisons texte/fond principales
- [x] 7.2 Tester avec Playwright : mobile 375px, tablette 768px, desktop 1440px
- [x] 7.3 Vérifier les interactions clés : hover CTA, hover cards, navigation, animations scroll
