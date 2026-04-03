## ADDED Requirements

### Requirement: Section Tarifs
Le site SHALL afficher 2 ou 3 plans tarifaires présentés dans des cards avec bordure `--color-border`. Un plan peut être mis en avant (highlighted) avec une bordure `--color-accent`. Chaque plan : nom, prix, liste de fonctionnalités incluses, CTA.

#### Scenario: Plan mis en avant
- **WHEN** un plan est marqué comme recommandé
- **THEN** sa card a une bordure accent et un badge "Recommandé" visible

#### Scenario: CTA de chaque plan
- **WHEN** l'utilisateur clique sur le CTA d'un plan
- **THEN** il est redirigé vers la section contact ou le formulaire de contact

#### Scenario: Responsive tarifs
- **WHEN** la section est affichée sur mobile
- **THEN** les plans sont empilés verticalement avec le plan recommandé en premier

#### Scenario: Pas de shadow agressive
- **WHEN** les cards de tarifs sont rendues
- **THEN** aucune `box-shadow` agressive n'est utilisée — uniquement `border: 1px solid var(--color-border)` (ou accent pour la card highlight)

### Requirement: Section FAQ en accordéon
Le site SHALL afficher 5 à 6 questions fréquentes dans un composant accordéon animé. Une seule question est ouverte à la fois. Les animations d'ouverture/fermeture sont fluides (Framer Motion, 0.3s).

#### Scenario: Ouverture d'une question
- **WHEN** l'utilisateur clique sur une question fermée
- **THEN** la réponse s'affiche avec une animation d'expansion smooth et la question précédemment ouverte se ferme

#### Scenario: Accessibilité accordéon
- **WHEN** l'utilisateur navigue au clavier
- **THEN** chaque item FAQ est accessible via Tab et activable via Espace/Entrée, avec aria-expanded mis à jour

#### Scenario: Questions pertinentes
- **WHEN** la section FAQ est rendue
- **THEN** au moins 5 questions couvrent : prix, délai de mise en place, engagement, fonctionnement technique, support

### Requirement: Bloc CTA Final
Le site SHALL afficher un bloc de conversion final avec un headline fort, un sous-titre court et un CTA primaire "Démarrer maintenant". Ce bloc SHALL avoir un fond légèrement différencié (gradient subtil ou fond `--color-surface`) pour marquer visuellement la fin de la page.

#### Scenario: Headline impactant
- **WHEN** le bloc CTA final est rendu
- **THEN** le headline est en Cormorant Garamond, grande taille, centré, avec un message de bénéfice concret

#### Scenario: Animation d'entrée
- **WHEN** le bloc entre dans le viewport
- **THEN** headline et CTA apparaissent en fade-up avec `whileInView` (`once: true`)
