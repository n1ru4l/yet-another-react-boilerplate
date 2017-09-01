`use strict`

module.exports = {
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
