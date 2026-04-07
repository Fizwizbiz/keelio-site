## MODIFIED Requirements

### Requirement: Élévation et glow cyan au hover sur les cards
Toutes les cards et cadres interactifs du site SHALL réagir au survol de la souris avec une micro-élévation (translate-Y) et un glow cyan sur leur bordure, via Framer Motion `whileHover`. L'intensité des ombres s'adapte au contexte (dark ou light).

#### Scenario: Élévation visible au hover
- **WHEN** l'utilisateur survole une card interactive
- **THEN** la card se translate de -5px sur l'axe Y avec une transition de 0.35s ease

#### Scenario: Glow cyan sur bordure au hover (contexte dark)
- **WHEN** l'utilisateur survole une card dans une section dark
- **THEN** un `box-shadow` cyan apparaît (`0 0 0 1px rgba(0,212,255,0.4), 0 0 20px rgba(0,212,255,0.12), 0 8px 32px rgba(0,0,0,0.4)`) autour de la card

#### Scenario: Glow cyan adapté au hover (contexte light)
- **WHEN** l'utilisateur survole une card dans une section light (Features, HowItWorks)
- **THEN** un `box-shadow` apparaît (`0 0 0 1px rgba(0,212,255,0.35), 0 0 16px rgba(0,212,255,0.15), 0 8px 24px rgba(0,0,0,0.08)`) — ombre finale plus douce pour le fond clair

#### Scenario: z-index élevé au hover pour éviter le chevauchement
- **WHEN** une card est en état hover dans une grille
- **THEN** son z-index est supérieur à celui des cards adjacentes pour éviter d'être masquée

### Requirement: Respect de prefers-reduced-motion
Les animations hover SHALL être désactivées si l'utilisateur a configuré `prefers-reduced-motion: reduce` dans son OS.

#### Scenario: Animations désactivées selon préférence système
- **WHEN** l'utilisateur a activé `prefers-reduced-motion` dans son OS
- **THEN** les cards ne se translatent pas et n'affichent pas de glow au hover (état statique)
