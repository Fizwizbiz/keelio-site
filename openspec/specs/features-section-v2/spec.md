## MODIFIED Requirements

### Requirement: ChatMockup — démo conversationnelle animée
La section SHALL afficher un composant `ChatMockup` avec une hauteur fixe. La zone des messages SHALL avoir une hauteur maximale définie (`max-h`) avec `overflow-y: auto`, de sorte que l'apparition de nouveaux messages ne modifie jamais la hauteur externe du composant ni celle de la grille 2 colonnes. La conversation simulée SHALL porter sur une prise de rendez-vous. Les messages SHALL apparaître séquentiellement avec un délai de 1.2s. La séquence SHALL se répéter en boucle. Le composant SHALL respecter `prefers-reduced-motion`.

#### Scenario: Stabilité layout lors de l'animation
- **WHEN** de nouveaux messages apparaissent dans le ChatMockup
- **THEN** la hauteur du composant ne change pas et la colonne de texte gauche ne se déplace pas

#### Scenario: Scénario prise de rendez-vous
- **WHEN** le ChatMockup est rendu
- **THEN** la conversation simulée porte sur la prise d'un rendez-vous : le client demande un créneau, Keelio propose des disponibilités et confirme la réservation

#### Scenario: Animation séquentielle
- **WHEN** le composant est monté et visible
- **THEN** les messages apparaissent un par un avec 1.2s de délai

#### Scenario: Boucle infinie
- **WHEN** tous les messages ont été affichés
- **THEN** après 3 secondes, la séquence repart du début

#### Scenario: Reduced motion
- **WHEN** l'utilisateur a activé `prefers-reduced-motion`
- **THEN** tous les messages sont affichés immédiatement sans animation

### Requirement: Cards features dark avec bordure subtile et hover cyan
Les cards de features SHALL utiliser un fond `--color-surface` avec une bordure `--color-border`, et afficher un accent cyan (bordure top ou icône) au hover pour souligner la feature active.

#### Scenario: Card feature en style dark
- **WHEN** la section Features est affichée
- **THEN** chaque card a un fond `#111827`, une bordure `1px solid #1E2A3A`, sans shadow agressive

#### Scenario: Hover cyan sur card feature
- **WHEN** l'utilisateur survole une card de feature
- **THEN** la bordure top de la card passe en `--color-accent` (#00D4FF) avec une transition douce de 0.3s

#### Scenario: Icône feature en accent cyan
- **WHEN** une card de feature est affichée
- **THEN** l'icône ou le pictogramme de la feature est coloré en `--color-accent` (#00D4FF)

#### Scenario: Animation whileInView sur les cards
- **WHEN** l'utilisateur scrolle jusqu'à la section Features
- **THEN** les cards apparaissent en stagger fade-up (once: true) avec un délai de 0.15s entre chaque card

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
