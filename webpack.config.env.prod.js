var webpack = require('webpack');

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
        })
    ]
};