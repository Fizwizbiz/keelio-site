## ADDED Requirements

### Requirement: Footer avec liens légaux et contact
Le site SHALL afficher un footer contenant : le logo Keelio, des liens vers les pages légales (Mentions légales, Politique de confidentialité), une adresse email de contact, et des liens vers les réseaux sociaux pertinents (LinkedIn minimum).

#### Scenario: Liens légaux présents
- **WHEN** le footer est rendu
- **THEN** les liens "Mentions légales" et "Politique de confidentialité" sont visibles et cliquables

#### Scenario: Email de contact
- **WHEN** l'utilisateur clique sur l'email de contact dans le footer
- **THEN** son client mail s'ouvre avec l'adresse pré-remplie (lien `mailto:`)

#### Scenario: Séparation visuelle
- **WHEN** le footer est rendu
- **THEN** une ligne `1px solid var(--color-border)` le sépare visuellement du contenu précédent

#### Scenario: Copyright
- **WHEN** le footer est rendu
- **THEN** un texte de copyright est affiché avec l'année courante et le nom Keelio

### Requirement: Responsive footer
Le footer SHALL s'adapter aux écrans mobiles : les colonnes se réorganisent en empilage vertical.

#### Scenario: Layout desktop footer
- **WHEN** le footer est affiché sur desktop (≥ 1024px)
- **THEN** le logo est à gauche et les liens sont organisés en colonnes à droite

#### Scenario: Layout mobile footer
- **WHEN** le footer est affiché sur mobile (< 768px)
- **THEN** tous les éléments sont centrés et empilés verticalement

## MODIFIED Requirements

### Requirement: Footer dark avec liens hover cyan
Le footer SHALL utiliser un fond dark (légèrement plus sombre que `--color-bg` ou identique), du texte muted bleuté, et des liens qui passent en `--color-accent` cyan au hover.

#### Scenario: Fond footer dark cohérent
- **WHEN** le footer est affiché
- **THEN** il utilise `--color-bg` ou une variante légèrement plus sombre, sans fond clair résiduel

#### Scenario: Liens footer hover cyan
- **WHEN** l'utilisateur survole un lien dans le footer
- **THEN** la couleur du lien passe de `--color-text-muted` à `--color-accent` (#00D4FF) avec une transition de 0.2s

#### Scenario: Logo Keelio visible sur fond dark
- **WHEN** le footer est affiché
- **THEN** le logo ou le nom Keelio est en `--color-text` (#F0F4F8) ou en version blanche, lisible sur fond dark
