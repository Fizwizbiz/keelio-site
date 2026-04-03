## ADDED Requirements

### Requirement: Lecteur audio custom pour la démo conversation
La section Features SHALL afficher un composant `AudioPlayer` sous le bloc headline+ChatMockup. Ce composant SHALL lire le fichier `public/demo-conversation.mp3`. Il SHALL afficher un bouton play/pause, une barre de progression cliquable, le temps écoulé et la durée totale. Le style SHALL être cohérent avec le design system Keelio.

#### Scenario: Lecture / pause
- **WHEN** l'utilisateur clique sur le bouton play
- **THEN** la lecture démarre et le bouton affiche l'icône pause

#### Scenario: Barre de progression
- **WHEN** l'audio est en lecture
- **THEN** la barre de progression avance en temps réel et affiche le temps écoulé / durée totale

#### Scenario: Seek
- **WHEN** l'utilisateur clique sur un point de la barre de progression
- **THEN** la lecture reprend depuis ce point

#### Scenario: Fin de lecture
- **WHEN** l'audio arrive à la fin
- **THEN** le bouton repasse en état play et la progression revient à zéro

#### Scenario: Fichier absent
- **WHEN** `demo-conversation.mp3` n'est pas disponible
- **THEN** le lecteur s'affiche en état désactivé avec le texte "Enregistrement à venir"
