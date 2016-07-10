const coap  = require('../') // or coap
    , req   = coap.request('coaps://localhost/Matteo')

req.on('response', function(res) {
  res.pipe(process.stdout)
})

req.end()
