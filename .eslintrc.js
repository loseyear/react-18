module.exports = {
  settings: {
    'import/resolver': {
      alias: {
        /*
        // 直接走 ts alias
        webpck: {
          config: './script/webpack.config.js',
        },
        */
        map: [
          ['client', './client'],
        ],
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
      },
    },
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    node: true,
    browser: true,
    jest: true,
  },
  extends: 'airbnb',
  plugins: [
    'react',
    'jsx-a11y',
    'import',
    'react-hooks',
  ],
  parser: 'babel-eslint',
  rules: {
    semi: ['error', 'never'],
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
        ],
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
   ],
   'react/react-in-jsx-scope': 'off',
   'jsx-a11y/no-noninteractive-element-to-interactive-role': 'off',
  },
}
