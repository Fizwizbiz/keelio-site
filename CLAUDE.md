# Instructions pour Claude Code — Keelio

## Aperçu du projet

Site vitrine marketing de **Keelio**, une agence d'automatisation IA positionnée sur le 24/7 et la simplicité. L'objectif est de convertir des TPE/PME françaises en clients en inspirant confiance, clarté et modernité. Pas de backend pour le MVP — site statique déployable sur Vercel ou Netlify.

## Architecture globale

- **Framework** : Next.js 14 (App Router) avec TypeScript
- **Styles** : Tailwind CSS + CSS Modules pour les animations spécifiques
- **Animations** : Framer Motion pour les transitions et micro-interactions
- **Formulaires** : React Hook Form + validation Zod
- **Déploiement** : Vercel (CI/CD automatique sur push `main`)
- **Pas de base de données** pour le MVP — les leads passent par un webhook n8n

Important : Use skill frontend-design/

Structure des dossiers :
```
/app
  /page.tsx          → Landing page principale
  /layout.tsx        → Layout global (font, meta)
/components
  /ui                → Composants atomiques (Button, Badge, Card...)
  /sections          → Sections de la landing (Hero, Features, Pricing...)
/lib
  /hooks             → Hooks custom
  /utils             → Fonctions utilitaires
/public
  /fonts             → Polices locales si nécessaire
```

## Style visuel

### Direction artistique

**Élégant, minimaliste, premium.** L'inspiration est celle des agences de conseil haut de gamme et des SaaS B2B modernes : Stripe, Linear, Vercel. L'utilisateur doit sentir qu'il a affaire à quelqu'un de sérieux dès les premières secondes.

### Palette de couleurs

```css
--color-bg:          #141414;   /* Gris anthracite — fond principal, plus vivable que le noir pur */
--color-surface:     #1E1E1E;   /* Surfaces distinctes, neutre chaud */
--color-border:      #2E2E2E;   /* Bordures visibles sans agressivité */
--color-accent:      #D4C5A9;   /* Crème doré — couleur principale de marque */
--color-accent-muted:#8F8270;   /* Accent atténué pour textes secondaires */
--color-text:        #F0EBE1;   /* Blanc cassé chaud — texte principal */
--color-text-muted:  #7A7570;   /* Texte secondaire, hints */
```

> Palette sombre et chaude — le fond est un anthracite habitable, pas un noir oppressant. L'accent crème doré donne un sentiment premium sans être agressif. Pas de bleu, pas de violet.

### Typographie

- **Display / Titres** : `Cormorant Garamond` (Google Fonts) — serif élégant, haut de gamme
- **Corps / UI** : `DM Sans` (Google Fonts) — moderne, lisible, sobre
- **Code / monospace** : `JetBrains Mono` si nécessaire

```css
--font-display: 'Cormorant Garamond', serif;
--font-body:    'DM Sans', sans-serif;
```

Tailles :
- H1 hero : `clamp(3rem, 6vw, 5.5rem)`, weight 300, letter-spacing -0.02em
- H2 sections : `clamp(2rem, 4vw, 3.5rem)`, weight 300
- Corps : `1rem` / `1.125rem`, weight 400, line-height 1.7
- Caps label (badges) : `0.75rem`, weight 500, letter-spacing 0.12em, uppercase

### Animations

- **Page load** : staggered fade-up sur les éléments hero (delay 0.1s entre chaque)
- **Scroll** : `whileInView` Framer Motion avec `once: true` — chaque section entre proprement
- **Hover CTA** : légère translation Y + glow subtil sur l'accent
- **Pas d'animations agressives** — tout doit rester calme et maîtrisé
- Durées : 0.4s–0.8s ease, jamais de bounce

### Layouts & détails

- Marges généreuses : `padding: 8rem 0` entre les sections
- Ligne décorative fine (`1px solid var(--color-border)`) pour séparer visuellement sans alourdir
- Grid asymétrique sur les features : pas de 3 colonnes identiques — varier les proportions
- Pas de cartes avec shadows agressives — préférer `border: 1px solid var(--color-border)`
- Pas de mode sombre / clair toggle — le site est sombre par conception

## Contraintes et Politiques

- **NE JAMAIS exposer les clés API côté client** — toute intégration (webhook n8n, analytics) passe par des variables d'environnement `.env.local` côté serveur ou des API routes Next.js
- **NE PAS ajouter de bibliothèques UI tierces** (MUI, Chakra, shadcn) — tout est construit from scratch pour garder le contrôle total du style
- **Accessibilité** : contraste WCAG AA minimum sur tous les textes, focus visible sur tous les éléments interactifs
- **Performance** : LCP < 2.5s, pas d'images non optimisées (utiliser `next/image` systématiquement)
- **Responsive** : mobile-first, breakpoints `sm / md / lg / xl`

## Structure de la landing page

Ordre des sections :

1. **Nav** — Logo Keelio + liens ancres + CTA primaire
2. **Hero** — Headline fort, sous-titre, CTA double (primaire + secondaire), visual ambiancé
3. **Logos / Social proof** — "Ils nous font confiance" (à compléter)
4. **Problème** — Ce que le client perd sans Keelio (appels manqués, disponibilité limitée...)
5. **Solution / Features** — Ce que Keelio fait concrètement (3–4 features clés)
6. **Comment ça marche** — 3 étapes simples (onboarding rapide)
7. **Tarifs** — 2–3 plans clairs
8. **FAQ** — 5–6 questions fréquentes en accordéon
9. **CTA final** — Bloc de conversion avec headline fort
10. **Footer** — Liens légaux, contact, réseaux

## Copywriting & ton

- **Langue** : français uniquement sur le site
- **Ton** : direct, confiant, sobre — pas d'exclamations, pas de superlatifs vides
- **Headline formula** : bénéfice concret + différenciateur → ex. *"Votre entreprise répond, même quand vous dormez."*
- **Éviter** : "solution innovante", "booster votre croissance", tout jargon creux
- **CTA principal** : "Démarrer maintenant" ou "Parler à un expert"

## Dépendances autorisées

```json
{
  "next": "14.x",
  "react": "18.x",
  "typescript": "5.x",
  "tailwindcss": "3.x",
  "framer-motion": "11.x",
  "react-hook-form": "7.x",
  "zod": "3.x"
}
```

Préférer les composants existants plutôt qu'ajouter de nouvelles bibliothèques UI.

## Tests

- À la fin de chaque développement UI : tester avec `playwright-skill`
- Vérifier systématiquement : mobile 375px, tablette 768px, desktop 1440px
- Tester les interactions clés : formulaire de contact, navigation, accordéon FAQ

## Context7

Utilise toujours **context7** lorsque tu génères du code, des étapes de configuration ou de la documentation de bibliothèque/API (Next.js, Framer Motion, Tailwind, etc.).

## Documentation

- `PRD.md` : exigences produit et user stories
- `ARCHITECTURE.md` : choix techniques détaillés
- `COPYWRITING.md` : tous les textes validés de la landing