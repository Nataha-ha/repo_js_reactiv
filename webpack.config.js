const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "app.js",
        path: path.join(__dirname, "public")
    },
    module: {
        rules: [{
            loader: "babel-loader",
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            options: {
                presets: ["@babel/preset-env", "@babel/preset-react"]
            }
        }]
    },
    mode: "development",
    devServer: {
        contentBase: path.join(__dirname, "public")
    }
};