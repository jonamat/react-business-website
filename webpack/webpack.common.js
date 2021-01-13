const path = require('path');
const assetsFolderName = 'assets';

const rules = [
    {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {
            eslintPath: 'eslint',
        },
    },
    {
        test: /\.(png|jpe?g|gif|webp)$/i,
        use: {
            loader: 'file-loader',
            options: {
                name: '[name].[contenthash].[ext]',
                outputPath: assetsFolderName,
            },
        },
    },
    {
        test: /\.woff2$/i,
        use: {
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                outputPath: assetsFolderName,
            },
        },
    },
    {
        test: /\.svg$/,
        use: [
            {
                loader: '@svgr/webpack',
                options: {
                    svgoConfig: {
                        // Preserve layer ids
                        plugins: [{ cleanupIDs: false, prefixIds: false }],
                    },
                },
            },
        ],
    },
];

module.exports = {
    entry: path.resolve(__dirname, '..', 'src', 'index.tsx'),
    resolve: { extensions: ['.ts', '.tsx', '.js'] },
    module: { rules },
};
