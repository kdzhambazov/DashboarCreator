const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractLESS = new ExtractTextPlugin("../style/style.css");

module.exports = {
    devtool: "inline-source-map",
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, "./src"),
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
        extractLESS
    ]
};