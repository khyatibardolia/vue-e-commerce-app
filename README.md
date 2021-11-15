# js_challenge_khyati-bardolia

As a main goal I\'ve build a simple e-commerce application using the assets provided and added some of my own.

## Technologies:

* NuxtJS
* VueJS
* TypeScript
* Eslint
* SCSS
* Stylelint
* Axios
* Jest for Unit tests
* Cypress for e2e tests

## Project setup with terminal
### Note that all commands should be run in the root project folder.


```
// Clone project from Git
HTTPS: https://github.com/khyatibardolia/js_challenge_khyati-bardolia.git
SSH: git@github.com:khyatibardolia/js_challenge_khyati-bardolia.git

// Move to project folder
cd js_challenge_khyati-bardolia
```

### install dependencies
```
npm install
```

### serve with hot reload at localhost:3000
```
npm run dev
```

### build for production and launch server
```
npm run build
npm run start
```

### generate static project
```
npm run generate
```

### Lints
```
npm run lint
npm run lint:style
```

### Fix lints errors
```
npm run lint:fix
npm run lint:style:fix
```

### Run tests
```
npm run test
```
### Launches the test runner for e2e testing with browser.
```
npm run cypress:open
```

## Docker build setup to run app in production mode.

Deploy a create-nuxt-app into production with docker multi-stage build.

### Build the Docker image:

```
docker build -t js_challenge_khyati-bardolia .
```
### To see the list images built in your system, run the following command:

```
docker images
```

### Run your application-container with:

```
docker run -p 8000:80 js_challenge_khyati-bardolia
```

Now open http://localhost:8000 in your browser to check its running !

## Main Goals

* Use TypeScript ✅
* Develop a simple build system for application ✅
* Develop the “Add/Remove to Bag” and “Add/Remove to Wishlist” actions which work on client side only. ✅
* Develop a product listing pagination with 6 products per page. ✅
* The bag in the header must be updated with the new quantities and the new total price. ✅
* Build a mini-bag with convenient actions, coherent with design. Example of a mini-bag is included, BUT you must develop a mini-bag that’s coherent with the page’s design. ✅
* Make the application responsive. ✅
* Use CSS preprocessors. ✅
* Use of linting tools. ✅
* Unit testing. ✅
