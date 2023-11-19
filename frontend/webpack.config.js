const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './client.js',
  mode: process.env.NODE_ENV || 'development',
  // mode: 'production',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].min.css',
    }),
    new Dotenv({
      path: process.env.NODE_ENV === 'production' ? path.resolve(__dirname, '.env.production') : path.resolve(__dirname, '.env.development'),
    }),
  ],
  optimization: {
    minimizer: [
      new TerserPlugin(), // Enable JavaScript minification
    ],
  },
};
