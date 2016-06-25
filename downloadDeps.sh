#!/bin/bash
mkdir node_modules
mkdir -p painAndSuffering/
cd painAndSuffering/

git clone https://github.com/datasnap-io/node-mbed-dtls
git clone https://github.com/datasnap-io/node-mbed-dtls-client

rm node-mbed-dtls-client/mbedtls -rf
rm node-mbed-dtls/mbedtls -rf

cd node-mbed-dtls/

# Unconstrained dependency...
git clone https://github.com/ARMmbed/mbedtls.git
cd mbedtls/
npm install
cd ..

cp -R mbedtls ../node-mbed-dtls-client/
cd ..
cd node-mbed-dtls-client
npm install
cd ..
mv node-mbed-dtls ../node_modules/node-mbed-dtls
mv node-mbed-dtls-client ../node_modules/node-mbed-dtls-client
cd ..
rm -rf painAndSuffering
