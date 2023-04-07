module.exports = {
  env: {
    browser: true,
  },
  root: true,
  extends: [
    'custom',
    'plugin:react/recommended',
    'plugin:tailwindcss/recommended',
  ],
  plugins: ['react', 'tailwindcss'],
  rules: {
    'react/jsx-key': 'off',
    'react/react-in-jsx-scope': 'off',
  },
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  ignorePatterns: ['./node_modules', './dist', '.eslintrc.js'],
};
