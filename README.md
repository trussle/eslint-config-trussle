# ESLint Configuration for Trussle

This repository collects a bunch of standard [ESLint](http://eslint.org/) files for Trussle repositories.

## Usage

Add the package to your devDependencies:

```sh
npm install --save-dev git+ssh://git@bitbucket.org:teamtrussle/trussle-eslint.git
```

Next, create a file `eslintrc.js` in the root directory of your project pointing to the coding standard:

```js
module.exports = {
  extends: "./node_modules/trussle-eslint/.eslintrc.js"
};
```

ESLint allows nested configuration, allowing you to choose different configurations for your tests, server-side and client-side code. Check out [their website](http://eslint.org/docs/user-guide/configuring#using-configuration-files) for documentation.
