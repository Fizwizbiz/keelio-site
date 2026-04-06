## Why

Le site actuel utilise une palette beige crème light qui, bien qu'élégante, ne reflète pas l'image tech et innovante d'une agence d'automatisation IA. Le style de neolva.fr — dark midnight avec accents cyan, typographie moderne, sections dynamiques — correspond bien mieux au positionnement premium et technologique de Keelio, et augmente la crédibilité perçue auprès des TPE/PME.

## What Changes

- **BREAKING** Refonte complète de la palette : abandon du fond beige clair → fond dark navy/midnight profond avec accents cyan
- **BREAKING** Refonte de toutes les sections de la landing page (Hero, Features, HowItWorks, Nav, Footer, etc.)
- Mise à jour de `globals.css` avec la nouvelle palette de variables CSS
- Mise à jour de `CLAUDE.md` avec la nouvelle direction artistique
- Refonte typographique : abandon de Cormorant Garamond → typographie sans-serif moderne (Inter ou Poppins)
- Refonte des composants UI atomiques (Button, Badge, Card) pour correspondre au nouveau style
- Conservation de tous les contenus/copies existants (headlines, textes, features, HowItWorks steps)
- Animations Framer Motion adaptées au style dark (glows cyan, fade-ins sombres)

## Capabilities

### New Capabilities

- `design-foundation-v3`: Nouvelle fondation visuelle dark — palette midnight/cyan, typographie moderne sans-serif, tokens CSS, direction artistique

### Modified Capabilities

- `landing-hero`: Le hero adopte le nouveau style dark avec fond gradient midnight, headline fort, accents cyan sur le CTA primaire
- `features-section-v2`: Les cards features passent en style dark avec bordures subtiles et hover cyan
- `value-sections`: Sections problème/solution refondues visuellement en dark
- `conversion-sections`: CTA final et blocs de conversion redessinés en dark avec accent cyan
- `footer`: Footer adapté à la palette dark avec liens hover cyan

## Impact

- `app/globals.css` : refonte totale des variables CSS
- `app/page.tsx` : aucune modification structurelle mais rendu visuel différent
- `components/sections/*` : tous les composants de section refondus
- `components/ui/*` : Button, Badge, Card refondus
- `CLAUDE.md` : mise à jour de la palette et de la direction artistique
- `app/layout.tsx` : changement des polices Google Fonts (Inter/Poppins à la place de Cormorant/DM Sans)
