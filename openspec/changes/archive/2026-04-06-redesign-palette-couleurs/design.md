## Context

Le site Keelio utilise actuellement une palette entièrement sombre (`#0A0A0A` de fond, `#1E1B17` en surface). Bien que l'intention élégante soit présente, le résultat est perçu comme trop oppressant. Les variables CSS custom properties centralisées dans `globals.css` permettent un changement de palette global sans toucher les composants individuels. La police, les animations, et la structure restent intacts.

## Goals / Non-Goals

**Goals:**
- Définir une nouvelle palette qui conserve l'élégance premium (inspirée Stripe/Linear) mais avec plus de luminosité
- Le fond passe d'un noir quasi-pur à un ton intermédiaire — ni blanc ni noir, quelque chose comme du gris très foncé chaud (autour de `#18181A` à `#1C1C1E`) ou un fond légèrement crémeux sombre
- Maintenir le contraste WCAG AA sur tous les textes
- Supprimer proprement `CTAFinal` sans laisser de dead code

**Non-Goals:**
- Refaire le layout ou la structure des sections
- Changer la typographie (Cormorant Garamond / DM Sans conservés)
- Ajouter un mode clair — le site reste sombre par conception
- Modifier les animations Framer Motion

## Decisions

### Décision 1 — Direction de la nouvelle palette

**Choix retenu : fond gris anthracite chaud (~#171717 à #1A1A1A) avec surfaces relevées (~#232323)**

Plutôt qu'un noir profond `#0A0A0A`, on opte pour un gris très foncé qui laisse respirer l'œil. La surface monte à un niveau perceptiblement distinct. L'accent crème `#E8D9BC` reste chaud mais légèrement plus doré pour contraster davantage sur fond moins sombre.

Palette proposée :
```css
--color-bg:          #141414;   /* Gris anthracite profond — plus doux que le noir */
--color-surface:     #1E1E1E;   /* Surface distincte, neutre chaud */
--color-border:      #2E2E2E;   /* Bordures visibles sans agressivité */
--color-accent:      #D4C5A9;   /* Crème doré — signature Keelio */
--color-accent-muted:#8F8270;   /* Accent secondaire atténué */
--color-text:        #F0EBE1;   /* Blanc cassé chaud */
--color-text-muted:  #7A7570;   /* Texte secondaire lisible */
```

**Pourquoi pas un fond encore plus clair (type #2A2A2A) ?** Risque de perdre le côté premium et "midnight luxury" qui différencie Keelio. Le curseur s'arrête à un noir habitable.

**Alternative considérée : fond légèrement bleuté/violet (type Linear/Vercel)** → Rejeté car CLAUDE.md stipule explicitement "Pas de bleu, pas de violet".

### Décision 2 — Suppression de CTAFinal

`CTAFinal.tsx` contient "Prêt à ne plus jamais rater une opportunité ?" — doublon direct de `QuoteCTA`. Suppression du fichier + retrait de l'import dans `page.tsx`. Le fichier sera archivé dans le commit pour traçabilité Git.

### Décision 3 — Mise à jour de CLAUDE.md

La palette documentée dans CLAUDE.md doit refléter les nouvelles valeurs pour que les futures sessions Claude génèrent du code cohérent. C'est une contrainte critique pour la cohérence long-terme.

## Risks / Trade-offs

- [Composants avec couleurs hardcodées] → Vérifier via grep `#0A0A0A`, `#1E1B17`, `#F5F0E8` etc. dans les fichiers `.tsx` et `.css` avant de valider. S'il y en a, les remplacer par les variables CSS correspondantes.
- [Régressions de contraste] → Tester visuellement sur Playwright aux 3 breakpoints (375, 768, 1440px) après implémentation
- [Grain texture] → L'effet `body::after` avec opacité 0.028 peut être moins visible sur fond moins sombre — ajuster légèrement si nécessaire

## Migration Plan

1. Mettre à jour `globals.css` — remplacer les 7 variables CSS
2. Vérifier grep des couleurs hardcodées — corriger si trouvées
3. Supprimer `components/sections/CTAFinal.tsx`
4. Retirer import + usage `<CTAFinal />` dans `app/page.tsx`
5. Mettre à jour `CLAUDE.md` palette section
6. Test Playwright — mobile, tablette, desktop
7. Commit unique
