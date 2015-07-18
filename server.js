var webpack = require('webpack');
var config = require('./webpack.config');
var WebpackDevServer = require('webpack-dev-server');

// configuration
var port = 3000;
var host = 'localhost';
var message = 'Listening at http://' + host + ':' + port;

// create a compiler
var compiler = webpack(config);

// create a dev server
var server = new WebpackDevServer(compiler, {
  hot: true,
  publicPath: config.output.publicPath,
  historyApiFallback: true
});

// server initialization callback
function init (err) {
  if (err) { console.error(err); }
  console.log(message);
}

// kick off the server
server.listen(port, host, init);
