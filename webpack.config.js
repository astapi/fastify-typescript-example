const webpack = require('webpack');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const nodeExternals = require('webpack-node-externals')

module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: 'development',
  target: 'node',

  devtool: 'inline-source-map',
  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: [
    './src/index.ts',
    // hotMiddlewareScript,
  ],
  output: {
    path: `${__dirname}/dist`,
    filename: '[name].js',
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: "ts-loader",
          options: {
            transpileOnly: true,
          },
        },
        exclude: /node_modules/
      },
    ],
  },
  resolve: {
    // 拡張子を配列で指定
    extensions: [
      '.ts', '.js', '.json', '.js'
    ],
    plugins: [
      new TsconfigPathsPlugin({ configFile: "./tsconfig.json" }) // `@/` を解決するために ts-loader に tsconfig を読み込ませる
    ],
  },
  externals: [nodeExternals()]
};
