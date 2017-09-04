`use strict`

module.exports = {
  parser: `babel-eslint`,
  plugins: [
    `react`,
  ],
  extends: [
    `prettier`,
  ],
  parserOptions: {
    sourceType: `module`,
    ecmaFeatures: {
      jsx: true,
    },
  },
}
