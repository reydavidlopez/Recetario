module.exports = {
	globDirectory: 'css/',
	globPatterns: [
		'**/*.{css,scss}'
	],
	swDest: 'css/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};