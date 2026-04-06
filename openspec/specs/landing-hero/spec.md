## ADDED Requirements

### Requirement: Navigation sticky
Le site SHALL afficher une navigation sticky en haut de page contenant le logo Keelio, des liens d'ancrage vers les sections principales, et un bouton CTA primaire "Démarrer maintenant". La nav SHALL devenir légèrement opaque (backdrop-blur) au scroll.

#### Scenario: Navigation visible en haut de page
- **WHEN** la page est chargée
- **THEN** la nav est visible avec logo, liens et CTA, fond transparent

#### Scenario: Navigation au scroll
- **WHEN** l'utilisateur scrolle vers le bas (> 50px)
- **THEN** la nav applique un fond `--color-surface` avec `backdrop-filter: blur(12px)` et une transition smooth

#### Scenario: Navigation mobile
- **WHEN** la page est affichée sur mobile (< 768px)
- **THEN** les liens de navigation sont masqués et remplacés par un bouton menu hamburger fonctionnel

#### Scenario: Liens d'ancrage
- **WHEN** l'utilisateur clique sur un lien d'ancrage
- **THEN** la page scrolle smooth vers la section correspondante

### Requirement: Section Hero avec animations d'entrée
Le site SHALL afficher une section Hero pleine hauteur (min-height: 100vh) avec :
- Un headline principal H1 (clamp 3rem–5.5rem, weight 300, Cormorant Garamond)
- Un sous-titre en corps DM Sans
- Deux CTA : primaire "Démarrer maintenant" et secondaire "Voir comment ça marche"
- Un visuel ambiancé (gradient ou abstraction géométrique) côté droit sur desktop
- Des animations Framer Motion staggered au chargement (fade-up, delay 0.1s entre chaque élément)

#### Scenario: Animations d'entrée staggered
- **WHEN** la page se charge
- **THEN** le badge, le headline, le sous-titre et les CTA apparaissent en fade-up avec un délai progressif de 0.1s entre chaque élément

#### Scenario: Layout desktop Hero
- **WHEN** la page est affichée sur desktop (≥ 1024px)
- **THEN** le texte occupe la moitié gauche et le visuel ambiancé la moitié droite

#### Scenario: Layout mobile Hero
- **WHEN** la page est affichée sur mobile (< 768px)
- **THEN** le contenu est empilé verticalement, le visuel est masqué ou réduit

#### Scenario: CTA primaire fonctionnel
- **WHEN** l'utilisateur clique sur "Démarrer maintenant"
- **THEN** la page scrolle vers le formulaire de contact ou ouvre la section de contact

## MODIFIED Requirements

### Requirement: Hero dark avec gradient midnight et accent cyan
Le hero SHALL utiliser un fond gradient dark (midnight vers navy) avec le headline principal en texte blanc/clair, un sous-titre en texte muted bleuté, et le CTA primaire en accent cyan avec glow.

#### Scenario: Fond hero gradient dark
- **WHEN** la page se charge
- **THEN** le hero affiche un fond gradient de `#0A0E1A` vers `#111827` (ou avec une teinte radiale cyan subtile en arrière-plan)

#### Scenario: Headline visible sur fond dark
- **WHEN** le hero est affiché
- **THEN** le H1 est en `--color-text` (#F0F4F8), font Poppins weight 700, clamp(2.5rem, 5vw, 4.5rem)

#### Scenario: CTA primaire cyan avec glow
- **WHEN** le hero est affiché
- **THEN** le bouton CTA primaire "Démarrer maintenant" utilise `--color-accent` (#00D4FF) comme couleur de fond ou de bordure, avec un glow au hover

#### Scenario: Animation stagger fade-up au chargement
- **WHEN** la page se charge
- **THEN** les éléments du hero (badge, H1, sous-titre, CTAs) apparaissent en stagger fade-up avec delays de 0.1s entre chaque
