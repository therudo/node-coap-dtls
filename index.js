/*
 * Copyright (c) 2013-2015 node-coap contributors.
 *
 * node-coap is licensed under an MIT +no-false-attribs license.
 * All rights not explicitly granted in the MIT license are reserved.
 * See the included LICENSE file for more details.
 */

var optionsConv = require('./lib/option_converter'),
  Server = require('./lib/server'),
  Agent = require('./lib/agent'),
  parameters = require('./lib/parameters'),
  net = require('net'),
  URL = require('url'),
  globalAgent = null; //new Agent({type: 'udp4'}),
  globalAgentV6 = null; //new Agent({type: 'udp6'})


module.exports.request = function(url, dtlsOpts, callback) {
  var agent, req, ipv6, _dtls
  if (typeof url === 'string')
    url = URL.parse(url)

  console.log("sending:" + JSON.stringify(url, 4));

  if ((url.protocol === 'coaps:') || (typeof dtlsOps === 'Object')) {
    // DTLS CONFIG
    _dtls = {
      host: url.hostname,
      port: url.port || 5684
    }
    Object.assign(_dtls, dtlsOpts);

    url.agent = new Agent({
      type: 'udp4',
      host: url.hostname,
      port: url.port || 5684
    }, _dtls)
  }

  ipv6 = net.isIPv6(url.hostname || url.host)

  if (url.agent) {
    agent = url.agent
  } else {
    agent = ipv6 ? globalAgentV6 : globalAgent
  }

  // dtls wait
  // setTimeout(() => {
  //   callback(agent.request(url, _dtls))
  // }, 10000)
  agent.request(url, _dtls);
}

module.exports.createServer = Server

module.exports.Agent = Agent
module.exports.globalAgent = globalAgent
module.exports.globalAgentIPv6 = globalAgentV6

module.exports.registerOption = optionsConv.registerOption
module.exports.registerFormat = optionsConv.registerFormat
module.exports.ignoreOption = optionsConv.ignoreOption

module.exports.parameters = parameters
module.exports.updateTiming = parameters.refreshTiming
module.exports.defaultTiming = parameters.defaultTiming
