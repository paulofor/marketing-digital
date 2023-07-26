'use strict';

var loopback = require('loopback');
var boot = require('loopback-boot');

var https = require('https');
var fs = require('fs');

var app = module.exports = loopback();
require('loopback-counts-mixin')(app);

app.start = function() {
   // Load your SSL certificate and private key
   var options = {
    key: fs.readFileSync('/etc/letsencrypt/live/tyche.ovh/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/tyche.ovh/fullchain.pem')
  };
  // start the web server
  return https.createServer(options, app).listen(function() {
    app.emit('started');
    var baseUrl = 'https://' + app.get('host') + ':' + app.get('port');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});
