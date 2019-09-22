const path = require('path');
const storysource = require.resolve('@storybook/addon-storysource/loader')

module.exports = ({config, mode}) => {
  // Extend it as you need.

  // For example, add typescript loader:
  config.module.rules.push({
    test: /\.less$/,
    loaders: [ 'style-loader', 'css-loader', 'less-loader' ],
    include: path.resolve(__dirname, '../../')
  });

  config.module.rules.push({
    test: /\.(?:png|jpe?g|otf|gif|svg|woff2?|ttf|eot|ico)$/,
    loader: 'file-loader'
  });

  config.module.rules.push({
    test: /.stories.jsx?$/,
    loaders: [storysource],
    include: path.resolve(__dirname, '../../'),
    enforce: 'pre',
  });

  config.resolve.extensions.push('.png');
  config.resolve.extensions.push('.less');
  config.resolve.extensions.push('.css');

  config.resolve.alias = config.resolve.alias || {};
  config.resolve.alias.react = path.resolve('./node_modules/react');

  return config;
};
