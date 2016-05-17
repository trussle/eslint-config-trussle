// Rules for all environments.
//
// You should add rules here to make sure they're used in all
// environments.

module.exports = {

  // Use ES6 where possible.
  parserOptions: {
    ecmaVersion: 6
  },
  env: {
    es6: true
  },

  extends: [
    "eslint:recommended",
    "./.eslintrc-style.js",
    "./.eslintrc-readability.js",
    "./.eslintrc-correctness.js"
  ],

};
