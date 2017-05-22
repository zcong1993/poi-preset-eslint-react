# poi-preset-eslint-react

[![NPM version](https://img.shields.io/npm/v/poi-preset-eslint-react.svg?style=flat)](https://npmjs.com/package/poi-preset-eslint-react) [![NPM downloads](https://img.shields.io/npm/dm/poi-preset-eslint-react.svg?style=flat)](https://npmjs.com/package/poi-preset-eslint-react) [![CircleCI](https://circleci.com/gh/zcong1993/poi-preset-eslint-react/tree/master.svg?style=shield)](https://circleci.com/gh/zcong1993/poi-preset-eslint-react/tree/master)  [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/zcong1993/donate)

> Run eslint as building react app using Poi

## Install

```bash
yarn add poi-preset-eslint-react --dev
```

## Usage

```js
// poi.config.js
module.exports = {
  presets: [
    require('poi-preset-eslint-react')(/* options */)
  ]
}
```

This preset activate in *all* mode!

## Api

### Parameters

- options `Object`(optional, default `{}``)
  - options.loaderOptions *any* Options for `eslint-loader`. (optional, default `undefined`)
  - options.mode (`string` | `Array<string>`) In which mode to run ESLint. It could be a wildcard symbol `*` which means all modes, or an array of modes like ['production', 'test'] (optional, default '*')

### Examples

```js
require('poi-preset-eslint-react')({
  loaderOptions: {
    mode: 'production', // only in `production` mode
    loaderOptions: {
      rules: {
        semi: 0 // ignore semi check
      }
    }
   }
})
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**poi-preset-eslint-react** © [zcong1993](https://github.com/zcong1993), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by zcong1993 with help from contributors ([list](https://github.com/zcong1993/poi-preset-eslint-react/contributors)).

> [github.com/zcong1993](https://github.com/zcong1993) · GitHub [@zcong1993](https://github.com/zcong1993)
