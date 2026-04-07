## Context

Le site Keelio est actuellement 100% dark avec des angles droits sur tous les éléments. L'inspiration neolva.fr alterne des sections dark et des sections blanches avec des cards aux coins arrondis, créant un rythme visuel aéré et moderne. L'objectif est de répliquer ce contraste dark/light tout en conservant l'identité cyan de Keelio.

Ordre des sections actuel : Hero → Features → SocialProof → Problem → HowItWorks → QuoteCTA → FAQ → Contact

## Goals / Non-Goals

**Goals:**
- Angles arrondis cohérents sur tous les composants (cards, inputs, badges, boutons)
- Alternance dark/light sur les sections : Features et HowItWorks passent en fond blanc/clair
- Tokens CSS propres pour le contexte clair — aucun hardcode de `#fff` dans les composants
- Adaptation complète des couleurs dans les sections claires (texte sombre, bordures légères, accents cyan qui restent lisibles)

**Non-Goals:**
- Changer la typographie ou la hiérarchie des sections
- Implémenter un vrai toggle dark/light mode
- Modifier la structure HTML ou l'ordre des sections

## Decisions

### 1. Sections claires : Features et HowItWorks

Features (section "La solution") et HowItWorks ("Comment ça marche") passent en fond blanc cassé (`#F8FAFC`). Ce sont les deux sections centrales à contenu dense — leur fond clair crée le contraste maximal avec Hero (dark+grid) et Problem (surface+grid) de part et d'autre.

Alternance résultante :
- Hero → **dark** (bg + grid)
- Features → **light** (#F8FAFC)
- SocialProof → **dark** (surface)
- Problem → **dark** (surface + grid)
- HowItWorks → **light** (#F8FAFC)
- QuoteCTA → **dark** (surface + grid)
- FAQ → **dark** (bg)
- Contact → **dark** (bg + grid)

### 2. Tokens CSS pour le contexte clair

Ajout dans `:root` :
```css
--color-bg-light:          #F8FAFC;   /* Fond section claire */
--color-surface-light:     #FFFFFF;   /* Surface card en section claire */
--color-text-dark:         #0D1B2A;   /* Texte principal sur fond clair */
--color-text-dark-muted:   #5A7A94;   /* Texte secondaire sur fond clair */
--color-border-light:      #E2EAF0;   /* Bordure sur fond clair */
```

Classes utilitaires :
```css
.section-light {
  background-color: var(--color-bg-light);
}
```

### 3. Border-radius system

Utilisation des classes Tailwind standard :
- **Badges** : `rounded-full`
- **Boutons** : `rounded-lg` (8px)
- **Cards / Stats / Pain points** : `rounded-2xl` (16px)
- **Mockup chat** : `rounded-2xl`
- **Inputs formulaire** : `rounded-lg`
- **Steps HowItWorks** : `rounded-2xl`
- **Accordéon FAQ** : `rounded-xl` (12px) par item
- **AudioPlayer** : `rounded-xl`

### 4. Adaptation hover en contexte clair

Les effets whileHover (y:-5, cyan glow) restent identiques — le glow cyan `rgba(0,212,255,0.35)` est visible sur fond clair. Les ombres sont ajustées : `rgba(0,0,0,0.08)` au lieu de `rgba(0,0,0,0.4)` pour les sections light.

### 5. Accent cyan sur fond clair

`#00D4FF` sur `#F8FAFC` = ratio de contraste ~2.5:1 — insuffisant pour du texte courant mais acceptable pour les accents décoratifs et les valeurs stats larges. Les labels et textes secondaires utilisent `--color-text-dark-muted` (#5A7A94) qui passe WCAG AA sur le fond clair.

## Risks / Trade-offs

- [Lisibilité accent] Le cyan `#00D4FF` n'est pas WCAG AA en texte courant sur fond clair → Mitigation : n'utiliser cyan que pour les grandes valeurs (stats) et les éléments décoratifs, pas pour le corps de texte
- [Cohérence visuelle] Risque de cassure si certains composants internes ont des couleurs hardcodées → Mitigation : audit complet des `bg-[var(--color-surface)]` et `bg-[var(--color-bg)]` dans Features et HowItWorks
- [Chat mockup sur fond clair] Le ChatMockup dans Features utilise `bg-[var(--color-surface)]` et `bg-[var(--color-bg)]` → Mitigation : le mockup garde ses couleurs dark pour simuler un vrai téléphone

## Migration Plan

1. Ajouter tokens CSS dans globals.css
2. Ajouter `.section-light` utility
3. Modifier globals.css border-radius n/a (Tailwind suffit)
4. Modifier composants UI (Badge, Button, AudioPlayer) — sans contexte
5. Modifier Features.tsx — section + cards + stats
6. Modifier HowItWorks.tsx — section + step cards
7. Tester visuellement l'alternance à 1440px et 375px
