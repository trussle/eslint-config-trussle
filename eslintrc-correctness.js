// Rules for enforcing correctness.
//
// All of these rules are to make sure we don't make mistakes!

module.exports = {
  "rules": {

    // All variables should be used.
    //
    // Arguments to functions do not need to be used.
    // Giving arguments names can guide the reader and make
    // the code easier to extend.
    "no-unused-vars": ["error", { vars: "all", args: "none" }],

    // Prefer === over ==.
    // == uses a weird algorithm and coerces types;
    // === is more simple.
    "eqeqeq": "error",

    // Adding properties to native objects is treason of the highest form.
    "no-extend-native": "error",

    // Make sure we don't overwrite native objects.
    "no-native-reassign": "error",
    "no-shadow-restricted-names": "error",

    // Avoid new blocks that aren't necessary.
    // If we've done this, we probably didn't mean to.
    "no-lone-blocks": "error",

    // Functions inside loops don't do what you think they should.
    "no-loop-func": "error",

    // Only allow calls to `new` in assignments.
    "no-new": "error",

    // Disallow `return x = ...`.
    // Generally this means you've done something wrong.
    "no-return-assign": "error",

    // Avoid sequence expressions: `1, 2` returns 2,
    // but it's probably a mistake.
    "no-sequences": "error",

    // Disallow expressions that don't do something
    // (with "use strict" etc. as exceptions).
    //
    // This usually points to a typo.
    "no-unused-expressions": "error",

    // Warn on TODO/FIXME comments.
    //
    // We shouldn't forget about these comments,
    // and this rule means that we won't!
    "no-warning-comments": ["warn", { terms: ["todo", "fixme"] }],

    // This enables lexical scoping (the way it should always have been...).
    "block-scoped-var": "error",

    // In our system, we either:
    // 1. Are on Node, we use trussle-logging for debugging/logging.
    // 2. Are using Browserify with a console.log()-stripping plugin.
    "no-console": ["warn"],

    // Enforcle Unix line endings.
    // This makes sure we don't make our production Linux machines angry.
    "linebreak-style": ["error", "unix"],

    // Descendant classes must call super() in their constructor.
    // Not calling super() usually means that you forgot.
    "constructor-super": ["error"],

    // Don't reassign classes.
    // It's a really bad idea.
    "no-class-assign": ["error"],

    // There are sometimes uses for `function`.
    // For instance, it can be used to show that the function
    // doesn't need a `this`.
    "prefer-arrow-callback": ["off"],

    // Inconsistency between variable and function name
    // can lead to confusion.
    "func-name-matching": "error",

    // Even if a developer knows their operator precendence,
    // it's always good to make sure it does -exactly- what
    // they want.
    "no-mixed-operators": "error",

    // This is often a typo; forcing "0." reduces the likelihood
    // that is was.
    "no-floating-decimal": "error",

    // This is possibly useful for setting defaults:
    // x = x || DEFAULT
    // but more often than not it's a mistake.
    "no-param-reassign": "warn",

    // Make sure that, if you have a parameter called `err`,
    // you actually use it.
    "handle-callback-err": "error",

    // Avoid loops that don't alter anything.
    // (This is usually unintended.)
    "no-unmodified-loop-condition": "error",

    // Avoid long lists of parameters.
    // (They're not easy to use: which order should I
    // put my params?)
    //
    // FIXME: Make this more strict once we know it works.
    "max-params": ["warn", 3],

    // Ensure we throw Error objects, not just strings.
    //
    // FIXME: Make this more strict once we know it works in our code base.
    "no-throw-literal": "warn",

    // Avoid superfluous "use strict" statements.
    //
    // FIXME: When everything runs on Node 6+, turn this on.
    "strict": "off"
  }
};
