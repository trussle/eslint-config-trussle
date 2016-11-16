// Rules for enforcing a consistent code style.

module.exports = {
  "rules": {

    // We use 2-space indentation.
    "indent": ["warn", 2, {

      // Indent cases in a switch statement.
      "SwitchCase": 2,

      // Indent properties of an object.
      //
      // doSomething()
      //   .then(() => doSomethingElse());
      "MemberExpression": 2
    }],

    // Always use semicolons.
    "semi": ["error", "always"],

    // Keep commas consistent between JS and JSON.
    "comma-dangle": ["error", "never"],

    // (foo) => { ... } and
    //  foo  => { ... } are permitted.
    "arrow-parens": "off",

    // Avoid [ 1 ] and foo[ 1 ]. Prefer [1].
    "array-bracket-spacing": "warn",
    "computed-property-spacing": "warn",

    // Avoid {x}. Prefer { x }.
    "block-spacing": "warn",

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
    "brace-style": ["error", "1tbs", { allowSingleLine: true }],

    // useCamelCaseForVariables, not_underscores.
    "camelcase": ["warn", { properties: "always" }],

    // If `this` needs to be aliased, use `self`.
    "consistent-this": ["warn", "self"],

    // Use { key: "value" } for key spacing. (Not { key : "value" } or variants.)
    "key-spacing": "warn",
    "object-curly-spacing": ["warn", "always"],

    // Use `if (true)`, not `if(true)`. (This is for all keywords.)
    "keyword-spacing": "warn",

    // Enforce a space after a semicolon.
    "semi-spacing": ["warn", { after: true }],

    // Enforce a space after a comment.
    "spaced-comment": "warn",

    // Prefer `() => {}` to `()=>{}`.
    "arrow-spacing": "warn",

    // Prefer `${foo}` over `${ foo }`.
    "template-curly-spacing": "warn",

    // Because sometimes we forget.
    "eol-last": "warn"
  }

};
