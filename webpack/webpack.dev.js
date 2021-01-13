const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const dotenv = require('dotenv');

const rules = [
    {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                comments: true,
                sourceMaps: true,
                presets: ['@babel/env', '@babel/react', '@babel/typescript'],
                plugins: [
                    [
                        '@babel/plugin-proposal-class-properties',
                        {
                            loose: true,
                        },
                    ],
                    'babel-plugin-typescript-to-proptypes',
                    '@babel/transform-runtime',
                ],
            },
        },
    },
    {
        test: /\.scss$/,
        use: [
            'style-loader',
            'css-loader',
            {
                loader: 'sass-loader',
                options: {
                    sourceMap: true,
                },
            },
        ],
    },
];

module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    plugins: [
        // Override process.env with custom vars defined in .env and NODE_TARGET
        new webpack.DefinePlugin({
            'process.env': JSON.stringify({
                ...dotenv.config({ debug: true }).parsed,
                NODE_TARGET: 'development',
            }),
        }),

        // Generate html and inject stylesheets
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '..', 'src', 'templates', 'index.ejs'),
            buildTarget: 'web',
            minify: false,
        }),
    ],
    module: { rules },
    devServer: {
        contentBase: [path.resolve(__dirname, '..', 'public')],
        port: 8080,
        compress: true,
        historyApiFallback: true,
        host: '0.0.0.0',
        public: '127.0.0.1:8080',
        disableHostCheck: true,
    },
});
