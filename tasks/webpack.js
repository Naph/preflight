import path from 'path';
import webpack from 'webpack';
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PreflightPlugin = require('../preflight.plugin');

const config = {
  entry: {
    main: [
      './src',
      'webpack/hot/dev-server',
    ]
  },
  output: {
    path: path.resolve('./dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      {
        test: /\.(gif|png|jpe?g)$/,
        loader: 'file-loader',
      },
      {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'sass-loader',
          ],
        }),
      },
    ],
  },
  devServer: {
    contentBase: path.resolve('./dist'),
    host: '0.0.0.0',
    port: 3000,
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new CopyWebpackPlugin([{
      from: './src/images',
    }]),
    new PreflightPlugin(),
  ],
  stats: {
    colors: true,
  }
};

const scripts = () => new Promise((resolve) => webpack(config, (err, stats) => {
  err ? console.log('Webpack', err) : console.log(stats.toString(config.stats));
  resolve()
}));

export { config, scripts };
