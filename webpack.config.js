const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    //REMOVED https://github.com/webpack-contrib/style-loader/issues/461 'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    //REMOVED https://github.com/webpack-contrib/style-loader/issues/461 'style-loader',
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.(woff2?|jpe?g|png|gif|ico|json)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]',
                        outputPath: '/'
                    }
                }
                //use: 'url-loader?name=./assets/images/[name].[ext]'
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    entry: {
        index: "./src/index.js",
        master: "./src/std/_master-file.js",
        pvillanueva: "./src/std/pvillanueva.js",
        mexposito: "./src/std/mexposito.js",
        fcastell: "./src/std/fcastell.js",
        jques: "./src/std/jques.js",
        jzarco: "./src/std/jzarco.js",
        dzapata: "./src/std/dzapata.js",
        dcastaneda: "./src/std/dcastaneda.js",
        tamer: "./src/std/tamer.js",
        dsalanova: "./src/std/dsalanova.js",
        kilianfuentes: "./src/std/kilianfuentes.js",
        msegui: "./src/std/msegui.js",
        mflores: "./src/std/mflores.js",
        aalonso: "./src/std/aalonso.js",
        topics: "./src/prj1/topics.js",
        juegos: "./src/prj3/juegos.js",
        viajes: "./src/prj2/viajes.js"


    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            chunks: ['index'],
            filename: "./index.html"
        }),
        new HtmlWebPackPlugin({
            template: "./src/std/_master-file.html",
            chunks: ['master'],
            filename: "./master.html"
        }),
        new HtmlWebPackPlugin({
            template: "./src/std/pvillanueva.html",
            chunks: ['pvillanueva'],
            filename: "./pvillanueva.html"
        }),
        new HtmlWebPackPlugin({
            template: "./src/std/dzapata.html",
            chunks: ['dzapata'],
            filename: "./dzapata.html"
        }),
        new HtmlWebPackPlugin({
            template: "./src/std/mexposito.html",
            chunks: ['mexposito'],
            filename: "./mexposito.html"
        }),
        new HtmlWebPackPlugin({
            template: "./src/std/fcastell.html",
            chunks: ['fcastell'],
            filename: "./fcastell.html"
        }),
        new HtmlWebPackPlugin({
            template: "./src/std/jques.html",
            chunks: ['jques'],
            filename: "./jques.html"
        }),
        new HtmlWebPackPlugin({
            template: "./src/std/jzarco.html",
            chunks: ['jzarco'],
            filename: "./jzarco.html"
        }),
        new HtmlWebPackPlugin({
            template: "./src/std/dcastaneda.html",
            chunks: ['dcastaneda'],
            filename: "./dcastaneda.html"
        }),
        new HtmlWebPackPlugin({
            template: "./src/std/tamer.html",
            chunks: ['tamer'],
            filename: "./tamer.html"
        }),
        new HtmlWebPackPlugin({
            template: "./src/std/dsalanova.html",
            chunks: ['dsalanova'],
            filename: "./dsalanova.html"
        }),
        new HtmlWebPackPlugin({
            template: "./src/std/kilianfuentes.html",
            chunks: ['kilianfuentes'],
            filename: "./kilianfuentes.html"
        }),
        new HtmlWebPackPlugin({
            template: "./src/std/msegui.html",
            chunks: ['msegui'],
            filename: "./msegui.html"
        }),
        new HtmlWebPackPlugin({
            template: "./src/std/mflores.html",
            chunks: ['mflores'],
            filename: "./mflores.html",
        }),
        new HtmlWebPackPlugin({
            template: "./src/prj1/topics.html",
            chunks: ['topics'],
            filename: "./topics.html"
        }),
        new HtmlWebPackPlugin({
            template: "./src/prj3/juegos.html",
            chunks: ['juegos'],
            filename: "./juegos.html"
        }),
        new HtmlWebPackPlugin({
            template: "./src/prj2/viajes.html",
            chunks: ['viajes'],
            filename: "./viajes.html"
        })
    ],
    devServer: {
        hot: true,
        progress: true,
        stats: {
            cached: false
        },
        contentBase: ['./dist', __dirname + '/assets']
    },
};