## Context

Le site Keelio est actuellement construit sur Next.js 14 avec une palette beige crème light (fond `#F5F0E6`, accents brun cuir `#6B4F2E`). L'utilisateur souhaite adopter un style similaire à neolva.fr : fond dark midnight/navy, accents cyan, typographie sans-serif moderne. La refonte est purement visuelle — la structure des sections et les contenus textuels sont conservés.

## Goals / Non-Goals

**Goals:**
- Remplacer la palette entière par un système dark navy + accents cyan
- Remplacer les polices Cormorant Garamond / DM Sans par Inter + Poppins (ou équivalent moderne)
- Refondre tous les composants UI et sections pour coller au nouveau style
- Mettre à jour CLAUDE.md et globals.css comme source de vérité visuelle
- Conserver 100% du contenu textuel existant

**Non-Goals:**
- Modifier la structure de navigation ou l'ordre des sections
- Ajouter/supprimer des fonctionnalités (formulaires, FAQ, etc.)
- Changer le framework ou les dépendances (on reste Next.js 14, Framer Motion, Tailwind)
- Implémenter un toggle dark/light mode

## Decisions

### 1. Palette : Dark Midnight + Cyan

La palette s'inspire directement du style neolva.fr :

```css
--color-bg:           #0A0E1A;   /* Midnight profond — fond principal */
--color-surface:      #111827;   /* Navy sombre — cards, surfaces élevées */
--color-border:       #1E2A3A;   /* Bordures subtiles navy */
--color-accent:       #00D4FF;   /* Cyan vif — CTA primaire, hover, highlights */
--color-accent-muted: #0099CC;   /* Cyan atténué — états secondaires */
--color-text:         #F0F4F8;   /* Blanc cassé froid — texte principal */
--color-text-muted:   #8899AA;   /* Gris bleuté — textes secondaires */
```

Alternatives considérées :
- Garder le fond beige + changer seulement les accents → rejeté, trop éloigné du style cible
- Fond purement noir `#000000` → rejeté, trop agressif, nécessite plus de soin WCAG

### 2. Typographie : Inter + Poppins

- **Poppins** (Google Fonts) : titres display, weight 600-700, moderne et dynamique
- **Inter** (Google Fonts) : corps de texte, UI, poids 400-500, excellent rendu à petite taille

Alternatives considérées :
- Garder DM Sans → trop neutre, ne correspond pas au style tech de neolva.fr
- Geist (Vercel) → moins reconnu, moindre disponibilité

### 3. Composants : refonte from scratch vs adaptation

On adapte les composants existants (Button, Badge, Card) plutôt que de les réécrire de zéro. Les variables CSS font l'essentiel du travail ; seules les classes Tailwind spécifiques (couleurs hardcodées) sont mises à jour.

### 4. Animations : Framer Motion conservé, style adapté

Les animations Framer Motion restent (stagger fade-up, whileInView), mais on ajoute :
- Glow cyan sur les CTA au hover (`box-shadow: 0 0 20px rgba(0, 212, 255, 0.3)`)
- Effets de particules ou gradient animé dans le hero (optionnel selon complexité)

## Risks / Trade-offs

- **Contraste WCAG** → Le cyan `#00D4FF` sur fond `#0A0E1A` doit être vérifié ; certains états muted pourraient échouer le ratio 4.5:1. Mitigation : tester avec un checker WCAG avant validation.
- **Régression CSS** → Tous les composants doivent être revus un par un. Mitigation : démarrer par globals.css et propager section par section.
- **CLAUDE.md out-of-sync** → La documentation doit être mise à jour en premier pour que les futures sessions utilisent les bonnes valeurs.

## Migration Plan

1. Mettre à jour `CLAUDE.md` avec la nouvelle palette et direction artistique
2. Mettre à jour `app/globals.css` — variables CSS + polices
3. Mettre à jour `app/layout.tsx` — Google Fonts imports
4. Refondre section par section : Nav → Hero → Features → HowItWorks → Conversions → Footer
5. Refondre composants UI : Button, Badge, AudioPlayer
6. Test Playwright multi-breakpoints (375px, 768px, 1440px)
