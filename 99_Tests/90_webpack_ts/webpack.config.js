const path = require("path");

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "src", "index.ts"),
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      }
    ],
  },
  externals: {
    "puppeteer-core": 'require("puppeteer-core")',
  },
};
