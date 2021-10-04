import HtmlWebpackPlugin from 'html-webpack-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import ReactRefreshTypeScript from 'react-refresh-typescript';

// Todo: Delete babel and all babel dependacies when we dont need that node server anymore
const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()],
    splitChunks: {
      chunks: 'all'
    },
    runtimeChunk: 'single'
  },
  mode: isDevelopment ? 'development' : 'production',
  devServer: {
    port: process.env.WEBPACK_PORT,
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
    },
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve('ts-loader'),
            options: {
              getCustomTransformers: () => ({
                before: isDevelopment ? [ReactRefreshTypeScript()] : []
              }),
              // `ts-loader` does not work with HMR unless `transpileOnly` is used.
              transpileOnly: isDevelopment
            }
          }
        ]
      },
      { enforce: 'pre',
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
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/index.html',
      filename: './index.html'
    }),
    isDevelopment && new ReactRefreshWebpackPlugin()
  ],
  entry: {
    main: ['./client/index.tsx'],
    vendor: ['lodash', 'react', '@material-ui/core']
  },
  devtool: 'source-map'
};
