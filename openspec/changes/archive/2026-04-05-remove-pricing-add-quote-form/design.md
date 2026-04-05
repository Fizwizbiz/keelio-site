## Context

Le site Keelio est une landing page Next.js 14 (App Router) sans backend propre — les leads passent par un webhook n8n via une API Route. La section Tarifs affiche actuellement 2–3 plans avec prix fixes. Le client souhaite passer à un modèle devis pour qualifier les leads plutôt que de publier des tarifs. Par ailleurs, certains textes du site mentionnent le déploiement technique (Vercel, CI/CD) — détails non pertinents pour la cible TPE/PME.

## Goals / Non-Goals

**Goals:**
- Supprimer la section Tarifs de la landing et du code
- Ajouter un composant "Demander un devis" qui dirige vers la section contact
- Mettre à jour le copy du formulaire de contact pour accueillir les demandes de devis
- Purger les références au déploiement (Vercel, Netlify, CI/CD) du copy visible
- Mettre à jour la FAQ (remplacer la question prix par une question devis)

**Non-Goals:**
- Créer un vrai système de devis en ligne
- Modifier la logique de soumission/API Route (le webhook n8n ne change pas)
- Changer la structure de routing ou de layout

## Decisions

**Suppression du composant Pricing vs. remplacement**
→ Supprimer le composant `Pricing.tsx` entièrement plutôt que de le vider. Un nouveau composant léger `QuoteCTA.tsx` (ou inline dans `page.tsx`) prend sa place avec un bloc centré : headline + sous-titre + un bouton qui scrolle vers `#contact`. Cela évite de conserver du code mort et reste cohérent avec l'architecture "une section = un composant".

**Champ "Type de demande" dans le formulaire**
→ Ne pas ajouter un champ supplémentaire. Mettre à jour le copy (titre de section, placeholder du champ "Message", texte du bouton) pour signaler explicitement que le formulaire sert aussi pour les devis. Cela évite de changer le schéma Zod et le payload envoyé à n8n, et garde le formulaire simple.

**Nettoyage des références déploiement**
→ Recherche textuelle dans tous les composants `.tsx` et pages pour identifier les occurrences de "Vercel", "Netlify", "déploiement", "CI/CD". Suppression ou remplacement par un copy neutre ou vide selon le contexte.

## Risks / Trade-offs

- [Perte du signal prix] Les visiteurs ne voient plus de fourchette tarifaire → Mitigation : la FAQ peut inclure une question "Quel est le coût ?" avec une réponse "devis personnalisé selon vos besoins"
- [Cohérence ancres nav] Si la nav a un lien "#tarifs", il doit être mis à jour → vérifier `Nav.tsx` et mettre à jour l'ancre vers `#contact` ou `#devis`
