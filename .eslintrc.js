// Rules for all environments.
//
// You should add rules here to make sure they're used in all
// environments.

module.exports = {

  // Use the defaults from ESLint.
  "extends": "eslint:recommended",

  // Use ES6 where possible.
  parserOptions: {
    ecmaVersion: 6
  },
  env: {
    es6: true
  },

  // Changes to rules from the default
  // should be explained here!
  "rules": {

    // We use 2-space indentation.
    "indent": ["error", 2],

    // console.log() is a warning, not an error.
    //
    // In our system, we either:
    // 1. Are on Node, where console.log() is fine.
    // 2. Are using Browserify with a console.log()-stripping plugin.
    "no-console": 1,

    // We have a lot of unused variables in the system as it stands.
    // Sometimes they're useful to have, in order to describe more fully
    // the arguments of a callback, for instance.
    "no-unused-vars": 1
  }

};
