var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
  	app: './src/index.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My App Test',
      filename: 'index.html',
      minify: {
        collapseWhitespace: true
      },
      hash: true,
      template: 'src/index.html',
    }) // plugin que genera html con el bundle
  ],
  module: {
    rules: [
      {test: /\.css$/, use: 'css-loader'}
    ]
  }
};