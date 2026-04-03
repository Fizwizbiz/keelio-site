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
