var ExtractTextPlugin = require('extract-text-webpack-plugin'),
    BrowserSyncPlugin = require('browser-sync-webpack-plugin'),
    autoprefixer = require('autoprefixer')

module.exports = {
	entry: './src/main',
	output: {
		path: './build',
		filename: 'bundle.js',
		publicPath: '/',
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				include: __dirname + '/src',
				query: {
					presets: ['react', 'es2015', 'stage-0'],
				}
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'),
				include: __dirname + '/src'
			}
		],
	},
	plugins: [
		new ExtractTextPlugin('styles.css'),
		new BrowserSyncPlugin({
			host: 'localhost',
			port: 3000,
			server: { baseDir: ['.'] }
		})
	],
	postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ]
}
