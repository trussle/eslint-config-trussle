# ESLint Configuration for Trussle

This repository collects a bunch of standard [ESLint](http://eslint.org/) files for Trussle repositories.

## Usage

Add the package to your devDependencies:

```sh
npm install --save-dev git+ssh://git@bitbucket.org:teamtrussle/trussle-eslint.git
```

Next, create a file `eslintrc.js` in the root directory of your project pointing to the coding standard:

```js

const base = require("trussle-eslint");
module.exports = {
  extends: base,

  // You will need to set up an environment:
  // see http://eslint.org/docs/user-guide/configuring#specifying-environments
  // for more information.
  env: {
    // node: true,
    // mocha: true,
    // browser: true,
    // jasmine: true,
  }
};
```


ESLint allows nested configuration, allowing you to choose different configurations for your tests, server-side and client-side code. Check out [their website](http://eslint.org/docs/user-guide/configuring#using-configuration-files) for documentation.

## Migrating Older Code

For older code, you probably only want rules around correctness, rather than style. To do this, all you need to do is change the `extends`:

```js
module.exports = {
  extends: "./node_modules/trussle-eslint/.eslintrc.js"
  // ...
};
```

## Changing the Rules

- Have a good reason for changing the rule, and write it as a comment near the rule in `.eslint.js`.
- Bump the version number:
  - `0.0.0 => 1.0.1` for rule configuration changes.
  - `0.0.x => 0.1.x` for added or removed rules.
  - `0.x.x => 1.x.x` for major changes (new ESLint version, etc.).
- Commit, push, and update the package in the project you're working on.
