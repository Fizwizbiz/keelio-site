## MODIFIED Requirements

### Requirement: Palette dark midnight avec accents cyan
Le site SHALL utiliser une palette dark navy/midnight comme fond principal avec des accents cyan vifs. La palette est ajustée pour un bleu plus présent et un contraste de surface plus marqué.

```css
--color-bg:           #0B1629;   /* Bleu profond — fond principal */
--color-surface:      #112240;   /* Bleu marine — surface élevée */
--color-border:       #1A3050;   /* Bordure bleue subtile */
--color-accent:       #00D4FF;   /* Cyan vif — inchangé */
--color-accent-muted: #0099CC;   /* Cyan atténué — inchangé */
--color-text:         #E8F4F8;   /* Blanc légèrement bleuté */
--color-text-muted:   #7A9BB5;   /* Bleu-gris */
```

#### Scenario: Fond perceptiblement bleu et distinct du noir pur
- **WHEN** un utilisateur affiche la page sur un écran calibré
- **THEN** le fond est perçu comme un bleu profond (non noir pur), clairement bleu plutôt que gris anthracite

#### Scenario: Contraste de surface perceptible entre sections
- **WHEN** deux sections adjacentes utilisent `--color-bg` et `--color-surface`
- **THEN** la différence de teinte est clairement visible à l'œil nu sans loupe

#### Scenario: Conformité WCAG AA sur palette bleue
- **WHEN** le texte principal `--color-text` (#E8F4F8) s'affiche sur `--color-bg` (#0B1629)
- **THEN** le ratio de contraste est supérieur à 4.5:1

### Requirement: Alternance visuelle correcte des sections
Les sections de la landing page SHALL alterner entre `--color-bg` et `--color-surface` de façon à ce qu'aucune section de même couleur ne soit adjacente à une autre.

#### Scenario: Sections adjacentes toujours de couleurs différentes
- **WHEN** l'utilisateur scrolle la page
- **THEN** chaque section a visuellement un fond différent de la section précédente et suivante
