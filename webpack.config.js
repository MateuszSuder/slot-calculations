/* eslint-disable no-undef */
const path = require('path');

module.exports = {
	entry: './ts/index.ts',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: [ '.tsx', '.ts', '.js' ],
	},
	devServer: {
		contentBase: './build',
		compress: true,
		port: 9000
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build/js'),
		publicPath: '/js'
	},
	mode: 'development'
};