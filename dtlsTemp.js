var coap = require('./index.js') // or coap

var req = coap.request('coaps://10.96.163.38:5684/oic/res', {})

req.on('response', function(res) {
  res.pipe(process.stdout)
})

req.end()
