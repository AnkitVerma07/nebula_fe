var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: __dirname + "/app/index.html",
	filename: "index.html",
	inject: "body"
});

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

module.exports = {
	entry: [
		'./app/index.js'
	],
	output: {
		path: __dirname + '/dist',
		filename: "indexBundle.js",
	},
	resolve: {
		extensions: ['', '.scss', '.css', '.js', '.json'],
	},
	node: {
		console: true,
		fs: 'empty',
		net: 'empty',
		tls: 'empty'
	},
	module: {
		loaders: [
			{test: /\.js$/, exclude: /node_modules/, loaders: ["babel-loader", "jsx", "react-hot"]},
			{test: /\.scss$/, loader: ExtractTextPlugin.extract('css!sass')},
			{test: /\.css$/, loader: "style!css"},
			{ test: /\.json$/, loader: 'json-loader' }
		]
	},
	plugins: [
		HtmlWebpackPluginConfig,
		new ExtractTextPlugin('style.css', {
			allChunks: true
		}),
		new webpack.DefinePlugin({
			"process.env": {
				AUTH0_DOMAIN: JSON.stringify('wyndenstarknebula.auth0.com'),
				AUTH0_CLIENT_ID: JSON.stringify('mxsFF3tXMaW0tnGgncH29h24G21SOxSb')
			}
		}),
	]
}