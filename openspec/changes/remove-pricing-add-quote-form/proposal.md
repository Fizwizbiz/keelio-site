## Why

La section Tarifs expose des prix fixes qui ne correspondent plus à la réalité commerciale — un devis personnalisé est plus adapté pour convaincre des TPE/PME. Par ailleurs, les références au déploiement technique dans le copy créent de la confusion pour un public non-technique.

## What Changes

- **Suppression** de la section Tarifs (cards de plans avec prix fixes)
- **Remplacement** par un appel à l'action vers le formulaire de contact pour demander un devis
- **Suppression** de toutes les références au déploiement (Vercel, Netlify, CI/CD) dans le copy visible sur le site
- **Mise à jour** du formulaire de contact pour accueillir explicitement les demandes de devis (label/copy adapté)
- **Mise à jour** de la FAQ : retirer les questions sur le prix fixe, ajouter une question sur le devis

## Capabilities

### New Capabilities
<!-- Aucune nouvelle capability — tout passe par des modifications de specs existantes -->

### Modified Capabilities
- `conversion-sections` : La section Tarifs est supprimée et remplacée par un bloc "Demander un devis" pointant vers le formulaire de contact. La FAQ est mise à jour (question sur le prix → question sur le devis).
- `lead-form` : Le formulaire intègre un champ "Type de demande" ou adapte son copy pour accueillir les demandes de devis en plus des prises de contact génériques.

## Impact

- `components/sections/Pricing.tsx` (ou équivalent) — à supprimer ou remplacer par un composant devis CTA
- `components/sections/FAQ.tsx` — mise à jour du contenu des questions
- `components/sections/Contact.tsx` (ou `LeadForm`) — mise à jour du copy et potentiellement un champ supplémentaire
- `app/page.tsx` — retirer l'import/usage de la section Tarifs, ajuster l'ordre des sections
- Copy visible : retirer toutes les mentions de "Vercel", "Netlify", "déploiement", "CI/CD"
