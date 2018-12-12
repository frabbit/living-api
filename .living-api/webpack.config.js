const path = require('path');
const { sync: glob } = require('glob');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const WebpackDevServer = require('webpack-dev-server');

module.exports = {
  module: {
    rules: [{
      test: /\.(md)/,
      use: [{
        loader: "file-loader",
        options: {
          name: "[path][name].html",
          emitFile: true
        }
      }, {
        loader: 'extract-loader',
      }, {
        loader: 'html-loader',
        options: {
          //url: false
          //template: true
          //interpolate: 'require',
          //root: context,
          attrs: [
            'img:src',
            'link:href',
            //'script:src',
            'include:src'
          ]
        }
      }, {
        loader: 'living-api-loader',
      }]
    }]
  },
/*  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'theme'),
    ],
    alias: {
      'my-theme': path.join(__dirname, './theme')
    }
  },*/
  resolveLoader: {
    alias: {
      'living-api-loader': path.join(__dirname, '../lib/loader')
    }
  }
};
