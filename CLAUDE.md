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

**Tech, premium, dark.** L'inspiration est celle des agences d'automatisation IA modernes et des SaaS B2B tech-forward : style dark midnight avec accents cyan. L'utilisateur doit sentir immédiatement puissance, sérieux et innovation. Fond sombre profond, texte blanc cassé, accent cyan vif.

### Palette de couleurs

```css
--color-bg:           #0B1629;   /* Bleu profond — fond principal */
--color-surface:      #112240;   /* Bleu marine — surface élevée */
--color-border:       #1A3050;   /* Bordure bleue subtile */
--color-accent:       #00D4FF;   /* Cyan vif — CTA primaire, hover, highlights */
--color-accent-muted: #0099CC;   /* Cyan atténué — états secondaires */
--color-text:         #E8F4F8;   /* Blanc légèrement bleuté — texte principal */
--color-text-muted:   #7A9BB5;   /* Bleu-gris — textes secondaires */
```

> Palette dark bleue — fond bleu profond `#0B1629`, surface bleue marine `#112240` clairement distincte. L'accent cyan `#00D4FF` donne la signature tech/IA. Un quadrillage CSS subtil (lignes cyan 0.045 d'opacité, 40×40px) est appliqué sur toute la page via `body` et les classes `.section-bg` / `.section-surface`. Les rgba hardcodés utilisent `0,212,255` pour les accents et `17,34,64` (équivalent de `#112240`) pour les surfaces.

### Typographie

- **Display / Titres** : `Poppins` (Google Fonts) — sans-serif moderne, dynamique, tech
- **Corps / UI** : `Inter` (Google Fonts) — lisible, propre, standard SaaS B2B
- **Code / monospace** : `JetBrains Mono` si nécessaire

```css
--font-display: 'Poppins', sans-serif;
--font-body:    'Inter', sans-serif;
```

Tailles :
- H1 hero : `clamp(2.5rem, 5vw, 4.5rem)`, weight 700, letter-spacing -0.02em
- H2 sections : `clamp(1.875rem, 3.5vw, 3rem)`, weight 600
- Corps : `1rem` / `1.125rem`, weight 400, line-height 1.6-1.7
- Caps label (badges) : `0.7rem`, weight 500, letter-spacing 0.12em, uppercase

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
- Glow cyan (`box-shadow: 0 0 20px rgba(0,212,255,0.3)`) sur les CTA primaires au hover
- Pas de mode sombre / clair toggle — le site est dark par conception

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