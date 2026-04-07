## 1. Variables CSS root + effets globaux

- [x] 1.1 Dans `app/globals.css`, remplacer les 7 variables root : `--color-bg: #F5F0E6`, `--color-surface: #EDE7D9`, `--color-border: #D4C9B0`, `--color-accent: #6B4F2E`, `--color-accent-muted: #9B7B52`, `--color-text: #1C1917`, `--color-text-muted: #6B6050`
- [x] 1.2 Dans `globals.css`, adapter `section-aura::before` : remplacer `rgba(232, 224, 208, 0.18)` → `rgba(107, 79, 46, 0.07)` et `rgba(232, 224, 208, 0.06)` → `rgba(107, 79, 46, 0.03)`
- [x] 1.3 Dans `globals.css`, adapter le `SectionDivider` : `rgba(232, 224, 208, 0.22)` → `rgba(107, 79, 46, 0.15)` (deux occurrences)
- [x] 1.4 Dans `globals.css`, supprimer ou commenter le `text-shadow` de `h1, h2` (le glow ne fonctionne pas sur fond clair)

## 2. Composants — rgba hardcodés

- [x] 2.1 Dans `components/sections/Nav.tsx`, remplacer `rgba(17,17,17,0.85)` → `rgba(245,240,230,0.90)` (backdrop header scrolled) et `rgba(17,17,17,0.97)` → `rgba(245,240,230,0.98)` (menu mobile)
- [x] 2.2 Dans `components/sections/Hero.tsx`, remplacer toutes les occurrences `rgba(232,224,208,X)` → `rgba(107,79,46,X)` dans les SVG strokes et les gradients
- [x] 2.3 Dans `components/sections/Features.tsx`, remplacer `rgba(232,224,208,0.12)` → `rgba(107,79,46,0.10)`, `rgba(232,224,208,0.1)` → `rgba(107,79,46,0.08)`, `rgba(232,224,208,0.15)` → `rgba(107,79,46,0.12)`, `rgba(255,255,255,0.04)` → `rgba(107,79,46,0.05)`, `rgba(232,224,208,0.08)` → `rgba(107,79,46,0.06)`
- [x] 2.4 Dans `components/ui/Badge.tsx`, remplacer `rgba(232,224,208,0.07)` → `rgba(107,79,46,0.08)` et `rgba(232,224,208,0.22)` → `rgba(107,79,46,0.20)`
- [x] 2.5 Dans `components/ui/Button.tsx`, remplacer `rgba(232,224,208,0.2)` → `rgba(107,79,46,0.25)` (hover shadow) et `rgba(232,224,208,0.04)` → `rgba(107,79,46,0.06)` (ghost hover bg)
- [x] 2.6 Dans `components/ui/AudioPlayer.tsx`, remplacer `rgba(232,224,208,0.06)` → `rgba(107,79,46,0.08)`

## 3. Documentation

- [x] 3.1 Dans `CLAUDE.md`, mettre à jour la section "Palette de couleurs" avec les nouvelles valeurs light et la note explicative

## 4. Tests visuels Playwright

- [x] 4.1 Lancer le serveur de dev et prendre des screenshots aux 3 breakpoints (375px, 768px, 1440px)
- [x] 4.2 Vérifier visuellement : fond crème visible, texte lisible, boutons contrastés, nav opaque au scroll, Hero SVG subtil
