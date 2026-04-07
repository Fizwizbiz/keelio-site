## ADDED Requirements

### Requirement: Overflow contenu dans le wrapper hover
Le composant ChatMockup SHALL être encapsulé dans un conteneur avec `overflow-hidden` pour qu'aucun contenu ni artefact visuel ne dépasse du cadre, y compris lors du hover (translateY, boxShadow).

#### Scenario: Hover sans débordement
- **WHEN** l'utilisateur survole le mockup
- **THEN** aucune zone blanche ou artefact ne doit apparaître à droite ou autour du cadre

### Requirement: Auto-scroll à l'apparition des messages
La zone de messages SHALL scroller automatiquement vers le bas à chaque nouveau message affiché, sans intervention de l'utilisateur.

#### Scenario: Nouveau message visible sans scroll manuel
- **WHEN** un nouveau message apparaît dans la conversation
- **THEN** la zone de messages scrolle fluitement vers le bas pour révéler le nouveau message

#### Scenario: Respect de prefers-reduced-motion
- **WHEN** l'utilisateur a activé `prefers-reduced-motion`
- **THEN** tous les messages sont affichés immédiatement et le scroll se fait sans animation (`behavior: 'auto'`)

### Requirement: Design compact et sombre intégré
Le mockup SHALL adopter un design "dark card" (fond `#0B1629`, surface `#112240`, bordure cyan subtile) contrasté sur fond blanc, avec des paddings réduits et une hauteur de zone messages compacte.

#### Scenario: Rendu visuel cohérent avec la palette dark
- **WHEN** la section Features est affichée
- **THEN** le mockup présente un fond sombre, une bordure `rgba(0,212,255,0.20)`, et s'intègre sans artefact blanc sur le fond blanc de la section

#### Scenario: Zone messages compacte
- **WHEN** le mockup est rendu
- **THEN** la hauteur de la zone messages ne dépasse pas `h-52` et les paddings internes sont réduits (px-3, py-3)
