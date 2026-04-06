## ADDED Requirements

### Requirement: Palette dark midnight avec accents cyan
Le site SHALL utiliser une palette dark navy/midnight comme fond principal avec des accents cyan vifs, remplaçant complètement la palette beige crème actuelle.

```css
--color-bg:           #0A0E1A;
--color-surface:      #111827;
--color-border:       #1E2A3A;
--color-accent:       #00D4FF;
--color-accent-muted: #0099CC;
--color-text:         #F0F4F8;
--color-text-muted:   #8899AA;
```

#### Scenario: Fond perceptiblement dark et distinct du noir pur
- **WHEN** un utilisateur affiche la page sur un écran calibré
- **THEN** le fond est perçu comme un midnight navy profond (non noir pur), avec une différence visible entre `--color-bg` et `--color-surface`

#### Scenario: Conformité WCAG AA sur palette dark
- **WHEN** le texte principal `--color-text` (#F0F4F8) s'affiche sur `--color-bg` (#0A0E1A)
- **THEN** le ratio de contraste est supérieur à 4.5:1

#### Scenario: Accent cyan visible sur fond dark
- **WHEN** un élément d'accent (CTA, lien, icône) utilise `--color-accent` (#00D4FF) sur fond dark
- **THEN** l'élément est clairement identifiable et attire l'attention

### Requirement: Typographie moderne sans-serif Poppins + Inter
Le site SHALL utiliser Poppins pour les titres display et Inter pour le corps de texte, importés depuis Google Fonts.

#### Scenario: Titres en Poppins
- **WHEN** un titre H1 ou H2 est rendu
- **THEN** la police utilisée est Poppins, weight 600 ou 700, avec letter-spacing légèrement négatif

#### Scenario: Corps de texte en Inter
- **WHEN** du texte de paragraphe ou d'UI est rendu
- **THEN** la police utilisée est Inter, weight 400 ou 500, avec line-height 1.6-1.7

### Requirement: Glow cyan sur éléments interactifs
Les éléments interactifs primaires (CTA, boutons, liens hover) SHALL afficher un effet glow cyan au hover pour renforcer l'esthétique tech.

#### Scenario: Glow sur CTA primaire au hover
- **WHEN** l'utilisateur survole le bouton CTA primaire
- **THEN** un `box-shadow: 0 0 20px rgba(0, 212, 255, 0.3)` apparaît avec une transition douce de 0.3s

### Requirement: Documentation palette dans CLAUDE.md synchronisée
La documentation de la palette dans `CLAUDE.md` SHALL être mise à jour avec les nouvelles valeurs CSS dark + cyan pour que les futures sessions de génération de code utilisent les bonnes couleurs.

#### Scenario: Palette dark documentée dans CLAUDE.md
- **WHEN** Claude lit CLAUDE.md pour générer du code
- **THEN** les valeurs de couleur référencées correspondent aux variables CSS actives dans globals.css (palette dark midnight/cyan)
