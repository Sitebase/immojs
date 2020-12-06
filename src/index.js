const fs = require('fs');
const URL = require('url').URL;
const cheerio = require('cheerio');
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

const propertyURLMatches = [
    'immo-aanbod', // vastengoed
    'classified', // immoweb -- shitty no js blocking
    '\/a\/immo\/', // 2dehands
];
// TODO remove all urls that don't have an id because these are category urls probably
function parseListing(html, forceSourceURL = null) {
    const sourceURL = forceSourceURL || sniffers.findOriginalURL(html);
    const propertyRE = new RegExp('(' + propertyURLMatches.join('|') + ')', 'g');
    const links = [];

    const baseURL = sniffers.findBaseURL(html);
    const $ = cheerio.load(html);
    $('a').each(function(i, elem) {
        const href = $(this).prop('href');
        if (href && href.match(propertyRE)) {
            const prefix = href.indexOf('https://') > -1 ? '' : baseURL;
            const link = prefix + href;

            if (link.indexOf(baseURL) == 0)
                links.push(link);
        }
    });
    return links;
}

module.exports = {
    parse,
    parseListing
}
