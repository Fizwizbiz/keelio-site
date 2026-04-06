## ADDED Requirements

### Requirement: Hover interactif sur les pain point cards de Problem
Les 3 cards de la section Problem (Appels manqués, Disponibilité limitée, Tâches répétitives) SHALL réagir au hover avec élévation et glow cyan sur leur bordure.

#### Scenario: Pain point card animée au hover
- **WHEN** l'utilisateur survole une pain point card
- **THEN** la card se translate de -5px en Y, affiche un glow cyan (`0 0 0 1px rgba(0,212,255,0.35), 0 0 18px rgba(0,212,255,0.10)`) et son icône passe en couleur accent plus vive

### Requirement: Micro-hover sur les étapes HowItWorks
Les 3 étapes de la section HowItWorks SHALL réagir au hover avec un léger décalage horizontal et un accent line glow.

#### Scenario: Step card HowItWorks animée au hover
- **WHEN** l'utilisateur survole une étape HowItWorks
- **THEN** le contenu de l'étape se translate de -3px en X et la ligne verticale cyan augmente légèrement en opacité (0.22 → 0.55)
