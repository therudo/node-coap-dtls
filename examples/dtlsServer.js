const coap    = require('../') // or coap
const path    = require('path');

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
  res.end('Hello ' + req.url.split('/')[1] + '\n')
})

server.listen(function() {
  console.log('server started')
});
