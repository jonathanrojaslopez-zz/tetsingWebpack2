var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

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
         use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ['css-loader','sass-loader'],
          publicPath: '/dist'
        })
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    stats: 'errors-only',
    open: true
  },
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
      filename: "app.css"
    })
  ]
};