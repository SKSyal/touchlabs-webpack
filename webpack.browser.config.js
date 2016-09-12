var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

module.exports = {
    entry: {
        searchPage: './src/searchPage.js', 
        landingPage: './src/landingPage.js'
    },
    output: {
        path: path.resolve(__dirname, 'assets'),
        filename: './js/[name].js',
        chunkFilename: '[id].js'
    },
    module: {
        loaders: [
            {
              test: /\.scss$/,
              loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            { test:  /\.js$/, loader: 'file-loader' }
        ]
    },
    plugins: [
        new ExtractTextPlugin('./css/[name].css')
    ]
};
