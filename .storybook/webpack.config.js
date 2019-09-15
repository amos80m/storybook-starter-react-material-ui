const path = require('path');

module.exports = {
  output: {
    filename: 'my-first-webpack.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        loaders: [ 'style-loader', 'css-loader', 'less-loader' ],
        include: path.resolve(__dirname, '../../')
      },
      {
        test: /\.(?:png|jpe?g|otf|gif|svg|woff2?|ttf|eot|ico)$/,
        loader: 'file-loader'
      }
    ]
  }
};