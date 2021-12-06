# Property List App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## About

This project is to display the UI of a property list app. There are two lists of property, one is the Results property list and one is the Saved property list. Hovering over the card on the Results list will see an Add Property button showing up, clicking this button will add this property into the Saved property list. Hovering over the card on the Saved list will see a Remove Property button showing up, clicking this button will remove this property from the Saved property list.

## Getting Started

### Installing version and dependency management tools

- Install `nvm`. [Instructions here](https://jamesauble.medium.com/install-nvm-on-mac-with-brew-adb921fb92cc)
- we are using the dependency management tool, `yarn`. To install, use `brew install yarn`. To check the version, `yarn -v`.
- Recommended IDE: Visual Studio Code.

### Running App

```shell
$ yarn start # Runs the app in the development mode.

```

- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
- The page will reload if you make edits. You will also see any lint errors in the console.

### Running Tests

```shell
$ yarn test # Launches the test runner in the interactive watch mode.

```

## Published Web Page

This app has been deployed and published to github pages.
To see it, simply access this website [https://chunchun-dan.github.io/property-list-app/](https://chunchun-dan.github.io/property-list-app/)

## UX Misalignments

- Make the Add Property button disabled when it is clicked
- Make the Add Property button disabled when there has been a same result property added on the Saved list
- Mobile View is not implemented
