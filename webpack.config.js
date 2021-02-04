// const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// module.exports = {
//     entry: "./src/index.js",
//     output: {
//         filename: "app.js",
//         path: path.join(__dirname, "public")
//     },
//     module: {
//         rules: [{
//             loader: "babel-loader",
//             test: /\.(js|jsx)$/, 
//             exclude: /node_modules/,
//             options: {
//             presets: ["@babel/preset-env", "@babel/preset-react"],
//             plugins: [
//                 ["@babel/plugin-proposal-class-properties",
//                     {
//                         "loose": true
//                     }
//                 ],
//                 new HtmlWebpackPlugin({
//                     filename: "index.html",
//                     template: path.join(__dirname, "src", "index.html"),
//                 }),
//                 new MiniCssExtractPlugin({
//                     filename: "[name].css",
//                     chunkFilename: "[id].css",
//                 }),
//                 ],   
//             },
//             {
//                 test: /.(css|scss)$/,
//                 use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
//             }
//         ]
//     },
//     mode: "development",
//     devServer: {
//         contentBase: path.join(__dirname, "public"),
//         historyApiFallback: true
//     }
// };
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path: path.join(__dirname, "build"),
    filename: "bundle.js",
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /.(css|scss)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.join(__dirname, "src", "index.html"),
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
};