const path = require('path');
const webpack = require('webpack');
module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },{
                test: /\.css$/,
                include: /node_modules/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },

    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    entry:{
        index: __dirname + "/src/index.js",
        master:__dirname + "/src/std/_master-file.js"
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: "[name]-bundle.js"
    }, devServer: {
        contentBase: './dist'
    },
};