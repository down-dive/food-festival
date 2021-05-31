const path = require('path');
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const webpack = require("webpack");

module.exports = {
    entry: {
        app: "./assets/js/script.js",
        events: "./assets/js/events.js",
        schedule: "./assets/js/schedule.js",
        tickets: "./assets/js/tickets.js"
      },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.bundle.js'
  },
  mode: 'development',
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: "static", // the report outputs to an HTML file in the dist folder
    })
  ],
};