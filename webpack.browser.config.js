var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');

module.exports = {
  entry: {
    pdp: "./src/client/pdp.js",
    plp: "./src/client/plp.js"
  },

  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: "./js/[name].js",
    chunkFilename: "[id].js"
  },

  module: {
    loaders: [{
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader")
    }, {
      test: /\.hbs$/,
      loader: "handlebars-loader"
    }, {
      test: /\.html$/,
      loader: "html"
    }]
  },

  plugins: [
    new ExtractTextPlugin("./css/[name].css"),
    new CopyWebpackPlugin([
      { from: './src/server/templates/**/*',
        to: './templates/',
        flatten: true
      }
    ])
  ]
};
