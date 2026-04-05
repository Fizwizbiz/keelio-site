## 1. Nettoyage des références au déploiement

- [x] 1.1 Rechercher dans tous les `.tsx` les occurrences de "Vercel", "Netlify", "déploiement", "CI/CD", "deploy" et les supprimer ou remplacer par un copy neutre
- [x] 1.2 Vérifier `Nav.tsx` : si un lien d'ancre `#tarifs` existe, le remplacer par `#contact`

## 2. Suppression de la section Tarifs

- [x] 2.1 Supprimer le composant `Pricing.tsx` (ou équivalent) dans `components/sections/`
- [x] 2.2 Retirer l'import et l'usage de `<Pricing />` dans `app/page.tsx`

## 3. Création du bloc "Demander un devis"

- [x] 3.1 Créer `components/sections/QuoteCTA.tsx` : headline (Cormorant Garamond), sous-titre, bouton CTA "Demander un devis" avec scroll smooth vers `#contact`
- [x] 3.2 Intégrer `<QuoteCTA />` dans `app/page.tsx` à la place de `<Pricing />` (même position dans l'ordre des sections)
- [x] 3.3 Appliquer animations `whileInView` (`once: true`, fade-up) et vérifier le rendu mobile 375px

## 4. Mise à jour du formulaire de contact

- [x] 4.1 Mettre à jour le titre de la section contact (ex. "Demander un devis" ou "Parlons de votre projet")
- [x] 4.2 Mettre à jour le placeholder du champ message (ex. "Décrivez votre activité et ce que vous cherchez à automatiser...")
- [x] 4.3 Vérifier que le schéma Zod et le payload envoyé à n8n ne changent pas

## 5. Mise à jour de la FAQ

- [x] 5.1 Remplacer la question sur le prix fixe par une question "Quel est le tarif ?" avec réponse orientée devis personnalisé
- [x] 5.2 Vérifier que la FAQ comporte bien 5 questions couvrant : délai de mise en place, engagement, fonctionnement technique, support, tarification

## 6. Tests Playwright

- [x] 6.1 Vérifier l'absence de la section Tarifs sur desktop 1440px, tablette 768px, mobile 375px
- [x] 6.2 Vérifier que le CTA "Demander un devis" scrolle bien vers `#contact`
- [x] 6.3 Vérifier le formulaire de contact : nouveau copy visible, validation toujours fonctionnelle
- [x] 6.4 Vérifier la FAQ : accordéon fonctionnel, 5 questions présentes dont une sur le devis
