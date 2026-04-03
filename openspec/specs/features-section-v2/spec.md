## ADDED Requirements

### Requirement: Headline percutant et layout dramatique
La section Features SHALL afficher un headline reformulé "L'IA qui ne dort jamais." en Cormorant Garamond grande taille, avec un sous-titre court. Sur desktop (≥ 1024px), le headline et sous-titre occupent la colonne gauche et le ChatMockup la colonne droite.

#### Scenario: Headline visible desktop
- **WHEN** la section entre dans le viewport sur desktop
- **THEN** le headline "L'IA qui ne dort jamais." est affiché en Cormorant Garamond, clamp 2.5rem–4rem, weight 300, et occupe la moitié gauche

#### Scenario: Layout mobile
- **WHEN** la section est affichée sur mobile (< 1024px)
- **THEN** le headline est centré, pleine largeur, et le ChatMockup est masqué

### Requirement: ChatMockup — démo conversationnelle animée
La section SHALL afficher un composant `ChatMockup` qui simule une conversation entre un client et Keelio. Les messages SHALL apparaître séquentiellement avec un délai de 1.2s entre chaque. La séquence SHALL se répéter en boucle après un délai de 3s. Le composant SHALL respecter `prefers-reduced-motion` en affichant tous les messages statiquement si activé.

#### Scenario: Animation séquentielle
- **WHEN** le composant est monté et visible
- **THEN** les messages apparaissent un par un avec 1.2s de délai, simulant une conversation en temps réel

#### Scenario: Boucle infinie
- **WHEN** tous les messages ont été affichés
- **THEN** après 3 secondes, la séquence repart du début

#### Scenario: Reduced motion
- **WHEN** l'utilisateur a activé `prefers-reduced-motion`
- **THEN** tous les messages sont affichés immédiatement sans animation

#### Scenario: Contenu de la conversation
- **WHEN** le ChatMockup est rendu
- **THEN** il affiche au minimum : un message client entrant la nuit (ex. "Bonsoir, j'aurais besoin d'un devis"), une réponse Keelio en moins de 30s, un message de qualification, et un indicateur de transmission à l'équipe

### Requirement: Stats features compactes
Sous la zone headline + mockup, la section SHALL afficher les 4 features sous forme de blocs stat horizontaux (desktop) ou grille 2×2 (mobile) : chiffre clé mis en avant + label court + description une ligne.

#### Scenario: Affichage desktop
- **WHEN** la section est affichée sur desktop
- **THEN** les 4 stats sont disposées en 4 colonnes égales, séparées par des bordures verticales `1px solid var(--color-border)`

#### Scenario: Affichage mobile
- **WHEN** la section est affichée sur mobile
- **THEN** les 4 stats sont en grille 2×2
