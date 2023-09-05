const webpack = require('webpack');
require('dotenv').config({ path: './.env' });
const path = require('path'); //правильные пути указывать
const mode = process.env.NODE_ENV || 'development'; //указание среды разработки ()
const HtmlWebpackPlugin = require('html-webpack-plugin'); //Плагин для HTLM npm install html-webpack-plugin -D
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = mode === 'development';
const target = 'web'; // Если development, то web настройки, если продакшн, то файл browserslistrc
const devtool = devMode ? 'source-map' : undefined; // При дев моде, будет source-map для отслежиания ошибок

module.exports = env = {
  mode,
  target,
  devtool,
  devServer: {
    port: 3000,
    open: true,
    hot: true,
  },
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, 'src/components/'),
      "@UI": path.resolve(__dirname, 'src/components/UI/'),
      "@hooks": path.resolve(__dirname, 'src/hooks/'),
      "@API": path.resolve(__dirname, 'src/API/'),
      "@utils": path.resolve(__dirname, 'src/utils/'),
      "@store": path.resolve(__dirname, 'src/store/'),
      "@interfaces": path.resolve(__dirname, 'src/interfaces')
    },
    extensions: ['.ts', '.tsx', '.js'],
  },
  entry: ['@babel/polyfill', path.resolve(__dirname, 'src', 'index.tsx')],
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-env'],
        },
      },
      {
        test: /\.(c|sc|sa)ss$/i,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [require('postcss-preset-env')],
              },
            },
          },
          { loader: 'css-modules-typescript-loader' },
          'sass-loader',
        ],
      },
      {
        test: /\.(svg|jpg|gif)$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env),
    }),
  ],
};
