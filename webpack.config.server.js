`use strict`

const webpack = require('webpack')
const path = require(`path`)

const DEV = process.env.NODE_ENV !== 'production'

module.exports = {
  bail: !DEV,
  devtool: DEV ? 'cheap-module-source-map' : 'source-map',
  target: 'node',
  entry: `./src/server.js`,
  output: {
    path: path.join(__dirname, `build/server`),
    filename: `bundle.js`,
    publicPath: `/`,
  },
  externals: (context, request, callback) => {
    // Externalize all npm modules.
    if (/^[a-z0-9-][a-z0-9-./]+$/.test(request)) {
      return callback(null, `commonjs ${request}`);
    }
    callback();
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: `babel-loader`,
        exclude: /(node_modules)/,
        options: {
          babelrc: false,
          presets: [
            `react`,
          ],
          plugins: [
            `emotion`,
            `syntax-dynamic-import`,
            `transform-class-properties`,
          ],
        }
      },
    ],
  },
  plugins: [
    new WriteFilePlugin,
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(DEV ? `development` : `production`),
    }),
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,                               
    }),
  ],
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false,
    setImmediate: false,
  },
}
