module.exports = {
	// 현재 eslintrc 파일을 기준으로 ESLint 규칙을 적용
	root: true,
	// 추가적인 규칙들을 적용
	extends: [
		'plugin:vue/vue3-essential',
		'plugin:vue/vue3-strongly-recommended',
		'@vue/typescript/recommended',
		'eslint:recommended',
	],
	parserOptions: {
		sourceType: 'module',
		parser: 'babel-eslint',

    ecmaFeatures: {
      legacyDecorators: true
    }
	},
	// 코드 정리 플러그인 추가
	// 사용자 편의 규칙 추가
	rules: {
		"space-before-function-paren": ["error", "always"],
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
	},
	env: {
		browser: true,
		amd: true,
		node: true,
	},
}
