module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {},
  mini: {
    // to fix「 Can't import the named export XXXX from non EcmaScript module」
    // @see: https://stackoverflow.com/questions/69343038/cant-import-the-named-export-xxxx-from-non-ecmascript-module-only-default-expo
    webpackChain(chain) {
      chain.module
        .rule("mjs$")
        .test(/\.mjs$/)
        .include.add(/node_modules/)
        .end()
        .type("javascript/auto");
    }
  },
  h5: {}
};
