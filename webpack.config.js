const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	devServer: {
		open: true,
	},
	entry: './src/script/index.ts',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js',
	},
	plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: 'ts-loader',
			},
			{
				test: /(\.s[ac]ss)$/,
				use: [
					'style-loader', // creates style nodes from JS strings
					'css-loader', // translates CSS into CommonJS
					'postcss-loader', // 追記
					'sass-loader', // compiles Sass to CSS, using Node Sass by default
				],
			},
		],
	},
	resolve: {
		modules: ['node_modules'],
		extensions: ['.ts', '.js'],
	},
};
