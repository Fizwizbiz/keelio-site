## ADDED Requirements

### Requirement: Hover interactif sur les stat cards de Features
Les 4 cards de statistiques (< 30s, 24/7, 0, 100%) SHALL réagir au hover avec élévation et glow cyan.

#### Scenario: Stat card interactive au hover
- **WHEN** l'utilisateur survole une stat card
- **THEN** la card se translate de -5px en Y et affiche un glow cyan sur sa bordure

### Requirement: Hover interactif sur le cadre chat mockup
Le cadre du chat mockup SHALL réagir au hover avec une légère élévation et un glow cyan ambiant.

#### Scenario: Chat mockup animé au hover
- **WHEN** l'utilisateur survole le cadre du chat mockup
- **THEN** le cadre se translate de -4px en Y avec un glow cyan plus doux (`0 0 32px rgba(0,212,255,0.10)`)
