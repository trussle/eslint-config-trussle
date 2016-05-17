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
    "no-warning-comments": ["warn", { terms: ["todo", "fixme"]}],

    // This enables lexical scoping (the way it should always have been...).
    "block-scoped-var": "error",

    // console.log() is not an error.
    //
    // In our system, we either:
    // 1. Are on Node, where console.log() is used for debugging/logging.
    // 2. Are using Browserify with a console.log()-stripping plugin.
    "no-console": ["off"],
    
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
    
  }
};
