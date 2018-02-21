const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: __dirname + '/public/index.html',
	favicon: __dirname + '/public/favicon.ico',
	filename: 'index.html',
	inject: 'body'
});

const ExtractTextPluginConfig = new ExtractTextPlugin('style.css');

module.exports = {
	entry: __dirname + '/public/js/main.js',
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['env']
				}
			},
			{
				test: /\.scss$/,
				include: __dirname + '/public',
				loader: ExtractTextPlugin.extract('css-loader!sass-loader')
			},
			{
				test: /\.(njk|nunjucks)$/,
				loader: 'nunjucks-loader'
			}
		]
	},
	plugins: [HtmlWebpackPluginConfig, ExtractTextPluginConfig]
};
