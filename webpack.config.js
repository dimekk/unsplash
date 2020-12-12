const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
      index: './src/index.js'
    },
    output: {
      path: __dirname + '/build',
      filename: 'index.bundle.js'
    },
    plugins: [
      new HTMLWebpackPlugin({
        template: './src/index.html'
      })
    ]
  }