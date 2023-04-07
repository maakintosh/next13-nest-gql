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
    'react/react-in-jsx-scope': 'off',
  },
  parserOptions: {
    babelOptions: {
      presets: [require.resolve('next/babel')],
    },
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  ignorePatterns: ['./node_modules', './.next/**', '.eslintrc.js'],
};
