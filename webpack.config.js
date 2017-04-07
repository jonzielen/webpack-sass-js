const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const extractSass = new ExtractTextPlugin({
  filename: "[name].css"
});

const config = [{
  entry: {
    main: './sass/main.scss'
  },
  output: {
    path: path.resolve(__dirname, 'css'),
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
              path.resolve('./node_modules/bootstrap-sass/assets/stylesheets')
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
      './js/app.js'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'js'),
    filename: 'main.js'
  },
  resolve: {
    alias: {
      jquery: 'jquery/src/jquery'
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
    ],
    loaders: [{
      test: /\.js$/,
      loader: 'imports?jQuery=jquery,$=jquery,this=>window'
    }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        },
        comments: false
    }),
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery'
    })
  ]
}];

module.exports = config;
