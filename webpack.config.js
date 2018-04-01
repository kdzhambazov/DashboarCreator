const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const extractLESS = new ExtractTextPlugin("../style/style.css");
const cleanPlugin = new CleanWebpackPlugin(["lib"]);

module.exports = {
    devtool: "inline-source-map",
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, "./dist/javascript"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.less$/i,
                use: extractLESS.extract({
                    use: ["css-loader", "less-loader"]
                })
            }
        ]
    },
    plugins: [
        extractLESS,
        cleanPlugin
    ]
};