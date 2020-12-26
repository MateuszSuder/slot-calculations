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
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    "linebreak-style": ["error", "windows"],
    "semi": ["error", "always"],
	"indent": ["warn", "tab"],
	"comma-dangle": ["error", "only-multiline"],
	"comma-spacing": ["warn", {"before": false, "after": true}],
	"quotes": ["warn", "single", { "allowTemplateLiterals": true }],
	"array-bracket-spacing": ["warn", "always", { "singleValue": true }],
	"no-multi-spaces": "warn"
  },
};
