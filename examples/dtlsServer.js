const coap    = require('../') // or coap
const path    = require('path');

function identityPskCallback(id) {
  let psk = '';
  console.log("Got an id ",id);
  switch (id)  {
    case 'foo':
      psk = 'asdasdadasd';
      break;
    case '32323232-3232-3232-3232-323232323232':
      psk = 'AAAAAAAAAAAAAAAA';
      break;
    default:
      psk = '';
      break;
  }

  return psk;
}

const dtls_opts = {
  key: path.join(__dirname, '../test/private.der'),
  debug: 1,
  identityPskCallback : identityPskCallback,
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
