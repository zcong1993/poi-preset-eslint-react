const eslintFormatter = require('eslint-formatter-pretty')

const baseOptions = {
  formatter: eslintFormatter,
  baseConfig: {
    extends: ['xo', 'xo-react'],
    env: {
      browser: true,
      commonjs: true,
      es6: true,
      jest: true,
      node: true
    }
  },
  rules: {
    semi: ['error', 'never'],
    indent: ['error', 2, { SwitchCase: 2 }],
    'object-curly-spacing': ['error', 'always'],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-indent': ['error', 2]
  },
  useEslintrc: false
}

module.exports = ({
  loaderOptions,
  mode = '*'
} = {}) => {
  return poi => {
    poi.mode(mode, () => {
      poi.webpackConfig.module.rule('eslint')
        .test(/\.(js|jsx)$/)
        .exclude
          .add(/node_modules/)
          .end()
        .pre()
        .use('eslint')
          .loader('eslint-loader')
          .options(poi.merge(baseOptions, loaderOptions || {}))
    })
  }
}
