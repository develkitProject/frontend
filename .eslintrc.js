module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: { browser: true, es6: true, node: true },
  extends: ['eslint:recommended', 'airbnb', 'plugin:prettier/recommended'],
  rules: {
    'react/jsx-filename-extension': [
      'error',
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
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
    'react/react-in-jsx-scope': 0,
    'no-unused-vars': 1,
    'import/no-named-as-default-member': 0,
    'import/no-named-as-default': 0,
    'react/prop-types': 0,
    'import/prefer-default-export': 0,
    'react/jsx-no-useless-fragment': 0,
    'no-use-before-define': 0,
    'no-shadow': 0,
    'no-nested-ternary': 0,
    'no-return-await': 0,
    'jsx-a11y/no-static-element-interactions': 1,
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    camelcase: 0,
    'jsx-a11y/click-events-have-key-events': 1,
    'import/named': 1,
    'react/destructuring-assignment': 0,
    'react/no-array-index-key': 1,
    'no-plusplus': 0,
    'react/no-unescaped-entities': 0,
    'no-undef': 0,
    'import/no-unresolved': 'off',
  },
};
