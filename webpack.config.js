const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    mode: 'production',
    output: {
        path: path.resolve(__dirname),
        filename: 'dist/bundle.js'
    },
    module: {
        rules: [
            {
                test: [/\.css$/i, /\.s[ac]ss$/i],
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: 'dist/[name].[hash].css',
            chunkFilename: 'dist/[id].[hash].css',
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
          })
    ],
};