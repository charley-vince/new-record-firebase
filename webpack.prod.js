const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

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
    rules: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'less-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins: function() {
                  return [autoprefixer({browsers: ['last 2 versions']})]
                }
              }
            }
          ]
        })
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
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new ExtractTextPlugin('assets/styles/styles.css'),
    new webpack.optimize.UglifyJsPlugin({sourceMap: true}),
    new webpack.optimize.AggressiveMergingPlugin()
  ]
}
