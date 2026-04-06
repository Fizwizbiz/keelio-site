## Context

La palette actuelle (`#0A0E1A` / `#111827`) est trop sombre et les deux valeurs trop proches. Les sections s'enchaînent sans différenciation visible. Le site de référence (neolva.fr) utilise un bleu profond mais clairement bleu — pas noir. Le quadrillage en fond est une signature tech largement répandue (Vercel, Linear, etc.).

## Goals / Non-Goals

**Goals:**
- Nouvelle palette avec plus de bleu, fond principal `#0B1629` et surface nettement distincte `#112240`
- Quadrillage CSS en fond sur `body` ou `.grid-bg` : lignes cyan très transparentes (opacity ~0.04)
- Corriger l'alternance : Features et QuoteCTA passent sur `--color-surface`
- Mettre à jour CLAUDE.md

**Non-Goals:**
- Changer les accents cyan ou la typographie
- Toucher aux composants UI atomiques (Button, Badge)
- Modifier le contenu textuel

## Decisions

### 1. Nouvelle palette

```css
--color-bg:           #0B1629;   /* Bleu profond — fond principal (plus bleu que midnight) */
--color-surface:      #112240;   /* Bleu marine — surface élevée, nettement distincte */
--color-border:       #1A3050;   /* Bordure bleue subtile */
--color-accent:       #00D4FF;   /* Cyan vif — inchangé */
--color-accent-muted: #0099CC;   /* Cyan atténué — inchangé */
--color-text:         #E8F4F8;   /* Blanc légèrement bleuté — inchangé */
--color-text-muted:   #7A9BB5;   /* Bleu-gris — ajusté pour cohérence */
```

La différence de luminosité entre `#0B1629` et `#112240` est ~15%, suffisante pour une alternance perceptible.

### 2. Quadrillage CSS en fond

Appliqué sur `body` via `background-image` :

```css
background-image:
  linear-gradient(rgba(0, 212, 255, 0.04) 1px, transparent 1px),
  linear-gradient(90deg, rgba(0, 212, 255, 0.04) 1px, transparent 1px);
background-size: 40px 40px;
```

Avantages :
- Pur CSS, zéro JS, zéro perf impact
- Couleur cyan cohérente avec l'accent du site
- `background-attachment: fixed` optionnel pour un effet parallaxe subtil

Alternatives considérées :
- SVG pattern → plus flexible mais alourdit le DOM
- `::before` pseudo-element → plus propre mais exige `position: fixed` et z-index

### 3. Alternance sections

Ordre corrigé :
| Section | Fond |
|---------|------|
| Hero | bg |
| Features | **surface** ← changé |
| SocialProof | bg |
| Problem | surface |
| HowItWorks | bg |
| QuoteCTA | **surface** ← changé |
| FAQ | bg ← inversé pour éviter surface/surface |
| Contact | bg |

## Risks / Trade-offs

- **WCAG** → `#E8F4F8` sur `#0B1629` → ratio ~11:1 ✓, sur `#112240` → ratio ~8:1 ✓
- **Pain point cards** dans Problem : elles ont `bg-[var(--color-bg)]` hardcodé → à corriger pour qu'elles soient en bg sur fond surface
- Le quadrillage doit être suffisamment discret (opacity ≤ 0.05) pour ne pas distraire
