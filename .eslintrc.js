module.exports = {
  env: { browser: true, es6: true, node: true },
  extends: ['eslint:recommended', 'airbnb', 'plugin:prettier/recommended'],
  rules: {
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'react/react-in-jsx-scope': 0,
    'no-unused-vars': 1,
    'import/no-named-as-default-member': 0,
    'import/no-named-as-default': 0,
    'react/prop-types': 0,
    'import/prefer-default-export': 0,
  },
};
