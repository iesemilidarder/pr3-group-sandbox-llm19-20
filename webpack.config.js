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
<<<<<<< HEA
=======
        fcastell:__dirname + "/src/std/fcastell.js"
>>>>>>> 3a71876469b06c219d4ea9b9152efeaf93005fc5


=======
        fcastell:__dirname + "/src/std/fcastell.js",
        jques:__dirname + "/src/std/jques.js"
>>>>>>> 6e3f134e01754ea3ec97d26f1b241dbb1902593e
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: "[name]-bundle.js"
    }, devServer: {
        contentBase: './dist'
    },
};