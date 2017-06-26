'use strict';

const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/App.jsx',
    vendor: [
      'react', 'react-dom', 'react-router', 'react-bootstrap', 'react-router-bootstrap',
      'isomorphic-fetch', 'react-select'
    ],
  },
  output: {
    path: __dirname + '/static',
    filename: 'app.bundle.js',
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
        },
      },
    ],
  },
  devServer: {
    port: 4741,
    contentBase: 'static',
    proxy: {
      '**': {
        target: 'http://localhost:3000',
      },
    },
  },
};
