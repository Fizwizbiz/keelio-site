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
