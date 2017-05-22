const path = require('path')
const eslintFormatter = require('eslint-formatter-pretty')

const baseOptions = {
  formatter: eslintFormatter,
  baseConfig: {
    extends: ['react-app']
  },
  useEslintrc: false,
  configFile: path.resolve(__dirname, '.eslintrc')
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
