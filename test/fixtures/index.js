const fs = require('fs');

module.exports = {
    heylenvastgoed: fs.readFileSync('./test/fixtures/heylenvastgoed/curl.html').toString(),
    immovl: fs.readFileSync('./test/fixtures/immovl/curl.html').toString(),
    vastengoed: fs.readFileSync('./test/fixtures/vastengoed/curl-app.html').toString(),
    immoweb: fs.readFileSync('./test/fixtures/immoweb/curl.html').toString(),
    tweedehands: fs.readFileSync('./test/fixtures/2dehands/curl.html').toString(),
    wijns: fs.readFileSync('./test/fixtures/wijns-woning.html').toString(),
    stefproos_garage: fs.readFileSync('./test/fixtures/stefproost-garage.html').toString(),
    stefproos_woning: fs.readFileSync('./test/fixtures/stefproost-woning.html').toString(),
    tweedehands_bouwland: fs.readFileSync('./test/fixtures/tweedehands-bouwland.html').toString(),
    tweedehands_chalet: fs.readFileSync('./test/fixtures/tweedehands-chalet-vijver.html').toString(),
    tweedehands_landbouwgrond: fs.readFileSync('./test/fixtures/tweedehands-landbouwgrond.html').toString(),
    notaris_huis: fs.readFileSync('./test/fixtures/notaris-huis.html').toString(),
   immoscoop_woning: fs.readFileSync('./test/fixtures/immoscoop-woning.html').toString(),
};
