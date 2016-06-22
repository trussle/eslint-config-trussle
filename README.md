# ESLint Configuration for Trussle

[![npm version](https://badge.fury.io/js/eslint-config-trussle.svg)](https://badge.fury.io/js/eslint-config-trussle)

This repository collects a bunch of standard [ESLint](http://eslint.org/) files for Trussle repositories.

## Usage

Add the package to your devDependencies:

```sh
npm install --save-dev eslint-config-trussle
```

Next, create a file `.eslintrc.js` in the root directory of your project pointing to the coding standard:

```js

module.exports = {
  extends: "trussle",

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

For older (ES5) code, try the following:

- Install eslint-config-trussle.
- Fix any indentation issues you have with some [editor-fu](http://stackoverflow.com/questions/20675237/converting-spaces-to-tabs-in-multiple-files-sublime-text-2).
- Run the auto-fixer with `eslint --fix .`
- Fix the rest of the violations manually, either by fixing the issue or adding a special rule to your project.

## Changing the Rules

- Have a good reason for changing the rule, and write it as a comment near the rule in `.eslint.js`.
- Bump the version number:
  - `0.0.0 => 1.0.1` for rule configuration changes.
  - `0.0.x => 0.1.x` for added or removed rules.
  - `0.x.x => 1.x.x` for major changes (new ESLint version, etc.).
- Commit, push, and update the package in the project you're working on.
