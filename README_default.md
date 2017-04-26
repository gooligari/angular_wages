# Wages

Seed project for angular apps using ES6 and webpack bundler.

This project was tested with the latest version of nodeJS and npm, please make sure you have atleast  [node.js](https://nodejs.org/) 5+ and [NPM](https://www.npmjs.com/) 3+ installed.

## Usage & Develop

- Clone or fork this repository
- run `npm install` to install dependencies
- run `npm install auth0-js angular-lock angular-jwt` to install aut0 lock dependencies
- run `gulp serve` to fire up dev server
- open browser to [`http://localhost:3000`](http://localhost:3000)

After login refresh the page to open the dashboard (There was an issue in login authentication issue, will try to resolve as soon as possible).

## Build

to create a ready production distribution package of the project please run:

```
npm run build
```

after running build the generated files will be available at `/dist`

## Testing

This seed is has protractor and karma for end to end testing and unit testing respectively.

### Unit Testing

make sure your tests are named with a `-test.js` suffix then. to run karma simply run:

```
npm test
```

### End to end Testing

to start protractor tests please run:

```
npm run protractor
```
