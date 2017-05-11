var path = require('path');
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

var isProd = process.env.NODE_ENV === 'production'
var cssDev = ['style-loader','css-loader','sass-loader']
var cssProd = ExtractTextPlugin.extract({
  fallback: "style-loader",
  use: ['css-loader','sass-loader'],
  publicPath: '/dist'
})

var cssConfig = isProd ? cssProd : cssDev;

module.exports = {
  entry: {
  	app: './src/index.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: cssConfig
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [['es2015', { modules: false }], 'stage-0', 'react']
          },
        }]
      },
      {
        test: /\.png$/,
        exclude: /node_modules/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    stats: 'errors-only',
    hot: true,
    open: true
  },
  devtool: "#inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My App Test',
      //filename: './../index.html',
      minify: {
        collapseWhitespace: true
      },
      hash: true,
      template: 'src/index.html',
    }), // plugin que genera html con el bundle
     new ExtractTextPlugin({
      filename: "app.css",
      disable: !isProd
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
};