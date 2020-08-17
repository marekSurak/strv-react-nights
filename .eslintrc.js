module.exports = {
	extends: [
	  '@strv/eslint-config-react/optional',
	  'prettier',
	  'prettier/react',
	],
	root: true,
	env: {
	  browser: true,
	  commonjs: true,
	  es6: true,
	  jest: true,
	  node: true,
	},
	parser: 'babel-eslint',
	parserOptions: {
	  ecmaVersion: 2018,
	  sourceType: 'module',
	  ecmaFeatures: {
		jsx: true,
	  },
	}
  }