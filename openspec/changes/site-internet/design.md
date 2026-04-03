## Context

Keelio est une agence d'automatisation IA ciblant les TPE/PME françaises. Le site vitrine est le principal point de conversion. Il n'existe aucune codebase existante — tout est à construire. Le design s'inspire des SaaS B2B premium (Stripe, Linear, Vercel) : sombre, minimaliste, sobre.

Stack décidée en amont dans CLAUDE.md : Next.js 14 App Router, TypeScript, Tailwind CSS, Framer Motion, React Hook Form + Zod. Aucune bibliothèque UI tierce (MUI, Chakra, shadcn) n'est autorisée.

## Goals / Non-Goals

**Goals:**
- Landing page statique complète, déployable sur Vercel sans backend
- Formulaire de contact fonctionnel via API route Next.js → webhook n8n
- Performance : LCP < 2.5s, images optimisées avec `next/image`
- Accessibilité WCAG AA sur tous les textes
- Responsive mobile-first (375px → 1440px)

**Non-Goals:**
- Authentification, espace client, dashboard
- CMS ou gestion de contenu dynamique
- A/B testing, analytics avancés (hors MVP)
- Internationalisation (site 100% français)
- Mode clair

## Decisions

### D1 — Next.js App Router (pas Pages Router)
**Choix** : App Router avec Server Components par défaut.
**Raison** : Meilleure performance out-of-the-box, layouts imbriqués propres, API routes modernes. Le site est statique donc le SSR n'est pas un frein.
**Alternative écartée** : Pages Router — API plus ancienne, pas de Server Components natifs.

### D2 — CSS Variables + Tailwind (pas Tailwind seul)
**Choix** : Définir les tokens de design comme CSS Variables dans `globals.css`, puis les exposer dans `tailwind.config.js` via `theme.extend`.
**Raison** : Permet de référencer les tokens dans les CSS Modules pour les animations spécifiques, tout en gardant la DX Tailwind pour le layout.
**Alternative écartée** : Tailwind seul avec couleurs hardcodées — moins maintenable, pas de CSS Variables disponibles hors Tailwind.

### D3 — Framer Motion uniquement pour les animations (pas CSS animations)
**Choix** : Toutes les animations déclaratives (fade-up, whileInView, hover) passent par Framer Motion.
**Raison** : API déclarative, gestion du `once: true` sur scroll, orchestration staggered facile sur le Hero. Cohérence du système.
**Alternative écartée** : Intersection Observer + CSS — plus de code boilerplate, moins lisible.

### D4 — API Route Next.js pour le webhook n8n
**Choix** : Le formulaire de contact soumet vers `/api/contact` (Server Action ou Route Handler), qui relaie vers le webhook n8n côté serveur.
**Raison** : L'URL du webhook n8n ne doit JAMAIS être exposée côté client. La variable d'environnement `N8N_WEBHOOK_URL` reste serveur.
**Alternative écartée** : Fetch direct côté client vers n8n — risque d'exposition de l'URL, CORS potentiels.

### D5 — Structure des composants : sections/ + ui/
**Choix** : Séparer les composants atomiques (`/components/ui/`) des sections de page (`/components/sections/`).
**Raison** : Les sections sont couplées au copywriting et à la mise en page de la landing. Les UI components sont réutilisables indépendamment.
**Alternative écartée** : Un seul dossier `components/` plat — devient vite difficile à naviguer.

### D6 — Polices via next/font (pas CDN Google Fonts)
**Choix** : Charger Cormorant Garamond et DM Sans via `next/font/google`.
**Raison** : Auto-hébergement, zéro requête externe, CLS=0 grâce au font subsetting automatique. Meilleur LCP.
**Alternative écartée** : `<link>` Google Fonts dans le head — requête externe bloquante, CLS potentiel.

## Risks / Trade-offs

- **[Framer Motion bundle size]** → Utiliser `LazyMotion` avec `domAnimation` feature set pour réduire le bundle à ~18kb au lieu de ~90kb. Import côté client uniquement.
- **[Webhook n8n indisponible]** → Afficher un message d'erreur utilisateur et logger côté serveur. Ne pas crasher la page.
- **[Cormorant Garamond — rendu mobile]** → Tester sur iOS/Android réels. Fallback : `serif` générique. Ajuster `font-smoothing`.
- **[Contenu copywriting incomplet]** → Utiliser des placeholder réalistes basés sur COPYWRITING.md. Les sections seront facilement éditables.

## Migration Plan

1. Initialiser le projet avec `create-next-app` (TypeScript, Tailwind, App Router, no ESLint preset)
2. Configurer les tokens, polices, layout global
3. Construire les sections dans l'ordre de la landing (Hero en premier — validation visuelle rapide)
4. Intégrer le formulaire en dernier (dépend de la variable d'environnement n8n)
5. Deploy preview sur Vercel via push sur `main`

Rollback : le site est statique, pas de migration de données. Rollback = revert du commit.

## Open Questions

- URL du webhook n8n : à fournir par le client avant le déploiement production
- Logos "Ils nous font confiance" : placeholders SVG en attendant les assets clients
- Nombre exact de plans tarifaires et prix : à confirmer (défaut = 3 plans)
