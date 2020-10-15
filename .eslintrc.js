module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
    "semi": [2, "always"],
    "indent": ["error", 4],
    "brace-style": [2, "stroustrup", { "allowSingleLine": true }],
    "no-multiple-empty-lines": ["error", { "max": 2, "maxEOF": 0 }],
    "padded-blocks": ["error", { "blocks": "always" }],
    "no-trailing-spaces": ["error", { "skipBlankLines": true }]

  }
}
