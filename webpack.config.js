const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { WebPlugin } = require('web-webpack-plugin');
const PreflightPlugin = require('./preflight.plugin');

module.exports = {
  entry: {
    main: './src'
  },
  output: {
    path: path.resolve('./dist'),
    filename: '[name].js',
    publicPath: ''
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          env: 'latest'
        }
      },
      {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'sass-loader'
          ]
        })
      }
    ]
  },
  devServer: {
    host: '0.0.0.0',
    port: 3000
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new WebPlugin({
      template: path.resolve('./src/index.ejs'),
      filename: 'source.html',
      requires: ['main']
    }),
    new PreflightPlugin(),
    new webpack.LoaderOptionsPlugin({
      debug: true
    })
  ]
};
