## ADDED Requirements

### Requirement: Sections claires alternant avec les sections dark
Certaines sections SHALL utiliser un fond blanc cassé (`#F8FAFC`) avec du texte sombre, créant une alternance dark ↔ light sur la landing page. Les sections Features et HowItWorks sont les sections claires.

```css
--color-bg-light:        #F8FAFC;   /* Fond section claire */
--color-surface-light:   #FFFFFF;   /* Surface card sur fond clair */
--color-text-dark:       #0D1B2A;   /* Texte principal sur fond clair */
--color-text-dark-muted: #5A7A94;   /* Texte secondaire sur fond clair */
--color-border-light:    #E2EAF0;   /* Bordure sur fond clair */
```

#### Scenario: Alternance dark/light perceptible au scroll
- **WHEN** l'utilisateur scrolle la page de haut en bas
- **THEN** les sections Features et HowItWorks apparaissent en fond clair (`#F8FAFC`) nettement distinct des sections dark adjacentes

#### Scenario: Texte lisible sur fond clair
- **WHEN** du texte s'affiche dans une section light
- **THEN** les titres utilisent `--color-text-dark` (#0D1B2A) et les sous-titres `--color-text-dark-muted` (#5A7A94), tous deux WCAG AA sur `#F8FAFC`

#### Scenario: Accent cyan utilisable sur fond clair
- **WHEN** un élément d'accent (stat value, icône, badge) utilise `--color-accent` (#00D4FF) dans une section light
- **THEN** l'élément est visible et identifiable (usage décoratif, grandes valeurs — pas de texte courant cyan)

### Requirement: Composants internes adaptés au contexte clair
Les composants affichés dans une section light SHALL utiliser des couleurs adaptées — surfaces blanches, bordures légères, et ombres douces à la place des ombres deep dark.

#### Scenario: Cards en section light avec fond blanc
- **WHEN** une card apparaît dans une section light
- **THEN** son fond est `--color-surface-light` (#FFFFFF), sa bordure est `--color-border-light` (#E2EAF0)

#### Scenario: Hover adapté au fond clair
- **WHEN** l'utilisateur survole une card dans une section light
- **THEN** l'ombre du hover utilise `rgba(0,0,0,0.08)` (douce) à la place de `rgba(0,0,0,0.4)` (deep dark)

### Requirement: Le Chat Mockup reste dark dans la section Features light
Le composant ChatMockup dans Features SHALL conserver ses couleurs dark même lorsque la section parent est claire, afin de simuler fidèlement une interface mobile sombre.

#### Scenario: Mockup chat toujours dark
- **WHEN** la section Features est en fond clair
- **THEN** le ChatMockup conserve `bg-[var(--color-surface)]` et `bg-[var(--color-bg)]` pour ses bulles et son header
