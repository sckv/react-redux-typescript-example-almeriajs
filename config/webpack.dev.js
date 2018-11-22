/**
 *
 * Configuración de desarrollo de Webpack.
 */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NamedModulesPlugin(),
  new HtmlWebpackPlugin({
    inject: true,
    template: 'src/index.html',
  }),
  new webpack.SourceMapDevToolPlugin({
    test: /\.tsx?$/i,
  }),
];
module.exports = require('./webpack.config')({
  mode: 'development',
  entry: [
    path.join(process.cwd(), 'src/index.tsx'), // Start with js/app.js
  ],
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    pathinfo: false,
  },
  optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
    minimize: false,
  },
  plugins: plugins,
  devtool: 'source-map',
  performance: {
    hints: false,
  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 100,
    poll: true,
  },
});
