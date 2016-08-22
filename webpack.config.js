var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var BUILD_PATH = path.resolve(__dirname, 'build');

module.exports = {
  entry: ['webpack-hot-middleware/client', './app/index.js'],
  output: {
    path: BUILD_PATH,
    publicPath: '/',
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.css$/, exclude: /node_modules/, loader: 'style!css' },
      { test: /\.json$/, loaders: [ 'json' ], exclude: /node_modules/ }
    ]
  },
	devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Hot Reloading',
      templateContent: '<html><head></head><body><div id="app"></div></body></html>'
    }),
    new webpack.NoErrorsPlugin(),
		new webpack.HotModuleReplacementPlugin()
  ]
};