`use strict`

const webpack = require('webpack')
const path = require(`path`)

const DEV = process.env.NODE_ENV !== `production`

module.exports = {
  bail: !DEV,
  devtool: DEV ? 'cheap-module-source-map' : 'source-map',
  entry: [
    'react-hot-loader/patch',
    './src/client.js',
  ],
  output: {
    path: path.join(__dirname, `build/client`),
    filename: 'bundle.js',
    publicPath: DEV && 'http://localhost:3020/' || `/static/`,
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        options: {
          babelrc: false,
          presets: [
            `react`,
          ],
          plugins: [
            // "react-hot-loader/babel",
            `emotion`,
            `syntax-dynamic-import`,
            `transform-class-properties`,
            [`transform-object-rest-spread`, { useBuiltIns: true }],
          ]
        }
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: `graphql-tag/loader`,
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(DEV ? `development` : `production`),
      },
    }),
    DEV && new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true, // React doesn't support IE8
        warnings: false,
      },
      mangle: {
        screw_ie8: true,
      },
      output: {
        comments: true,
        screw_ie8: true,
      },
    }),
    DEV && new webpack.optimize.AggressiveMergingPlugin(),
  ].filter(Boolean),
  devServer: {
    hot: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
}
