// Rules for enforcing a consistent code style.

module.exports = {
  "rules": {

    // We use 2-space indentation.
    "indent": ["error", 2],

    // All quotes are allowed.
    "quotes": ["off"],

    // Always use semicolons.
    "semi": ["error", "always"],

    // Keep commas consistent between JS and JSON.
    "comma-dangle": ["error", "never"],

    // (foo) => { ... } and
    //  foo  => { ... } are permitted.
    "arrow-parens": "off",

    // Avoid [ 1 ] and foo[ 1 ]. Prefer [1].
    "array-bracket-spacing": "error",
    "computed-property-spacing": "error",

    // Avoid {x}. Prefer { x }.
    "block-spacing": "error",

    // Braces go on the line, not below it. Prefer:
    //
    // foo {
    // }
    //
    // over
    //
    // foo
    // {
    // }
    "brace-style": ["error", "stroustrup", { allowSingleLine: true }],

    // useCamelCaseForVariables, not_underscores.
    "camelcase": ["error", { properties: "always" }],

    // If `this` needs to be aliased, use `self`.
    "consistent-this": ["error", "self"],

    // Use { key: "value" } for key spacing. (Not { key : "value" } or variants.)
    "key-spacing": "error",
    "object-curly-spacing": "error",

    // Use `if (true)`, not `if(true)`. (This is for all keywords.)
    "keyword-spacing": "error",

    // Enforce a space after a semicolon.
    "semi-spacing": ["error", { after: true }],

    // Enforce a space after a comment.
    "spaced-comment": "error",

    // Prefer `() => foo()` to `() => { return foo() }`.
    "arrow-body-style": "error",

    // Prefer `() => {}` to `()=>{}`.
    "arrow-spacing": "error",

    // Prefer `${foo}` over `${ foo }`.
    "template-curly-spacing": "error",
  }

};
