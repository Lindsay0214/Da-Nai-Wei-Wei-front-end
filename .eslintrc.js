module.exports = {
  env: {
    browser: true,
    jest: true
  },
  extends: [
    'airbnb',
    'plugin:jsx-a11y/recommended',
    'prettier',
    'prettier/react',
    'plugin:react/jsx-runtime'
  ],
  plugins: ['jsx-a11y', 'prettier'],
  parser: 'babel-eslint',
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'prettier/prettier': 'error',
    complexity: ['error', { max: 5 }],
    'default-param-last': 'error',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/prop-types': 0,
    'react/button-has-type': 0,
    'no-unused-vars': 'off'
  }
};
