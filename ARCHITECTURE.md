# ARCHITECTURE.md — Keelio Site Vitrine

## Vue d'ensemble

Site vitrine marketing statique pour Keelio, déployé sur Vercel. Pas de backend pour le MVP — les leads transitent via webhook n8n. Architecture orientée performance et maintenabilité.

---

## Stack technique

| Couche | Choix | Version | Justification |
|---|---|---|---|
| Framework | Next.js App Router | 14.x | SSG natif, optimisation images, routing |
| Langage | TypeScript | 5.x | Typage strict, DX améliorée |
| Styles | Tailwind CSS | 3.x | Utilitaires rapides, purge CSS automatique |
| Animations | Framer Motion | 11.x | `whileInView`, variants, transitions fluides |
| Formulaires | React Hook Form + Zod | 7.x + 3.x | Validation performante, sans re-renders inutiles |
| Déploiement | Vercel | — | CI/CD automatique sur push `main` |

---

## Structure des dossiers

```
/
├── app/
│   ├── layout.tsx          # Layout global — fonts, meta, body background
│   ├── page.tsx            # Landing page — assemblage des sections
│   └── api/
│       └── contact/
│           └── route.ts    # API Route Next.js → proxy vers webhook n8n
│
├── components/
│   ├── ui/                 # Composants atomiques réutilisables
│   │   ├── Button.tsx
│   │   ├── Badge.tsx
│   │   └── Accordion.tsx
│   └── sections/           # Sections de la landing, une par fichier
│       ├── Nav.tsx
│       ├── Hero.tsx
│       ├── SocialProof.tsx
│       ├── Problem.tsx
│       ├── Features.tsx
│       ├── HowItWorks.tsx
│       ├── Pricing.tsx
│       ├── FAQ.tsx
│       ├── CTAFinal.tsx
│       └── Footer.tsx
│
├── lib/
│   ├── hooks/              # Hooks custom (ex: useScrollProgress)
│   └── utils/              # Fonctions utilitaires pures
│
├── public/
│   └── fonts/              # Polices locales si nécessaire
│
├── .env.local              # Variables d'environnement (jamais committé)
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

---

## Flux de données

### Formulaire de contact (lead capture)

```
[Utilisateur] → [React Hook Form + Zod] → [API Route /api/contact] → [Webhook n8n] → [CRM / Notification]
```

- La validation Zod se fait côté client ET côté serveur (dans l'API Route)
- La clé du webhook n8n est stockée dans `.env.local` (`N8N_WEBHOOK_URL`)
- Jamais exposée côté client — le fetch se fait depuis `app/api/contact/route.ts`

### Variables d'environnement requises

```bash
# .env.local
N8N_WEBHOOK_URL=https://...   # URL du webhook n8n pour les leads
```

---

## Design System

### Tokens CSS (définis dans `app/globals.css`)

```css
:root {
  --color-bg:           #0A0A0A;
  --color-surface:      #111111;
  --color-border:       #1F1F1F;
  --color-accent:       #E8E0D0;
  --color-accent-muted: #A09880;
  --color-text:         #F5F0E8;
  --color-text-muted:   #6B6560;

  --font-display: 'Cormorant Garamond', serif;
  --font-body:    'DM Sans', sans-serif;
}
```

### Typographie

| Usage | Police | Taille | Poids |
|---|---|---|---|
| Hero H1 | Cormorant Garamond | `clamp(3rem, 6vw, 5.5rem)` | 300 |
| Section H2 | Cormorant Garamond | `clamp(2rem, 4vw, 3.5rem)` | 300 |
| Corps | DM Sans | `1rem` / `1.125rem` | 400 |
| Labels / Badges | DM Sans | `0.75rem` | 500, uppercase |

### Conventions d'animation (Framer Motion)

```tsx
// Variant standard pour l'entrée en scroll
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

// Usage dans les sections
<motion.div
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
/>
```

- Durées : 0.4s–0.8s, `ease` ou `easeOut` — jamais de `spring` avec bounce
- Stagger hero : `delayChildren: 0.1` entre chaque élément
- `once: true` systématique pour ne pas rejouer l'animation au scroll retour

---

## Rendu et performance

- **Stratégie** : SSG (Static Site Generation) — `page.tsx` sans `use client` au niveau racine
- **Images** : `next/image` obligatoire — format WebP automatique, lazy loading natif
- **Fonts** : `next/font/google` pour Cormorant Garamond et DM Sans (pas de FOUT, préchargement optimisé)
- **Bundle** : composants `use client` uniquement là où c'est nécessaire (formulaires, animations interactives)
- **Objectif LCP** : < 2.5s — éviter les ressources bloquantes, précharger la font display

```tsx
// app/layout.tsx — chargement des fonts
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-display',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
})
```

---

## Responsive

- **Approche** : mobile-first avec Tailwind
- **Breakpoints utilisés** : `sm` (640px) / `md` (768px) / `lg` (1024px) / `xl` (1280px)
- **Tests obligatoires** : 375px (mobile), 768px (tablette), 1440px (desktop)

---

## Accessibilité

- Contraste WCAG AA minimum sur tous les textes
- `focus-visible` stylisé sur tous les éléments interactifs (pas de `outline: none` sec)
- Landmarks sémantiques : `<nav>`, `<main>`, `<section>`, `<footer>`
- `aria-label` sur les icônes sans texte
- Accordéon FAQ : `aria-expanded`, `aria-controls` sur les boutons

---

## Déploiement

```
git push origin main
        ↓
  Vercel CI/CD
        ↓
  Build next build
        ↓
  Deploy (preview → production)
```

- Branch `main` → production automatique
- Variables d'environnement configurées dans le dashboard Vercel (jamais dans le repo)
- Pas de migration DB, pas de seed — site entièrement statique

---

## Ce qui n'est PAS dans l'architecture (MVP)

- Pas d'authentification
- Pas de base de données
- Pas de CMS headless
- Pas de bibliothèque UI tierce (MUI, Chakra, shadcn)
- Pas de tests unitaires (Playwright pour les tests E2E UI uniquement)
- Pas de mode clair / sombre
