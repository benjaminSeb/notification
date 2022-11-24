# Design System format

## Status

Accepted

## Context

Comment et où établir un équivalent Design System pour ce petit projet ?

## Decision

Dommage, pas le temps d'utiliser [react-styleguidist](https://react-styleguidist.js.org/) !
Dossier design-system à la racine des src.
Il contiendra l'ensemble des composant pré-configuré pour correspondre à notre application et pour uniformiser le style.

## Consequences

- Le dossier App sera simplifié pour ne contenir que l'architecture UI de l'appli (que des composant "englobants")
- Les "dumb" composants iront dans le design system (composants ne contenant que de l'ui, aucune règle de gestion)
- En l'état, pas trop possible de tester les composants sans les placer dans l'application complète (on a pas un vrai DS, on allait pas quand même en avoir les bénèf)
- Possibilité d'avoir une page à part affichant juste l'ensemble des compo du DS pour voir ce qu'il donne sans être intégré dans l'appli complète.