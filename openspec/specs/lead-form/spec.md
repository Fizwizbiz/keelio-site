## ADDED Requirements

### Requirement: Formulaire de capture de leads
Le site SHALL afficher un formulaire de contact avec les champs : Prénom + Nom (requis), Email professionnel (requis, format validé), Téléphone (optionnel), Message ou "Décrivez votre besoin" (optionnel). La validation côté client utilise React Hook Form + Zod.

#### Scenario: Validation en temps réel
- **WHEN** l'utilisateur quitte un champ requis vide
- **THEN** un message d'erreur inline s'affiche sous le champ (ex. : "L'email est requis")

#### Scenario: Validation format email
- **WHEN** l'utilisateur saisit un email invalide
- **THEN** le message "Format d'email invalide" s'affiche avant la soumission

#### Scenario: Soumission bloquée si invalide
- **WHEN** l'utilisateur clique "Envoyer" avec des champs invalides
- **THEN** le formulaire ne se soumet pas et les erreurs sont toutes affichées

### Requirement: Soumission sécurisée vers n8n
Le formulaire SHALL soumettre les données vers une API Route Next.js (`/api/contact`) qui relaie vers le webhook n8n. L'URL du webhook est stockée dans la variable d'environnement serveur `N8N_WEBHOOK_URL` et n'est jamais exposée côté client.

#### Scenario: Soumission réussie
- **WHEN** l'utilisateur soumet un formulaire valide
- **THEN** l'API Route reçoit les données, les relaie au webhook n8n, et renvoie un statut 200

#### Scenario: URL webhook jamais exposée
- **WHEN** le code côté client est inspecté (bundle JS)
- **THEN** l'URL `N8N_WEBHOOK_URL` n'apparaît pas dans le bundle

#### Scenario: Erreur webhook n8n
- **WHEN** le webhook n8n est indisponible ou renvoie une erreur
- **THEN** l'API Route renvoie un statut 500 et le formulaire affiche un message d'erreur utilisateur friendly

### Requirement: États du formulaire après soumission
Le formulaire SHALL afficher des états visuels distincts pendant et après la soumission : état "loading" (bouton désactivé avec spinner), état "succès" (message de confirmation, formulaire masqué), état "erreur" (message d'erreur, formulaire réactivé).

#### Scenario: État loading
- **WHEN** la soumission est en cours
- **THEN** le bouton "Envoyer" est désactivé et affiche un indicateur de chargement

#### Scenario: État succès
- **WHEN** la soumission réussit
- **THEN** le formulaire est remplacé par un message de confirmation (ex. : "Merci ! Nous vous recontacterons dans les 24h.")

#### Scenario: État erreur réseau
- **WHEN** une erreur réseau ou serveur survient
- **THEN** un message d'erreur s'affiche au-dessus du formulaire et le bouton redevient actif

### Requirement: Accessibilité du formulaire
Tous les champs SHALL avoir des labels explicites associés via `htmlFor`/`id`. Les erreurs de validation SHALL être annoncées aux lecteurs d'écran via `aria-describedby` ou `role="alert"`.

#### Scenario: Association label-input
- **WHEN** un lecteur d'écran lit le formulaire
- **THEN** chaque input est annoncé avec son label correspondant

#### Scenario: Erreurs annoncées
- **WHEN** une erreur de validation apparaît
- **THEN** elle est annoncée automatiquement par le lecteur d'écran via `role="alert"`
