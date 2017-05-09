let path = require('path')
let webpack = require('webpack')
console.log(__dirname)
// var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
	devtool: 'eval',
	devServer: {
		headers: {'Access-Control-Allow-Origin': '*'}
	},
	entry: ['react-hot-loader/patch', 'webpack-hot-middleware/client', './src/index'],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
		// new BundleAnalyzerPlugin()
	],
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
				loader: 'style-loader!css-loader!less-loader'
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
	}
}
