const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');
var HtmlWebpackPlugin = require('html-webpack-plugin');
// const workboxPlugin = require('workbox-webpack-plugin');
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
    // {
    //     test: /\.css$/,
    //     use: [
    //         'style-loader',
    //         // {
    //         //     loader: MiniCssExtractPlugin.loader,
    //         //     options: {
    //         //         publicPath
    //         //     },
    //         //   },
    //         // MiniCssExtractPlugin.loader,
    //         'css-loader',
    //     ],
    // },
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
            template: path.resolve(__dirname, '../', 'src', 'templates', 'index.ejs'),
            buildTarget: 'web',
            minify: false,
        }),

        // Generate service worker and define runtime caching
        // new workboxPlugin.GenerateSW({
        //     swDest: 'service-worker.js',
        //     clientsClaim: true,
        //     skipWaiting: true,
        //     exclude: [/\.map$/, /manifest\.json$/],
        //     cleanupOutdatedCaches: true,
        //     navigateFallback: 'index.html',
        //     maximumFileSizeToCacheInBytes: 50 * 1024 * 1024,

        //     navigationPreload: true,
        //     runtimeCaching: [
        //         {
        //             // User avatars from firebase storage
        //             urlPattern: /.*firebasestorage.*avatars/,
        //             handler: 'CacheFirst',
        //             options: {
        //                 cacheName: 'avatars',
        //                 expiration: {
        //                     maxEntries: 100,
        //                     maxAgeSeconds: 60 * 20,
        //                 },
        //                 cacheableResponse: {
        //                     statuses: [0, 200], // ** Required
        //                 },
        //             },
        //         },
        //     ],

        // }),
    ],
    module: { rules },
    devServer: {
        contentBase: [path.resolve(__dirname, '../', 'public')],
        port: 8080,
        compress: true,
        historyApiFallback: true,
        host: '0.0.0.0',
        public: '127.0.0.1:8080',
        disableHostCheck: true,
    },
});
