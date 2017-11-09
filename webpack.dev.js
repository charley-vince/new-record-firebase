const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
console.log(__dirname)
// var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  devtool: 'eval',
  devServer: {
    headers: {'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': '*'}
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
      Styles: path.resolve(__dirname, './public/styles/'),
      Images: path.resolve(__dirname, './public/img/')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: function() {
                return [autoprefixer]
              }
            }
          }
        ]
      },
      {
        test: /\.(jpe?g|png|svg|gif)$/,
        use: [
          'file-loader?name=assets/img/[name].[ext]',
          {
            loader: 'image-webpack-loader',
            options: {
              query: {
                mozjpeg: {
                  progressive: true
                },
                gifsicle: {
                  interlaced: true
                },
                optipng: {
                  optimizationLevel: 7
                }
              }
            }
          }
        ]
      },
      {
        test: /\.(ttf|otf)$/,
        loader: 'file-loader?name=assets/fonts/[name].[ext]'
      }
    ]
  }
}
