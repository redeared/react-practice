const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = function (env, options) {

    const isProduction = process.env.NODE_ENV ? process.env.NODE_ENV.trim()  === "production": false;

    const config = {
        context: path.join(__dirname, "src"),
        entry: "./index",
        mode: isProduction ? "production" : "development",
        devtool: isProduction ? "none" : "source-map",

        resolve: {
            extensions: [".js", ".jsx"]
        },

        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    loader: "babel-loader",
                    exclude: /node_modules/
                },
            ]
        },

        plugins: [
            new HtmlWebpackPlugin({
                title: "App",
                hash: true,
                template: "./index.html"
            })
        ],

        devServer: {
            contentBase: "./dist"
        }
    };

    return config;
};