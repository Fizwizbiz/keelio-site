## 1. Tokens CSS et utilitaires

- [x] 1.1 Ajouter dans `app/globals.css` les tokens : `--color-bg-light: #F8FAFC`, `--color-surface-light: #FFFFFF`, `--color-text-dark: #0D1B2A`, `--color-text-dark-muted: #5A7A94`, `--color-border-light: #E2EAF0`
- [x] 1.2 Ajouter dans `@layer utilities` la classe `.section-light { background-color: var(--color-bg-light); }`

## 2. Composants UI — angles arrondis

- [x] 2.1 `components/ui/Badge.tsx` : remplacer les classes de bordure par `rounded-full`
- [x] 2.2 `components/ui/Button.tsx` : ajouter `rounded-lg` sur les variantes primary et ghost
- [x] 2.3 `components/ui/AudioPlayer.tsx` : ajouter `rounded-xl` sur le conteneur principal

## 3. Section Features — light + arrondis

- [x] 3.1 `components/sections/Features.tsx` : changer la section de `section-surface` à `section-light`
- [x] 3.2 Mettre à jour les titres h2 et textes de la section Features pour utiliser `text-[var(--color-text-dark)]` et `text-[var(--color-text-dark-muted)]`
- [x] 3.3 Les stats cards : passer le grid container à `bg-[var(--color-surface-light)] border-[var(--color-border-light)]`, chaque stat card à `rounded-2xl`, textes adaptés au fond clair
- [x] 3.4 Le `whileHover` des stat cards : ajuster le `box-shadow` final à `0 0 0 1px rgba(0,212,255,0.35), 0 0 16px rgba(0,212,255,0.15), 0 8px 24px rgba(0,0,0,0.08)`
- [x] 3.5 Le ChatMockup frame : ajouter `rounded-2xl` sur le conteneur, conserver les couleurs dark internes (ne pas changer)
- [x] 3.6 Badge "La solution" dans Features : s'assurer qu'il reste lisible sur fond clair (cyan sur `#F8FAFC` est acceptable pour un badge décoratif)

## 4. Section HowItWorks — light + arrondis

- [x] 4.1 `components/sections/HowItWorks.tsx` : changer la section de `bg-[var(--color-bg)]` à `section-light`
- [x] 4.2 Mettre à jour les titres h2 et textes de HowItWorks pour utiliser `text-[var(--color-text-dark)]` et `text-[var(--color-text-dark-muted)]`
- [x] 4.3 Step cards : fond `bg-[var(--color-surface-light)]`, bordure `border-[var(--color-border-light)]`, ajouter `rounded-2xl`, textes adaptés
- [x] 4.4 Le `whileHover` des step cards : ajuster le `box-shadow` à la version light (`rgba(0,0,0,0.08)`)
- [x] 4.5 Numéros d'étapes et icônes : vérifier la visibilité sur fond clair (accent cyan acceptable pour éléments décoratifs)

## 5. Autres sections — angles arrondis uniquement

- [x] 5.1 `components/sections/Problem.tsx` : ajouter `rounded-2xl` sur les pain point cards (section reste dark surface)
- [x] 5.2 `components/sections/FAQ.tsx` : ajouter `rounded-xl` sur chaque item de l'accordéon (`components/ui/Accordion.tsx`)
- [x] 5.3 `components/sections/Contact.tsx` : ajouter `rounded-lg` sur les inputs et textarea, `rounded-2xl` sur le conteneur de formulaire si présent

## 6. Validation

- [x] 6.1 Vérifier visuellement l'alternance dark/light (Hero dark → Features light → SocialProof dark → Problem dark → HowItWorks light → QuoteCTA dark → FAQ dark → Contact dark)
- [x] 6.2 Vérifier que le ChatMockup est bien dark dans la section Features light
- [x] 6.3 Tester desktop 1440px + mobile 375px avec Playwright, captures d'écran pour validation
