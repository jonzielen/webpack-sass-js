const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: "[name].css"
});

const config = [{
  entry: {
    main: './sass/sass.js'
  },
  output: {
    path: path.resolve(__dirname, 'css'),
    filename: 'main.css'
  },
  module: {
    rules: [{
      test: /\.scss$/,
      loader: extractSass.extract({
        use: [{
          loader: "css-loader",
          options: {
            minimize: true
          }
        }, {
          loader: "sass-loader"
        }],
        // use style-loader in development
        fallback: "style-loader"
      })
    }]
  },
  plugins: [
    extractSass
  ]
},{
  entry: {
    main: [
      './js/app.js'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'js'),
    filename: 'main.js'
  },
}];

module.exports = config;
