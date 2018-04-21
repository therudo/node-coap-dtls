var coap = require('../index.js') // or coap

var dtls_opts = {
  psk:           new Buffer('AAAAAAAAAAAAAAAA'),
  PSKIdent:      new Buffer("32323232-3232-3232-3232-323232323232"),
  key:           null,
  peerPublicKey: null
};

var params = {
	"protocol":"coaps:",
	"port":"51846",
	"hostname":"2001:470:1f12:8c8:2::2000",
	"query":"id",
	"pathname":"/info"
};

var req = coap.request(
  params,
  dtls_opts,
 (req) => {
    req.on('response', function(res) {
	console.log("Response using params :",res.payload.toString());
    });
    
    req.end();
  }
);

var url = "coaps://[2001:470:1f12:8c8:2::2000]:51846/info?id";
var req = coap.request(
  url,
  dtls_opts,
 (req) => {
    req.on('response', function(res) {
	console.log("Response using url :",res.payload.toString());
    });

    req.end();
  }
);
