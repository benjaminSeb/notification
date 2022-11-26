# Contexte

Application web permettant de configurer des notifications.

# Technos

- ViteJs (install steps' via ce [lien](https://www.section.io/engineering-education/creating-a-react-app-using-vite/))
- ReactJS
- Typescript

# Documentation

Tous est dans le dossier doc.
Il contient également un dossier adr contenant les décisions d'architectures. [Pour en savoir plus](https://adr.github.io/).

# Commandes

## Installation

`npm i`

## Run Dev

`npm run dev`

## Run Build

`npm run build`

# ToDo List (Axes d'amélioration)

- [ ] Responsive -> breakpoints/media queries
- [x] Equivalent Design System -> dossier `design-system`
- [ ] Gestion d'erreur
- [x] Changelog/Release Notes -> fichier `CHANGELOG.md`
- [x] ADR (Architectural Decision Record) -> dossier `./doc/adr`
- [ ] Firebase pour la sauvegarde des notifs
- [ ] Formik pour la gestion du formulaire de config de notif
- [x] ViteJS
- [ ] React Style-guidist -> Pour remplacer le design-system "à la mano"
- [ ] Test (Jest, Karma, Cypress)
- [ ] i18n
- [x] Dossier `src` remplacé par un alias pour simplifier les imports 