module.exports = {
  env: {
    "browser": true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    "ecmaVersion": 2021
  },
  ignorePatterns: ['docs', 'dist', 'example'],
  rules: {}
}
