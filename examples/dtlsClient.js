var coap = require('../index.js') // or coap

var dtls_opts = {
  psk:           new Buffer('AAAAAAAAAAAAAAAA'),
  PSKIdent:      new Buffer("32323232-3232-3232-3232-323232323232"),
  //host:          process.argv[2] || 'localhost',
  //port:          process.argv[3] || 5684,
  key:           null,
  peerPublicKey: null,
  debug:         4
};

var req = coap.request('coaps://127.0.0.1:5684/oic/res',
                        dtls_opts, (req) => {
                          req.on('response', function(res) {
                            res.pipe(process.stdout)
                          });
                          req.end()
                        }
                      );

