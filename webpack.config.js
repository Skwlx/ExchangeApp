const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const MediaQueryPlugin = require('media-query-plugin');

module.exports = {
    entry: './src/js/index.js',

    mode: 'development',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js',
        publicPath: '/'
    },

    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 3000,
        hot: true,
    },

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                          esModule: true,
                        },
                      },
                    MediaQueryPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ]
            },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({template: './public/index.html'}),
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: 'styles/main.css',
        }), 
        new MediaQueryPlugin({
            include: [
                'example'
            ],
            queries: {
                'print, screen and (min-width: 75em)': 'desktop'
            }
        })
    ]
};