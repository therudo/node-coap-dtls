var coap = require('../index.js') // or coap

var dtls_opts = {
  psk:           new Buffer('AAAAAAAAAAAAAAAA'),
  PSKIdent:      new Buffer("32323232-3232-3232-3232-323232323232"),
  key:           null,
  peerPublicKey: null
};

var req = coap.request('coaps://127.0.0.1:5684/oic/res',
  dtls_opts,
 (req) => {

    var payload = {
      my : 'payload'
    };

    req.write(JSON.stringify(payload));

    req.on('response', function(res) {
      res.pipe(process.stdout)
      process.exit(0);
    });
    
    req.end();
  }
);
