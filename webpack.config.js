const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	devServer: {
		open: true,
	},
	entry: {
		index: './src/script/index.ts',
		archives: './src/script/archives.ts',
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			inject: true,
			chunks: ['index'],
		}),
		new HtmlWebpackPlugin({
			template: './src/archives.html',
			inject: true,
			chunks: ['archives'],
			filename: 'archives.html',
		}),
	],
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
