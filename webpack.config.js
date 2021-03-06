const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const extractSass = new ExtractTextPlugin({
  filename: "[name].css"
});

const config = [{
  entry: {
    main: './public/src/sass/main.scss'
  },
  output: {
    path: path.resolve(__dirname, 'public/dist/css'),
    filename: '[name].css'
  },
  devtool: "source-map",
  module: {
    rules: [{
      test: /\.scss$/,
      loader: extractSass.extract({
        use: [{
          loader: "css-loader",
          options: {
            sourceMap: true,
            minimize: true,
            alias: {
              '../fonts/bootstrap': 'bootstrap-sass/assets/fonts/bootstrap'
            }
          }
        }, {
          loader: "sass-loader",
          options: {
            sourceMap: true,
            includePaths: [
              path.resolve('./node_modules/bootstrap-sass/assets/stylesheets'),
              path.resolve('./node_modules/jquery-ui-dist')
            ]
          }
        }],
        // use style-loader in development
        fallback: "style-loader"
      })
    }, {
      test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
      use: [{
        loader: "file-loader"
      }]
    }]
  },
  plugins: [
    extractSass
  ]
},{
  entry: {
    main: [
      './public/src/js/app.js'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'public/dist/js'),
    filename: 'main.js'
  },
  resolve: {
    alias: {
      jquery: 'jquery/src/jquery',
      'jquery-ui-dist': 'jquery-ui-dist/jquery-ui.min',
      'jquery-ui-widgets': 'jquery-ui/ui/widgets',
      bootstrap: 'bootstrap-sass/assets/javascripts/bootstrap'
    }
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
        comments: false
    })
  ]
}];

module.exports = config;
