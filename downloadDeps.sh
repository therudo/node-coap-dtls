#!/bin/bash
mkdir -p painAndSuffering/
cd painAndSuffering/

git clone https://github.com/spark/node-mbed-dtls
git clone https://github.com/spark/node-mbed-dtls-client

rm node-mbed-dtls-client/mbedtls -rf
rm node-mbed-dtls/mbedtls -rf

cd node-mbed-dtls/

git clone https://github.com/spark/mbedtls.git
cd mbedtls/
git checkout 7e3e6a9868b3261ba03c214ea8066c469b895f34
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
