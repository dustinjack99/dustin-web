const paths = require("./paths");
const Dotenv = require("dotenv-webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    historyApiFallback: true,
    compress: true,
    hot: "only",
    open: false,
    port: 9000,
    static: {
      directory: paths.build,
    },
  },
  module: {
    rules: [
      {
        test: /\.[js]sx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve("babel-loader"),
            options: {
              plugins: [require.resolve("react-refresh/babel")].filter(Boolean),
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|pdf|ico)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new Dotenv({
      path: "./.env.development",
    }),
    new ReactRefreshWebpackPlugin(),
  ].filter(Boolean),
});
