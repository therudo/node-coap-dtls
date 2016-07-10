#!/bin/bash
mkdir node_modules
mkdir -p painAndSuffering/
cd painAndSuffering/

git clone https://github.com/datasnap-io/node-mbed-dtls

rm node-mbed-dtls/mbedtls -rf

cd node-mbed-dtls/

# Unconstrained dependency...
git clone https://github.com/ARMmbed/mbedtls.git
cd mbedtls/
npm install
cd ..

mv node-mbed-dtls ../node_modules/node-mbed-dtls
cd ..
rm -rf painAndSuffering
