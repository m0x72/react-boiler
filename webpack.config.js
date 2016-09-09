// For instructions about this file refer to
// webpack and webpack-hot-middleware documentation
var webpack = require('webpack');
var path = require('path');
//var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require("autoprefixer");

module.exports = {
  debug: true,
  devtool: '#eval-source-map',
  context: path.join(__dirname, 'app', 'js'),

  entry: [
    'react-hot-loader/patch',
    //'webpack/hot/dev-server',
    'webpack-hot-middleware/client?reload=true',
    './main'
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/js/',
    filename: 'bundle.js'
  },

  plugins: [
    //new ExtractTextPlugin("styles.css"),
    //new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    //new webpack.NoErrorsPlugin()
  ],

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel'] },
      { test: /\.s?css$/, exclude: /node_modules/, include: /app\/css/, 
        loaders: 'style!css?sourceMap&root=.!postcss!sass?sourceMap'
        /* // Worth for production build 
        loaders: ExtractTextPlugin.extract({ 
            fallbackLoader: "style",
            loader: 'css?sourceMap!postcss!sass?sourceMap'
        }) 
        */
      },
      { test: /\.(jpe?g|png|gif|svg|webp)$/i, exclude: /node_modules/, include: /static\/imgs/,
        loader: "file-loader"
      }
    ]
  },

  postcss: function () {
      return [ autoprefixer({ browsers: ['last 2 versions', 'iOS 7-9', 'Android 4-4.4.4', 'ie_mob 10-11'] }) ];
  }
};
