## 1. Initialisation du projet

- [x] 1.1 Créer le projet Next.js 14 avec `create-next-app` (TypeScript, Tailwind, App Router)
- [x] 1.2 Installer les dépendances : framer-motion, react-hook-form, zod
- [x] 1.3 Configurer `tailwind.config.js` avec les tokens de couleur et de police Keelio
- [x] 1.4 Créer `app/globals.css` avec les variables CSS de design (couleurs, polices, espacements)
- [x] 1.5 Configurer `app/layout.tsx` avec next/font (Cormorant Garamond + DM Sans), métadonnées SEO et fond global

## 2. Composants UI atomiques (design-foundation)

- [x] 2.1 Créer `components/ui/Button.tsx` avec variantes primary/ghost et tailles sm/md/lg + animation hover
- [x] 2.2 Créer `components/ui/Badge.tsx` pour les labels de section (uppercase, caps style)
- [x] 2.3 Créer `components/ui/Card.tsx` avec bordure subtile (border uniquement, pas de shadow)
- [x] 2.4 Vérifier le contraste WCAG AA de toutes les combinaisons texte/fond

## 3. Navigation (landing-hero)

- [x] 3.1 Créer `components/sections/Nav.tsx` avec logo, liens d'ancrage et CTA primaire
- [x] 3.2 Implémenter l'effet sticky avec backdrop-blur au scroll (> 50px)
- [x] 3.3 Ajouter le menu hamburger mobile avec ouverture/fermeture animée

## 4. Section Hero (landing-hero)

- [x] 4.1 Créer `components/sections/Hero.tsx` avec headline H1, sous-titre, double CTA
- [x] 4.2 Implémenter le visuel ambiancé (gradient ou abstraction géométrique côté droit desktop)
- [x] 4.3 Ajouter les animations Framer Motion staggered au chargement (fade-up, delay 0.1s)
- [x] 4.4 Vérifier le layout responsive (desktop 2 colonnes, mobile empilé)

## 5. Sections de valeur (value-sections)

- [x] 5.1 Créer `components/sections/SocialProof.tsx` avec logos grayscale
- [x] 5.2 Créer `components/sections/Problem.tsx` avec headline + 3 pain points visuels
- [x] 5.3 Créer `components/sections/Features.tsx` avec grid asymétrique (3–4 features)
- [x] 5.4 Créer `components/sections/HowItWorks.tsx` avec 3 étapes numérotées + connecteur visuel
- [x] 5.5 Ajouter les animations `whileInView` (once: true) sur chaque section

## 6. Sections de conversion (conversion-sections)

- [x] 6.1 Créer `components/sections/Pricing.tsx` avec 3 plans (card highlight sur plan recommandé)
- [x] 6.2 Créer `components/ui/Accordion.tsx` pour la FAQ (animation Framer Motion, aria-expanded)
- [x] 6.3 Créer `components/sections/FAQ.tsx` avec 5–6 questions/réponses
- [x] 6.4 Créer `components/sections/CTAFinal.tsx` avec headline fort et CTA primaire

## 7. Footer

- [x] 7.1 Créer `components/sections/Footer.tsx` avec logo, liens légaux, email mailto, copyright
- [x] 7.2 Vérifier le layout responsive footer (colonnes desktop → empilé mobile)

## 8. Formulaire de contact et API route (lead-form)

- [x] 8.1 Créer `components/sections/Contact.tsx` avec formulaire React Hook Form + validation Zod
- [x] 8.2 Implémenter les états loading, succès et erreur du formulaire
- [x] 8.3 Créer `app/api/contact/route.ts` (Route Handler) qui relaie vers `N8N_WEBHOOK_URL`
- [x] 8.4 Vérifier que `N8N_WEBHOOK_URL` n'est jamais exposée côté client
- [x] 8.5 Ajouter les attributs d'accessibilité (htmlFor, aria-describedby, role="alert")

## 9. Assemblage de la landing page

- [x] 9.1 Assembler toutes les sections dans `app/page.tsx` dans l'ordre défini
- [x] 9.2 Ajouter les séparateurs visuels (lignes 1px border) entre sections
- [x] 9.3 Vérifier l'espacement entre sections (padding 8rem)

## 10. Tests et qualité

- [x] 10.1 Tester avec playwright-skill : mobile 375px, tablette 768px, desktop 1440px
- [x] 10.2 Vérifier LCP < 2.5s et toutes les images via `next/image`
- [x] 10.3 Tester la navigation au clavier (focus visible partout)
- [x] 10.4 Tester la soumission du formulaire (succès + erreur)
- [x] 10.5 Configurer `.env.local.example` avec `N8N_WEBHOOK_URL=`
