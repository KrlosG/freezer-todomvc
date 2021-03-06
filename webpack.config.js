var path = require('path');
var webpack = require('webpack');

module.exports = {
  //devtool: 'eval',
  entry: [
    './src/boot.js'
  ],
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
		new webpack.optimize.UglifyJsPlugin({minimize: true}),
		new webpack.DefinePlugin({
			'process.env': { NODE_ENV: '"production"'}
		})
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }]
  }
};
