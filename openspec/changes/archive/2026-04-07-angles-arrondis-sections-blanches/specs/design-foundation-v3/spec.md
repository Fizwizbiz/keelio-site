## ADDED Requirements

### Requirement: Tokens CSS pour le mode section clair
La palette CSS SHALL inclure des tokens dédiés aux sections à fond clair, permettant une adaptation complète sans hardcode de couleurs dans les composants.

```css
--color-bg-light:        #F8FAFC;
--color-surface-light:   #FFFFFF;
--color-text-dark:       #0D1B2A;
--color-text-dark-muted: #5A7A94;
--color-border-light:    #E2EAF0;
```

#### Scenario: Tokens light disponibles dans tous les composants
- **WHEN** un composant est rendu dans une section light
- **THEN** il peut utiliser `var(--color-text-dark)` et `var(--color-border-light)` sans hardcoder de valeur hex

#### Scenario: Contraste WCAG AA des tokens light
- **WHEN** `--color-text-dark` (#0D1B2A) s'affiche sur `--color-bg-light` (#F8FAFC)
- **THEN** le ratio de contraste est supérieur à 4.5:1 (WCAG AA)
