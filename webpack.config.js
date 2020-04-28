const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    mode: "production",
    output: {
        path: path.resolve(__dirname),
        filename: "dist/bundle.[hash].js",
        chunkFilename: "dist/[name].bundle.[hash].js",
    },
    module: {
        rules: [
            {
                test: [/\.css$/i, /\.s[ac]ss$/i],
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ["file-loader"],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "dist/[name].[hash:8].css",
            chunkFilename: "dist/[id].[hash:8].css",
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
            minify: {
                collapseWhitespace: true,
            },
        }),
    ],
};
