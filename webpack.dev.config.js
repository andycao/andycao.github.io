const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
  plugins: [    
    new HtmlWebpackPlugin({
      template: './index.html',
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    compress: false,
    port: 3000
  }
};