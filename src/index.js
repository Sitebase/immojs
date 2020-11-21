const fs = require('fs');
const set = require('lodash/set');
const mapper = require('./mapper.js');
const sniffers = require('./sniffers.js');
const { 
    cast, 
    reverseString, 
    uriDecoder, 
    defaultSelector,
    genericClean
}  = require('./util.js');

function parse(html) {
    const clean = genericClean(html);
    fs.writeFileSync('output.txt', clean);
    const parsed = {};

    Object.values(mapper).forEach(mapping => {
        let res = null;
        if (mapping.type == 'Date') {
            re = new RegExp('(' + mapping.map.join('|') + ')\=(\\d{1,2}/\\d{1,2}/\\d{2,4})', 'g');
        } else {
            re = new RegExp('(' + mapping.map.join('|') + ')\=(\\d+\\.?\\,?\\s?\\d+)', 'g');
        }

        const found = clean.match(re);
        if (found) {
            const selector = (mapping.selector || defaultSelector);
            const out = selector(found.map(v => cast(mapping.type, v.split('=')[1]))); // for testing take first for now
            set(parsed, mapping.name, out);
        }
    });

    //if (parsed.location && parsed.location.lat) {
        //set(parsed, 'location.map', `https://www.google.com/maps/search/?api=1&query=${parsed.location.lat},${parsed.location.lng}`);
    //}

    if (!parsed.id)
        parsed.id = sniffers.findId(html);

    if (!parsed.price)
        parsed.price = sniffers.findPrice(html);
    
    if (!parsed.location)
        parsed.location = sniffers.findAddress(html);

    parsed.source = sniffers.findOriginalURL(html);

    return parsed;
}

function parseListing(html) {
    return html; 
}

module.exports = {
    parse,
    parseListing
}
