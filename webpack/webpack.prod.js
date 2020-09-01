const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const workboxPlugin = require('workbox-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Visualizer = require('webpack-visualizer-plugin');
const StatsWriterPlugin = require('webpack-stats-plugin').StatsWriterPlugin;
const webpack = require('webpack');
const dotenv = require('dotenv');

const rules = [
    {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                comments: true, // preserve webpack config comments
                sourceMaps: false,
                presets: ['@babel/preset-env', '@babel/react', '@babel/typescript'],
                plugins: [
                    [
                        '@babel/plugin-proposal-class-properties',
                        {
                            loose: true,
                        },
                    ],
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
    mode: 'production',
    output: {
        path: path.resolve(__dirname, '../', 'build'),
        filename: 'bundle.[contentHash].js',
        chunkFilename: 'dynamic/[name].[contentHash].js',
    },
    module: { rules },
    plugins: [
        // Clean build folder
        new CleanWebpackPlugin(),

        // Override process.env with custom vars defined in .env and NODE_TARGET
        new webpack.DefinePlugin({
            'process.env': JSON.stringify({
                ...dotenv.config().parsed,
                NODE_TARGET: 'production',
            }),
        }),

        // Generate index
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../', 'src', 'templates', 'index.ejs'),
            buildTarget: 'web',
            minify: true,
            inject: true,
        }),

        // Copy static files
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, '../', 'public'),
                    to: '.',
                },
            ],
        }),

        // Bundle statistics
        new StatsWriterPlugin({
            filename: '../build_stats/log.json',
            fields: null,
            stats: { chunkModules: true },
        }),
        new Visualizer({
            filename: '../build_stats/webpack.statistics.html',
        }),

        // Generate service worker and define runtime caching
        new workboxPlugin.GenerateSW({
            swDest: 'service-worker.js',
            clientsClaim: true,
            skipWaiting: true,
            exclude: [/\.map$/, /manifest\.json$/, /build_stats/, /sitemap\.xml/, /robots\.txt/],
            cleanupOutdatedCaches: true,
            navigateFallback: 'index.html',
            maximumFileSizeToCacheInBytes: 50 * 1024 * 1024,

            // navigationPreload: true,
            // runtimeCaching: [
            //     {
            // User avatars from firebase storage
            // urlPattern: /.*firebasestorage.*avatars/,
            // handler: 'CacheFirst',
            // options: {
            //     cacheName: 'avatars',
            //     expiration: {
            //         maxEntries: 100,
            //         maxAgeSeconds: 60 * 20,
            //     },
            //     cacheableResponse: {
            //         statuses: [0, 200], // ** Required
            //     },
            // },
            //     },
            // ],
        }),
    ],
});
