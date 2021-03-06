//var webpack = require('webpack');
// var path = require('path');
// var fs = require('fs');
var nodeModules = {};

// note the path.resolve(__dirname, ...) part
// without it, eslint-import-resolver-webpack fails
// since eslint might be invoked with different cwd
// fs.readdirSync(path.resolve(__dirname, 'node_modules'))
//     .filter(x => ['.bin'].indexOf(x) === -1)
//     .forEach(mod => { nodeModules[mod] = `commonjs ${mod}`; });

module.exports =
{
    // The configuration for the server-side rendering
    name: 'server',
    target: 'node',
    entry: './src/server.js',
    output: {
        path: './bin/',
        publicPath: 'bin/',
        filename: 'server.js'
    },
    externals: nodeModules,
    module: {
        loaders: [
          { test: /\.js$/,

              loaders: [
                  'babel-loader'
              ]
          },
          { test: /\.hbs$/, loader: 'handlebars-loader' },
            { test:  /\.json$/, loader: 'json-loader' }
        ]
    },
    plugins: [

    ]
};
