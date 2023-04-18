const path = require('path');
const { HotModuleReplacementPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, './src/index.js'),
	plugins: [
		new HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, './public/index.html'),
		}),
	],
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							modules: {
								localIdentName: '[path][name]__[local]--[hash:base64:5]',
							}
						}
					}
				],
				include: /\.module\.css$/,
			},
			{
				test: /\.css$/,
				exclude: [/\.module\.css$/, /node_modules/],
				use: [ 'style-loader', 'css-loader' ]
			},
			{
				test: /\.(jpe?g|gif|png|svg)$/i,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 10000
						}
					}
				]
			},
		],
	},
	resolve: {
		extensions: [ '.js', '.jsx' ],
	},
	devServer: {
		port: 3000,
		hot: true,
		compress: true,
		client: {
			overlay: true,
		},
		static: {
			directory: path.resolve(__dirname, './build'),
		},
	},
};