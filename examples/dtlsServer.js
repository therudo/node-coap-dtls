const coap    = require('../') // or coap
const path    = require('path');

var SegfaultHandler = require('segfault-handler');

SegfaultHandler.registerHandler("crash.log"); // With no argument, SegfaultHandler will generate a generic log file name

const dtls_opts = {
  key: path.join(__dirname, '../test/private.der'),
  debug: 1,
  handshakeTimeoutMin: 3000
};


const server  = coap.createServer(
  {
    dtls: dtls_opts,
    port: 5684,
  }
);

server.on('request', function(req, res) {
  console.log('request arrives:\n'+JSON.stringify(req));
  res.end('Hello ' + req.url.split('/')[1] + '\n')
})

server.listen(function() {
  console.log('server started')
});
