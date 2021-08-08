import { resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { HotModuleReplacementPlugin } from 'webpack';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';

module.exports = {
  output: {
      path: resolve(__dirname, './dist'),
      filename: './[name].[hash].js',
      chunkFilename: './[name].[chunkhash].js',
      publicPath: '/'
    },
    optimization: {
      minimizer: [new UglifyJsPlugin()]
    },
     devServer: {
      port: 9090,
      inline: true,
      historyApiFallback: true,
      hot: true
    },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './client/index.html',
      filename: './index.html',
    }),
  ],
  output: {
    path: resolve(__dirname, './dist/client'),
    filename: './[name].[hash].js',
    chunkFilename: './[name].[chunkhash].js',
  },
  devServer: {
    port: process.env.WEBPACK_PORT,
    inline: true,
    historyApiFallback: true,
    hot: true,
    proxy: {
      '/api': {
        target: `http://localhost:9393`
      },
      '/auth': {
        target: `http://localhost:9393`
      },
      '/ws': {
        target: `http://localhost:9393`
      }
    }
  },
  entry: {
    main: ['react-hot-loader/patch', './client/index.js'],
    vendor: ['lodash', 'react', '@material-ui/core'],
  },
};
