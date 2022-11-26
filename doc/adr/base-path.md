# Define a base path

## Status

Accepted

## Context

Dans une application, on peut facilement se retrouver avec beaucoup d'imports qui proviennent d'emplacements éloignés du fichier courant.
Ce qui implique, si rien n'est fait, d'avoir des imports contennt beaucoup de changement de dossier (`../../..`).

## Decision

On préfère ne pas efffectuer ces changements de dossier pour revenir à la racine du projet.
À savoir, le dossier src, contenant tous ce dont nous avons besoin aujourd'hui.

## Consequences

Comme nous sommes sur une application React + Vite + TS, il faut suivre [ces étapes](https://dev.to/avxkim/setup-path-aliases-w-react-vite-ts-poa).