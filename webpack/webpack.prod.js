const merge = require("webpack-merge");
const common = require("./webpack.common");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = merge(common, {
    mode: "production",
    entry: "./src/index.js",
    output: {
        path: path.resolve(
            // "C:/Users/SaxyN/OneDrive/Desktop/ACTUAL UI/pma-subs/dist"
            "C:/FXServer/server-data/resources/pma-subs/dist"
        ),
        filename: "index.js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: "public/index.html",
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: "src/assets",
                    to: path.resolve(
                        // "C:/Users/SaxyN/OneDrive/Desktop/ACTUAL UI/pma-subs/src/assets"
                        "C:/FXServer/server-data/resources/pma-subs/dist/img"
                    ),
                },
            ],
        }),
    ],
    devtool: "inline-source-map",
});