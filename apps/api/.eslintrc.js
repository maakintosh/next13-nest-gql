module.exports = {
  root: true,
  extends: ['custom'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
  ignorePatterns: ['./node_modules', './dist', '.eslintrc.js'],
};
