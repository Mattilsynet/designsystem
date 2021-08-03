# design-system-mattilsynet
The designsystem for Mattilsynet


## SCSS
Basert på Design System fra workshop “Level Up with Modern CSS” med Stephanie Eckles  [@5t3ph](https://twitter.com/5t3ph) - author of [ModernCSS.dev](https://moderncss.dev), [SmolCSS.dev](https://smolcss.dev), and [StyleStage.dev](https://stylestage.dev) 

### Nanvgivning
BEM "light"???
- ikke bruk modifiers som kan uttrykkes med normal universelt utformet html og css

### Struktur
- components - styling for komponenter
- global - global styling. Bla. lenker og typografi
- utilites - nytte funksjonalite. Bla. layout og farger 

Bruk SASS Partials
- _index.scss i hver folder ``@forward`` andre partials i samme folder
- foldere inkluderes med ``@use`` i app.scss

 
### Farger
Farger er listet opp i src/scss/utilites/colors.js

[a11y-color-tokens](https://www.npmjs.com/package/a11y-color-tokens) pakken generer universelt utformede komplimenær farger til _color_tokens.scss
