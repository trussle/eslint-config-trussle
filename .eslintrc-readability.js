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
    "dot-notation": "error",

    // All numbers should have a name to ensure other people
    // understand what they are for.
    //
    // We've ignored 1, because it can feature in incrementing
    // and people know what it is.
    //
    // Magic numbers should be const'ed.
    "no-magic-numbers": ["warn", { "ignore": [1], "enforceConst": true }],

    // Don't allow use of a variable before it is defined.
    // This stops us using the hoisting nature of JavaScript
    // to fix our sloppy coding.
    "no-use-before-define": "error",

    // Only allow require() statements to be made in the global scope.
    // Ideally these are placed at the top of the file and not anywhere else.
    "global-require": "error",

    // Avoid callback hell.
    "max-nested-callbacks": ["error", 5],

    // If you're making something `new`-able,
    // use a capital letter.
    "new-cap": "error",

    // It turns out that `var x = new Foo` is the same as `var x = new Foo()`.
    // Let's not use that.
    "new-parens": "error",

    // Avoid `else` with only an `if` in it. (Use `else if`!)
    "no-lonely-if": "error",

    // Who would use nested ternary statements?!
    "no-nested-ternary": "error",

    // Tighten up ternaries if possible. Prefer:
    //
    // x
    //
    // over
    // 
    // x ? true : false
    "no-unneeded-ternary": "error",

    // Don't use `new` with Function, Array, Object, String, Number or Boolean.
    // Use the literal syntax instead.
    "no-new-func": "error",
    "no-new-wrappers": "error",
    "no-array-constructor": "error",
    "no-new-object": "error",

    // Avoid `foo .bar`.
    "no-whitespace-before-property": "error",

    // Avoid `fn ()`; use `fn()`.
    "no-spaced-func": "error",

    // Use (a, b) for comma spacing. (Not (a ,b) or (a , b) or (a,b).)
    "comma-spacing": "error",

    // Enforce operator shorthand: `x = x + 1` => `x += 1`.
    "operator-assignment": "error",

    // Ensure a space between function() and {}.
    "space-before-blocks": ["error", "always"],

    // Ensure there is no space between function and ().
    "space-before-function-paren": ["error", "never"],

    // Require a space between infix operators.
    "space-infix-ops": "error",

    // Disallow `! x`. (Use `!x`.)
    "space-unary-ops": "error",

    // Avoid confusing functions unless bracketed.
    "no-confusing-arrow": ["error", { allowParens: true }],

    // Put all imports from a module on the same line.
    "no-duplicate-imports": "error",

    // Avoid computed keys with constants.
    "no-useless-computed-key": "error",

    // Avoid constructors that mimic the default constructor.
    "no-useless-constructor": "error",

    // Prefer `{ foo }` to `{ foo: foo }`.
    "object-shorthand": "error",

    // Avoid `var`: use `let` or `const` instead.
    "no-var": "error",

    // Use template strings for concatenation.
    "prefer-template": "error",

    // If there is a `return` in an if block, we don't need an else block.
    "no-else-return": "error",

    // Avoid multiple spaces in the middle of lines.
    "no-multi-spaces": "error",
  }

};
