## 1. Mise à jour de la palette CSS

- [x] 1.1 Dans `app/globals.css`, remplacer les 7 variables CSS root par la nouvelle palette (`--color-bg: #141414`, `--color-surface: #1E1E1E`, `--color-border: #2E2E2E`, `--color-accent: #D4C5A9`, `--color-accent-muted: #8F8270`, `--color-text: #F0EBE1`, `--color-text-muted: #7A7570`)
- [x] 1.2 Vérifier via grep que les anciennes valeurs hex hardcodées (`#0A0A0A`, `#1E1B17`, `#F5F0E8`, `#E8E0D0`, etc.) n'apparaissent plus dans les fichiers `.tsx` et `.css` — remplacer par les variables si trouvées

## 2. Suppression de CTAFinal

- [x] 2.1 Supprimer `components/sections/CTAFinal.tsx`
- [x] 2.2 Dans `app/page.tsx`, retirer l'import de `CTAFinal` et le composant `<CTAFinal />`

## 3. Mise à jour de la documentation

- [x] 3.1 Dans `CLAUDE.md`, mettre à jour la section "Palette de couleurs" avec les nouvelles valeurs

## 4. Tests visuels Playwright

- [x] 4.1 Lancer le serveur de dev et prendre des screenshots Playwright aux 3 breakpoints (375px, 768px, 1440px) pour vérifier le rendu de la nouvelle palette
- [x] 4.2 Vérifier visuellement que les contrastes texte/fond sont satisfaisants sur chaque section
