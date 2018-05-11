const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: './src/index.js',
  output: {
    publicPath: '/',
    filename: '[name]_[hash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["transform-class-properties"]
          }
        }
      },
      {
        test: /\.jpg|\.png/,
        use: {
          loader: 'file-loader',
          options: {
            name(file) {
              return '[path][name].[ext]'
            }
          }
        }
      },
      { test: [/\.vert$/, /\.frag$/], use: 'raw-loader' }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      WEBGL_RENDERER: true,
      CANVAS_RENDERER: true
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
      title: '2048'
    })
  ],
  devServer: {
    port: 9090,
    inline: true,
    compress: true
  },
  mode: 'development'
}

module.exports = config;