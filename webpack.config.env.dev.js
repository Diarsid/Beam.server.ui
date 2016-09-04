var webpack = require('webpack');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8787',
        'webpack/hot/only-dev-server',
        "./src/main.js"
    ],
    output : {
        path: "./dist",
        publicPath: "/dev-server/",
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: ['react-hot','babel-loader']
        }]
    },
    devServer: {
        contentBase: "./dev_private/dev_server_content",
        port: 8787,
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};