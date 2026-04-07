## ADDED Requirements

### Requirement: Angles arrondis cohérents sur tous les composants
Tous les cadres, cartes, inputs et composants UI SHALL utiliser des border-radius arrondis selon un système à deux niveaux : `rounded-2xl` (16px) pour les conteneurs larges, `rounded-lg` (8px) pour les éléments UI fins.

Système de border-radius :
- **Badges** : `rounded-full` — pill complet
- **Boutons** : `rounded-lg` (8px)
- **Cards / Pain points / Stats** : `rounded-2xl` (16px)
- **Mockup chat + frame** : `rounded-2xl`
- **Step cards HowItWorks** : `rounded-2xl`
- **Items accordéon FAQ** : `rounded-xl` (12px)
- **Inputs formulaire Contact** : `rounded-lg` (8px)
- **AudioPlayer** : `rounded-xl` (12px)

#### Scenario: Cards sans angles droits visibles
- **WHEN** l'utilisateur affiche la page
- **THEN** aucune card, cadre ou conteneur de contenu n'a d'angles à 90° — tous les éléments visuellement "flottants" ont au minimum `rounded-xl`

#### Scenario: Boutons et badges pill
- **WHEN** un bouton ou badge est rendu
- **THEN** le bouton utilise `rounded-lg` et le badge utilise `rounded-full`

#### Scenario: Inputs formulaire arrondis
- **WHEN** le formulaire Contact est affiché
- **THEN** tous les champs input et textarea ont `rounded-lg`

### Requirement: Cohérence des angles sur mobile
Le système de border-radius SHALL s'appliquer de manière identique sur mobile (375px) et desktop (1440px) — aucune règle responsive ne réduit les arrondis sur petits écrans.

#### Scenario: Arrondis identiques mobile et desktop
- **WHEN** la page est affichée à 375px de largeur
- **THEN** les border-radius des cards et boutons sont identiques à ceux du desktop
