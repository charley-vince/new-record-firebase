let path = require('path')
let webpack = require('webpack')
// let CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
	devtool: 'cheap-module-source-map',
	entry: './src/index',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	resolve: {
		alias: {
			Styles: path.resolve(__dirname, 'public/styles/'),
			Images: path.resolve(__dirname, 'public/img/')
		}
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loaders: ['babel-loader'],
				include: path.join(__dirname, 'src')
			},
			{
				test: /\.less$/,
				loader: ['style-loader', 'css-loader', 'less-loader']
			},
			{
				test: /\.(jpg|png|svg|gif)$/,
				loader: 'file-loader?name=assets/img/[name].[ext]'
			},
			{
				test: /\.(ttf|otf)$/,
				loader: 'file-loader?name=assets/fonts/[name].[ext]'
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production')
			}
		}),
		// new CompressionPlugin({
		// 	asset: '[path].gz[query]',
		// 	algorithm: 'gzip',
		// 	test: /\.(js|html)$/,
		// 	threshold: 10240,
		// 	minRatio: 0.8
		// }),
		new webpack.optimize.UglifyJsPlugin({sourceMap: true}),
		new webpack.optimize.AggressiveMergingPlugin()
	]
}
