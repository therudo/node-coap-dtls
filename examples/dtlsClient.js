var coap = require('../index.js') // or coap


var SegfaultHandler = require('segfault-handler');

SegfaultHandler.registerHandler("crash.log"); // With no argument, SegfaultHandler will generate a generic log file name


var dtls_opts = {
  psk:           new Buffer('AAAAAAAAAAAAAAAA'),
  PSKIdent:      new Buffer("32323232-3232-3232-3232-323232323232"),
  key:           null,
  peerPublicKey: null
};

var req = coap.request('coaps://127.0.0.1:5684/oic/res',
                        dtls_opts, (req) => {
                          req.on('response', function(res) {
                            res.pipe(process.stdout)
                          });
                          req.end()
                        }
                      );

