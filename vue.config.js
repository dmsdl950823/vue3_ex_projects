module.exports = {
	configureWebpack: {
		plugins: [],
		optimization: {
			minimize: true,
		},
	},
	css: {
		requireModuleExtension: true,
		loaderOptions: {
			scss: {
				prependData: `
          @import "~@/style/style.scss";
				`,
			},
		},
	},
}
