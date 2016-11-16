// Rules for making our code more readable.

module.exports = {
  "rules": {

    // When over multiple lines, we favour:
    //
    // object
    //   .property
    //
    // over
    //
    // object.
    //   property
    //
    // for readability.
    "dot-location": ["error", "property"],

    // Prefer foo.bar over foo["bar"] where possible.
    // This is easier to read.
    "dot-notation": "warn",

    // All numbers should have a name to ensure other people
    // understand what they are for.
    //
    // We've ignored 1, because it can feature in incrementing
    // and people know what it is.
    //
    // Magic numbers should be const'ed.
    "no-magic-numbers": ["warn", { "ignore": [0, 1], "enforceConst": true }],

    // Don't allow use of a variable before it is defined.
    // This stops us using the hoisting nature of JavaScript
    // to fix our sloppy coding.
    //
    // We make an allowance for functions; they are hoisted,
    // but allows us to write code from "least detailed to most"
    // in code:
    //
    // function doSteps() { step1(); step2(); step3(); }
    // function step1() { ... }
    // ...
    "no-use-before-define": ["error", { "functions": false, "classes": true }],

    // Only allow require() statements to be made in the global scope.
    // Ideally these are placed at the top of the file and not anywhere else.
    "global-require": "error",

    // Avoid callback hell.
    "max-nested-callbacks": ["warn", 3],

    // If you're making something `new`-able,
    // use a capital letter.
    "new-cap": "warn",

    // It turns out that `var x = new Foo` is the same as `var x = new Foo()`.
    // Let's not use that.
    "new-parens": "error",

    // Avoid `else` with only an `if` in it. (Use `else if`!)
    "no-lonely-if": "warn",

    // Nested ternary statements are sometimes useful,
    // but they shouldn't be encouraged.
    "no-nested-ternary": "warn",

    // Tighten up ternaries if possible. Prefer:
    //
    // x
    //
    // over
    //
    // x ? true : false
    "no-unneeded-ternary": "warn",

    // Don't use `new` with Function, Array, Object, String, Number or Boolean.
    // Use the literal syntax instead.
    "no-new-func": "error",
    "no-new-wrappers": "error",
    "no-array-constructor": "error",
    "no-new-object": "error",

    // Avoid `foo .bar`.
    "no-whitespace-before-property": "warn",

    // Avoid `fn ()`; use `fn()`.
    "no-spaced-func": "warn",

    // Use (a, b) for comma spacing. (Not (a ,b) or (a , b) or (a,b).)
    "comma-spacing": "warn",

    // Enforce operator shorthand: `x = x + 1` => `x += 1`.
    "operator-assignment": "warn",

    // Ensure a space between function() and {}.
    "space-before-blocks": ["warn", "always"],

    // Ensure there is no space between function and ().
    "space-before-function-paren": ["warn", "never"],

    // Require a space between infix operators.
    "space-infix-ops": "warn",

    // Disallow `! x`. (Use `!x`.)
    "space-unary-ops": "warn",

    // Avoid confusing functions unless bracketed.
    //
    // Use brackets if you hit this error:
    //   x = y => (y > 10 ? true : false)
    "no-confusing-arrow": ["warn", { allowParens: true }],

    // Put all imports from a module on the same line.
    "no-duplicate-imports": "warn",

    // Avoid computed keys with constants.
    "no-useless-computed-key": "warn",

    // Avoid constructors that mimic the default constructor.
    "no-useless-constructor": "warn",

    // Prefer `{ foo }` to `{ foo: foo }`.
    "object-shorthand": "warn",

    // Avoid `var`: use `let` or `const` instead.
    "no-var": "warn",

    // ...and prefer const over let.
    "prefer-const": "warn",

    // Use template strings for concatenation.
    "prefer-template": "warn",

    // If there is a `return` in an if block, we don't need an else block.
    "no-else-return": "warn",

    // Avoid multiple spaces in the middle of lines.
    "no-multi-spaces": "warn",

    // Avoid weird type conversions.
    "no-implicit-coercion": "warn",

    // Statements on the end of lines can be missed.
    "max-statements-per-line": ["warn", { max: 2 }],

    // We have no need for tabs in our files!
    "no-tabs": "error",

    // Irregular spacing triggers OCD in some developers...
    "no-multiple-empty-lines": ["warn", { max: 2 }]
  }

};
