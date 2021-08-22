import HtmlWebpackPlugin from 'html-webpack-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';

// Todo: Delete babel and all babel dependacies when we dont need that node server anymore

module.exports = {
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()],
    splitChunks: {
      chunks: 'all'
    }
  },
  mode: 'development', // change this
  devServer: {
    port: process.env.WEBPACK_PORT,
    historyApiFallback: true,
    hot: true,
    proxy: {
      '/api': {
        target: `http://localhost:9393`,
      },
      '/auth': {
        target: `http://localhost:9393`,
      },
      '/ws': {
        target: `http://localhost:9393`,
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        use: { loader: 'ts-loader' },
        exclude: /node_modules/
      },
      { enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'source-map-loader'
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/index.html',
      filename: './index.html',
    }),
  ],
  entry: {
    main: ['react-hot-loader/patch', './client/index.tsx'],
    vendor: ['lodash', 'react', '@material-ui/core'],
  },
  devtool: 'source-map'
};
