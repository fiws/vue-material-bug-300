/* eslint-env node */
// 'use strict';

const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: __dirname + '/src',
  entry: './main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          // vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        loader: 'vue-style-loader!css-loader'
      }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({ template: './index.html' }),
  ],
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    contentBase: __dirname + '/src',
    port: 3000,
    host: 'localhost',
  },
  devtool: '#source-map'
};
