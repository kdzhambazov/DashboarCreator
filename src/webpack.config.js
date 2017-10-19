const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    entry: "./src/app.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "lib")
    },
    devtool: "inline-source-map",
    plugins: [
        new CleanWebpackPlugin(["lib"]),
        new HtmlWebpackPlugin({
            title: "Output Management",
            template: "src/index.ejs"
        })
    ],
    devServer: {
        contentBase: "./lib"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    }
};
