module.exports = {
  env: {
    browser: true,
  },
  root: true,
  extends: ['custom', 'next/core-web-vitals', 'plugin:react/recommended'],
  plugins: ['react'],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    'react/jsx-key': 'off',
  },
  parserOptions: {
    babelOptions: {
      presets: [require.resolve('next/babel')],
    },
  },
  ignorePatterns: ['./node_modules', './.next/**', '.eslintrc.js'],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
