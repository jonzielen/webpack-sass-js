const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

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
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        },
        comments: false,
        beautify: false
    })
  ]
}];

module.exports = config;
