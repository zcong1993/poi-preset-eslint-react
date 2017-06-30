const path = require('path')
const eslintFormatter = require('eslint-formatter-pretty')

const baseOptions = {
  formatter: eslintFormatter,
  baseConfig: {
    extends: ['xo', 'xo-react']
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
