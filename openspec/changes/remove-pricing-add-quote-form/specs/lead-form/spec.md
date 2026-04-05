## MODIFIED Requirements

### Requirement: Formulaire de capture de leads
Le site SHALL afficher un formulaire de contact avec les champs : Prénom + Nom (requis), Email professionnel (requis, format validé), Téléphone (optionnel), Message ou "Décrivez votre projet / besoin" (optionnel). Le titre de la section SHALL être "Demander un devis" (ou "Parlons de votre projet"). La validation côté client utilise React Hook Form + Zod.

#### Scenario: Validation en temps réel
- **WHEN** l'utilisateur quitte un champ requis vide
- **THEN** un message d'erreur inline s'affiche sous le champ (ex. : "L'email est requis")

#### Scenario: Validation format email
- **WHEN** l'utilisateur saisit un email invalide
- **THEN** le message "Format d'email invalide" s'affiche avant la soumission

#### Scenario: Soumission bloquée si invalide
- **WHEN** l'utilisateur clique "Envoyer" avec des champs invalides
- **THEN** le formulaire ne se soumet pas et les erreurs sont toutes affichées

#### Scenario: Copy orienté devis
- **WHEN** la section contact est rendue
- **THEN** le titre de section, le sous-titre et le placeholder du champ message reflètent qu'il s'agit d'une demande de devis ou de prise de contact pour un projet (ex. placeholder : "Décrivez votre activité et ce que vous cherchez à automatiser...")
