// Inside of webpack.config.js:
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    // Other webpack config...
    entry: {
        app: './src/index.js'
      },
    plugins: [
        // Other plugins...
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Progressive Web Application',
        }),
        
        new InjectManifest({
            swSrc: './src/sw.js',
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'static'),
      },
  };