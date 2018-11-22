/**
 *
 * Configuración común de Webpack.
 */
const path = require('path');
const webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = options => ({
  mode: options.mode,
  entry: options.entry,
  output: Object.assign(
    {
      path: path.resolve(process.cwd(), 'build'),
      publicPath: '/',
    },
    options.output,
  ),
  optimization: options.optimization,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: path.resolve('src'),
        use: [
          {
            loader: 'thread-loader',
            options: {
              workers: 4,
            },
          },
          {
            loader: 'ts-loader',
            options: {
              happyPackMode: true,
              transpileOnly: true,
              reportFiles: ['src/**/*.{ts,tsx}'],
              getCustomTransformers: path.join(
                __dirname,
                './webpack.ts-transformers.js',
              ),
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(eot|otf|ttf|woff|woff2)$/,
        use: 'file-loader',
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      }
    ],
  },
  plugins: options.plugins.concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new ForkTsCheckerWebpackPlugin({workers: 2, checkSyntacticErrors: true}),
  ]),
  resolve: {
    alias: {
      '@src': path.resolve('src'),
    },
    modules: ['node_modules', 'src', 'assets'],
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    mainFields: ['browser', 'jsnext:main', 'main'],
  },
  devtool: options.devtool,
  target: 'web',
  performance: options.performance || {},
});
