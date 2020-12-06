const fs = require('fs');

module.exports = {
    property: {
        heylenvastgoed: {
            home: fs.readFileSync('./test/fixtures/heylenvastgoed/curl.html').toString(),
        },
        immovl: {
            home: fs.readFileSync('./test/fixtures/immovl/curl.html').toString(),
        },
        vastengoed: {
            appartment: fs.readFileSync('./test/fixtures/vastengoed/curl-app.html').toString(),
            home: fs.readFileSync('./test/fixtures/vastengoed/curl-woning.html').toString(),
        },
        immoweb: {
            home: fs.readFileSync('./test/fixtures/immoweb/curl.html').toString()
        },
        tweedehands: {
            home: fs.readFileSync('./test/fixtures/2dehands/curl.html').toString(),
            bouwland: fs.readFileSync('./test/fixtures/tweedehands-bouwland.html').toString(),
            chalet: fs.readFileSync('./test/fixtures/tweedehands-chalet-vijver.html').toString(),
            landbouwgrond: fs.readFileSync('./test/fixtures/tweedehands-landbouwgrond.html').toString(),
        },
        wijns: {
            home: fs.readFileSync('./test/fixtures/wijns-woning.html').toString(),
        },
        stefproost: {
            garage: fs.readFileSync('./test/fixtures/stefproost-garage.html').toString(),
            house: fs.readFileSync('./test/fixtures/stefproost-woning.html').toString()
        },
        immodiest: {
            bouwland: fs.readFileSync('./test/fixtures/immodiest-bouwland.html').toString(),
        },
        notaris: {
            house: fs.readFileSync('./test/fixtures/notaris-huis.html').toString(),
        },
        immoscoop: {
            house: fs.readFileSync('./test/fixtures/immoscoop-woning.html').toString(),
        },
        zimmo: {
            app: fs.readFileSync('./test/fixtures/zimmo-app.html').toString(),
            house: fs.readFileSync('./test/fixtures/zimmo-woning.html').toString()
        }
    },
    listing: {
        tweedehands: fs.readFileSync('./test/fixtures/tweedehands-list.html').toString(),
        vastengoed: fs.readFileSync('./test/fixtures/vastengoed-list.html').toString(),
        immoweb: fs.readFileSync('./test/fixtures/immoweb-list.html').toString()
    }
};
