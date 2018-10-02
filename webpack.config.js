const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')


var DIST_DIR = path.resolve(__dirname ,"dist");
var SRC_DIR = path.resolve(__dirname, "src");

var jsConfig = {
  entry: SRC_DIR + "/app/index.js",
  output: {
    path: DIST_DIR ,
    publicPath: '/app/',
    filename: 'bundle.js'
  },
  module: {
  loaders: [
      {
        test: /\.js$/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-2']
        }
      }
    ]
  }
}
const scssConfig = {
  entry: SRC_DIR + '/app/index.scss',
  output: {
    path:DIST_DIR,
    publicPath: '/css/',
    filename: 'bundle.css'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        include: SRC_DIR,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      allChunks: false,
      filename: 'index.css'
    })
  ]
}

module.exports = [jsConfig , scssConfig];
// module.exports = jsConfig;
