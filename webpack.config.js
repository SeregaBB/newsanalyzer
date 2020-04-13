const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

//const isDev = process.env.NODE_ENV === 'development';

module.exports = {
    entry: {
        main: './src/js/index.js',
        about: './src/js/about.js',
        analitycs: './src/js/analitycs.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]/[name].[chunkhash].js'
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',

                ]
            },
            {
                test: /\.(png|jpg|gif|ico|svg)$/,
                use: [
                    'file-loader?name=/images/[name].[ext]',
                    {
                        loader: 'image-webpack-loader',
                        options: {}
                    }
                ]
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                loader: 'file-loader?name=/vendor/fonts/[name].[ext]'
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name]/style.[contenthash].css'
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
                preset: ['default'],
            },
            canPrint: true
        }),
        new HtmlWebpackPlugin({
            inject: false,
            template: path.resolve(__dirname, 'src', 'index.html'),
            filename: 'index.html',
        }),
        new HtmlWebpackPlugin({
            inject: false,
            template: path.resolve(__dirname, 'src', 'about.html'),
            filename: 'about.html',
        }),
        new HtmlWebpackPlugin({
            inject: false,
            template: path.resolve(__dirname, 'src', 'analitycs.html'),
            filename: 'analitycs.html',
        }),
        new WebpackMd5Hash(),

    ]
};