module.exports = {
  css: {
    requireModuleExtension: true,
    loaderOptions: {
      scss: {
        prependData: '@import "~@/style/style.scss";'
      }
    }
  }
}
