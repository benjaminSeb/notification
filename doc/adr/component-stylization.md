# Choose component stylization

## Status

Accepted

## Context

Etant donné le choix de mui (React Material UI), plusieurs possibilités :
- CSS de base séparé du composant
- CSS directement intégré dans une balise html prévue (ex. : sx, style, ..) -> Certainement pas !
- styled-components -> visiblement [pas glop pour le SSR](https://mui.com/material-ui/guides/styled-engine/#how-to-switch-to-styled-components) 
- emotion (proposé en premier choix par MUI)

## Decision

*Emotion*

Avoir le css à côté, je suis moyen pour : avec beaucoup de compo on se retrouve à devoir faire des dossiers pour chaque composants, qui conteindront juste le compo (script/template) et son style. Et je trouve ça dommage.
Du coup, styled-components.
Sauf que, visiblement il y a un blocage pour faire du SSR avec la lib styled-components.
Et comme Emotion est très proche, mais sans ce blocage (qu'on aura jamais sur cette petite appli), autant pas se priver.
Les bénèf sans les problèmes, on aime !

## Consequences

On va pouvoir garder ensemble script, template et style dans un même fichier pour chaque composant. Dans l'idée de web component ultra réutilisable.
Pour pas que ça devienne unmaintenable, il faut se forcer à avoir les plus petit composant possible.
Ce qui oblige aussi à tendre vers la bonne pratique du plus petit fichier, mais aussi d'une arbo de site ultra découpée, ce qui aide à l'inspection UI.
Mais du coup, ça offre aussi un peu plus la possibilités d'externaliser les "dumb" composant dans une partie design-system.