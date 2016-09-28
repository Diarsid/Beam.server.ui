var webpack = require('webpack');
var CircularDependencyPlugin = require("circular-dependency-plugin");

module.exports = {
    entry: "./src/main.js",
    output : {
        path: "./dist.env.prod",
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: ['babel-loader']
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new CircularDependencyPlugin({
            // exclude detection of files based on a RegExp
            // exclude: /a\.js/,
            // add errors to webpack instead of warnings
            failOnError: true
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};