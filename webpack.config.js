var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    home: path.resolve(__dirname, './src/index.js'),
    world: path.resolve(__dirname, './src/world-router.js')
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle-[name].js'
  },
  module: {
    rules: [{ test: /\.js/, loader: 'babel-loader?cacheDirectory' }]
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: false
    }),
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ]
};
