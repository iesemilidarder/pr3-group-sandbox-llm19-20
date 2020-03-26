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
        master:__dirname + "/src/std/_master-file.js",
        miguel:__dirname + "/src/std/mexposito.js",
        fcastell:__dirname + "/src/std/fcastell.js",
        jques:__dirname + "/src/std/jques.js",
        jzarco:__dirname + "/src/std/jzarco.js",
        dcastañeda:__dirname + "/src/std/dcastañeda.js",
        tamer:__dirname + "/src/std/tamer.js",
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: "[name]-bundle.js"
    }, devServer: {
        contentBase: './dist'
    },
};