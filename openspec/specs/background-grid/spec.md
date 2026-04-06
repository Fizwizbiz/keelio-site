## ADDED Requirements

### Requirement: Quadrillage CSS subtil en fond de page
Le site SHALL afficher un quadrillage de lignes fines en fond, coloré en cyan très transparent, pour renforcer l'esthétique tech du site.

#### Scenario: Quadrillage visible sur fond dark
- **WHEN** la page est affichée sur un écran calibré
- **THEN** un motif de grille (lignes horizontales et verticales, 40px × 40px) est perceptible en fond avec une opacité inférieure à 0.05

#### Scenario: Quadrillage non intrusif
- **WHEN** du texte ou un composant est affiché par-dessus le quadrillage
- **THEN** le quadrillage n'interfère pas avec la lisibilité du contenu (contraste texte/fond WCAG AA maintenu)
