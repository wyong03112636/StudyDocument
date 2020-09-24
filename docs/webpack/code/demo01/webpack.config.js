const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.ts',
  mode: 'development',
  output: {
    // custom publicPath
    // publicPath: 'https://example.com',
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js',
  },
  plugins: [
    // new SplitByPathPlugin([{ name: 'vendor', path: `${__dirname }/node_modules` }], {
    //   ignore: [`${__dirname }/node_modules/css-loader`],
    // }),
    // new ExtractTextPlugin('styles.css'),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'hot module replacement',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader'],
      },
      // {
      //   test: /\.less$/,
      //   loader: ExtractTextPlugin.extract({
      //     fallback: 'style-loader',
      //     use: ['css-loader', 'less-loader'],
      //   }),
      // },
    ],
  },
  devServer: {
    contentBase: './dist',
    hot: true,
  },
};
