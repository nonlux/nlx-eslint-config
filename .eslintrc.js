module.exports = {
  parser: 'babel-eslint',
  extends: 'eslint-config-airbnb',
  env: {
    browser: true,
    node: true,
    mocha: true
  },
  rules: {
    'react/no-multi-comp': 0,
    'import/default': 0,
    'import/no-duplicates': 0,
    'import/named': 0,
    'import/namespace': 0,
    'import/no-unresolved': 0,
    'import/no-named-as-default': 2,
    'comma-dangle': 0,
    indent: [2, 2, { SwitchCase: 1 }],
    'no-console': 0,
    'no-alert': 0,
    'spaced-comment': 0,
    camelcase: 0,
    'no-shadow': 0,
    'no-throw-literal': 0
  },
  plugins: ['react', 'import'],
  settings: {
    'import/parser': 'babel-eslint',
    'import/resolve': {
      moduleDirectory: ['node_modules', 'src']
    }
  },
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  }
};
