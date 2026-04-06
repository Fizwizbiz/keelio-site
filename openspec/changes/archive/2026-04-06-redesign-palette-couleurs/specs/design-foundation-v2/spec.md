## ADDED Requirements

### Requirement: Palette relevée non-noire
Le site SHALL utiliser une palette dont le fond principal n'est pas inférieur à `#141414` pour éviter un rendu trop sombre et oppressant tout en conservant l'esthétique premium dark.

#### Scenario: Fond perceptiblement distinct du noir pur
- **WHEN** un utilisateur affiche la page sur un écran calibré
- **THEN** le fond est perçu comme un gris anthracite chaud (non noir pur), avec une différence perceptible entre `--color-bg` et `--color-surface`

#### Scenario: Conformité WCAG sur nouvelle palette
- **WHEN** le texte principal `--color-text` (#F0EBE1) s'affiche sur `--color-bg` (#141414)
- **THEN** le ratio de contraste est supérieur à 4.5:1 (WCAG AA)

### Requirement: Cohérence palette dans CLAUDE.md
La documentation de la palette dans `CLAUDE.md` SHALL être mise à jour pour refléter les nouvelles valeurs CSS afin que les futures sessions de génération de code utilisent les bonnes couleurs.

#### Scenario: Nouvelle palette documentée
- **WHEN** Claude lit CLAUDE.md pour générer du code
- **THEN** les valeurs de couleur référencées correspondent aux variables CSS actives dans globals.css
