# React App GIPHY API

## Prerequisites

- Node 12.15.0 required
- yarn (https://yarnpkg.com/lang/en/docs/install/)

## Install the projects dependencies

```bash
yarn
```

### Description
GIPHY is an animated GIF search engine. The GIPHY API is a series of JSON read endpoints that allow you to integrate the features of GIPHY's search engine into your project or app.
## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Run the tests

Run all the tests

```bash
yarn test
```

This will run all tests
### `yarn build`

Builds the app for production to the `build` folder.\

## Libraries & Features

### Libraries

- antd
- axios
- prop-types
- react-infinite-scroll-component

### Dev Dependencies

- dotenv
- enzyme
- eslint
- jest-fetch-mock
- prettier

### Features

- Application Contains the UI where user search the trending Gifs as well the gif based on the search.
- Provide the `infinite scroll` to handle the pagination and show data in the paginated form.
- Used the `antd` component library to show animation and details in modal as well it's very rich library contains many react component.
- Make the rest Api Calls using the `axios`
- For coding format and props handling used the `eslint`, `prop-type` and `prettier`
- Global handling of the Error
- `Enzyme` and `jest-fetch-mock` used to make the unit testing and api testing.


