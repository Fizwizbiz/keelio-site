## Why

Keelio a besoin d'un site vitrine pour convertir des TPE/PME françaises en clients. Il n'existe pas encore de site — ce changement construit la landing page complète from scratch, prête à déployer sur Vercel.

## What Changes

- Création du projet Next.js 14 (App Router, TypeScript, Tailwind CSS)
- Mise en place du système de design (tokens, typographie, composants UI atomiques)
- Construction de toutes les sections de la landing page dans l'ordre défini
- Intégration d'un formulaire de capture de leads via webhook n8n (côté serveur)
- Configuration du déploiement Vercel

## Capabilities

### New Capabilities

- `design-foundation`: Système de design complet — tokens CSS (couleurs, espacement), typographie (Cormorant Garamond + DM Sans), composants UI atomiques (Button, Badge, Card), layout global et configuration Tailwind
- `landing-hero`: Navigation sticky (logo, liens ancres, CTA) et section Hero (headline, sous-titre, double CTA, visual ambiancé avec animations Framer Motion au chargement)
- `value-sections`: Sections intermédiaires — Social proof (logos clients), Problème (douleurs sans Keelio), Solution/Features (grid asymétrique), Comment ça marche (3 étapes)
- `conversion-sections`: Sections de conversion — Tarifs (2–3 plans), FAQ (accordéon), CTA final (bloc de conversion fort)
- `footer`: Footer avec liens légaux, contact et réseaux sociaux
- `lead-form`: Formulaire de contact (React Hook Form + Zod) avec soumission vers webhook n8n via API route Next.js sécurisée

### Modified Capabilities

## Impact

- Création de l'intégralité du projet à partir de zéro dans `/app`, `/components`, `/lib`, `/public`
- Dépendances : Next.js 14, React 18, TypeScript 5, Tailwind CSS 3, Framer Motion 11, React Hook Form 7, Zod 3
- Variable d'environnement requise : `N8N_WEBHOOK_URL` (côté serveur uniquement)
- Aucun breaking change — nouveau projet
