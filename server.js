const express = require('express');
const webpack = require('webpack');
const path = require('path');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
const staticDir = path.resolve(__dirname, 'dist')
console.log(staticDir)
const optionsObj = {publicPath: '/', stats: {colors: true}}

app.use(webpackDevMiddleware(compiler, optionsObj))
app.use('/', express.static(staticDir))


app.get('/', (req, res) => {
  res.sendFile(path.resolve(staticDir, 'index.html'))
})

// Serve the files on port 3000.
app.listen(8080, function () {
  console.log('Example app listening on port 8080!\n');
});
