## ADDED Requirements

### Requirement: Séparation visuelle des sections
Le site SHALL différencier visuellement les sections adjacentes par une combinaison de trois mécanismes : alternance de fonds (bg / surface), gradient aura sur les sections clés, et séparateurs horizontaux dégradés. Aucune nouvelle couleur n'est introduite — seuls les tokens existants sont utilisés à des opacités variées.

#### Scenario: Alternance de fond perceptible
- **WHEN** le visiteur fait défiler la page
- **THEN** les sections Problem, HowItWorks et FAQ affichent `background-color: var(--color-surface)` (#111111), tandis que SocialProof et Features restent sur `var(--color-bg)` (#0A0A0A)

#### Scenario: Aura gradient sur sections clés
- **WHEN** les sections Hero, QuoteCTA et CTAFinal sont rendues
- **THEN** chacune affiche un radial-gradient centré en haut avec `--color-accent` à ≤ 6% d'opacité, via un pseudo-élément `::before` positionné en absolu sur toute la surface de la section

#### Scenario: Grain de texture sur l'aura
- **WHEN** le pseudo-élément aura est rendu sur un navigateur supportant les filtres SVG
- **THEN** un filtre feTurbulence SVG (opacité ≤ 8%) s'applique pour ajouter de la texture et éviter l'aspect "flat gradient"

#### Scenario: Séparateurs dégradés entre sections
- **WHEN** deux sections se succèdent dans le flux de la page
- **THEN** le séparateur horizontal est un `div` de 1px dont le fond est `linear-gradient(to right, transparent, var(--color-border), transparent)` — visible au centre, s'effaçant sur les bords

#### Scenario: Pas de dégradation du contraste WCAG
- **WHEN** les effets de fond (aura, alternance) sont appliqués
- **THEN** tous les textes maintiennent un ratio de contraste ≥ 4.5:1 sur leur fond effectif (l'aura à 4–6% d'opacité ne modifie pas significativement la luminosité de fond)
