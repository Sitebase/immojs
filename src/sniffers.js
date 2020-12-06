const URL = require('url').URL;

/**
 * Sniffers are a little more advanced code
 * than the mappers which just do text based searches
 *
 * Sniffer use the HTML as base to find potential interesting
 * info in a more advanced way
 */
const { uriDecoder }  = require('./util.js');

function findId(source) {
    const res = source.match(/<meta[^>]+property="og:url"\scontent="([^")]*)"/);
    
    if (res) {
        const idmatch = res[1].match(/[A-Z\d]{4,}/g);
        if (idmatch) {

            // find longest numeric match because these matches will also contain postalcodes
            return idmatch.sort((a, b) => b.length - a.length)[0];
        }
    }
}

function findAddress(source) {

    // OG
    const og = source.match(/<meta\sproperty="og:street_address"\scontent="(.*)"/);
    
    if (og)
        return { address: og[1] };

    // Google maps
    const maps = source.match(/maps\/place\/(.*?)\/?\"/);

    if (maps) {
        const address = maps[1];
        if (maps[1].match(/\d+\.\d+\,\d+\.\d+/)) {
            return { 
                lat: parseFloat(address.split(',')[0]),
                lng: parseFloat(address.split(',')[1])
            };
        } else {
            return { address: uriDecoder(address) };
        }
    }

    // 2dehands
    const label2 = source.match(/<meta\sname="twitter:label2"\scontent="(.*)"/);
        
    if (label2)
        return { address: label2[1] };

}

function findPrice(source) {
    const price = source.match(/€\s{0,}\d+\.\d+/);

    if (!price)
        return;

    return parseInt(price[0].replace(/[€,.]/g, '').trim(), 10);
}

function findOriginalURL(source) {
    const res = source.match(/<meta[^>]+property="og:url"\scontent="([^")]*)"/);

    if (!res)
        return;

    return res[1];
}

function findBaseURL(source) {
    const res = source.match(/<meta[^>]+property="og:url"\scontent="([^")]*)"/);

    if (!res)
        return;

    return new URL(res[1]).origin;
}

module.exports = {
    findId,
    findAddress,
    findPrice,
    findOriginalURL,
    findBaseURL
}
