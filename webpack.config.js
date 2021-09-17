/* eslint-env node */

/* eslint-disable-next-line @typescript-eslint/no-var-requires */
const path = require("path");
/* eslint-disable-next-line @typescript-eslint/no-var-requires */
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
/* eslint-disable-next-line @typescript-eslint/no-var-requires */
const { merge } = require("webpack-merge");

const sharedConfig = {
  mode: "production",
  optimization: {
    minimize: false,
  },
  performance: {
    hints: false,
  },
  devtool: false,
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  module: {
    rules: [
      {
        // Include ts, tsx, js, and jsx files.
        test: /\.(ts|js)x?$/,
        // exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
  externals: {
    "canadv.ash": "commonjs canadv.ash",
    kolmafia: "commonjs kolmafia",
  },
};

const scriptsConfig = merge(
  {
    entry: {
      duffo: "./src/index.ts",
      "duffo-combat": "./src/combat.ts",
      "2crs-buffs": "./src/2crs-buffs.ts",
    },
    output: {
      path: path.resolve(__dirname, "KoLmafia", "scripts", "duffel-collector"),
      filename: "[name].js",
      libraryTarget: "commonjs",
    },
  },
  sharedConfig
);

// handle the file creating the duffo UI html file
const otherRelayConfig = merge(
  {
    entry: "./src/relay_duffo.ts",
    output: {
      path: path.resolve(__dirname, "KoLmafia", "relay"),
      filename: "relay_duffo.js",
      libraryTarget: "commonjs",
    },
    module: {
      rules: [
        {
          // Include ts, tsx, js, and jsx files.
          test: /\.(ts|js)x?$/,
          // exclude: /node_modules/,
          loader: "babel-loader",
        },
      ],
    },
  },
  sharedConfig
);

// handle the react files used in the duffo html file
const relayConfig = merge(
  {
    entry: "./src/relay/index.tsx",
    output: {
      path: path.resolve(__dirname, "KoLmafia/relay/duffel-collector/"),
      filename: "duffel-collector.js",
      libraryTarget: "commonjs",
    },
    module: {
      rules: [
        {
          // Include ts, tsx, js, and jsx files.
          test: /\.(ts|js)x?$/,
          // exclude: /node_modules/,
          loader: "babel-loader",
          options: { presets: ["@babel/env", "@babel/preset-react"] },
        },
      ],
    },
  },
  sharedConfig
);

module.exports = [scriptsConfig, relayConfig, otherRelayConfig];
