const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: "./src/index.jsx",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                    },
                ],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],  // Cambiado de 'loaders' a 'use'
            }
        ],
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"],
    },
    devServer: {
        historyApiFallback: true,
    },
    optimization: {
        minimizer: [
            // new TerserPlugin({
            //     terserOptions: {
            //         format: {
            //             comments: false,
            //         },
            //     },
            //     extractComments: false,
            // }),
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            filename: "./index.html",
        }),
    ],
};