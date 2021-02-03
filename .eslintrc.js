module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    "semi": ["error", "always"],
    "indent": ["warn", "tab"],
    "comma-dangle": ["error", "only-multiline"],
    "comma-spacing": ["warn", {"before": false, "after": true}],
    "quotes": ["warn", "single", { "allowTemplateLiterals": true }],
    "array-bracket-spacing": ["warn", "always", { "singleValue": true, "objectsInArrays": true, "arraysInArrays": true }],
    "no-multi-spaces": "warn",
    "no-var": "error",
    "prefer-const": "error",
    "space-in-parens": ["warn", "never"],
    "no-multi-spaces": "error",
    "space-before-blocks": ["warn", "always"],
    "max-classes-per-file": ["error", 1],
  },
};
