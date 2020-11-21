const fs = require('fs');
const set = require('lodash/set');
const mapper = require('./mapper.js');
const { cast, reverseString, uriDecoder, defaultSelector }  = require('./util.js');

function parse(html) {
    const clean = genericClean(html);
    fs.writeFileSync('output.txt', clean);
    const parsed = {};
    //console.log('clean', clean);
    //console.log('tESTER', clean);
    Object.values(mapper).forEach(mapping => {
        //console.log('mappaing', mapping);
        let res = null;
        if (mapping.type == 'Date') {
            re = new RegExp('(' + mapping.map.join('|') + ')\=(\\d{1,2}/\\d{1,2}/\\d{2,4})', 'g');
        } else {
            re = new RegExp('(' + mapping.map.join('|') + ')\=(\\d+\\.?\\,?\\s?\\d+)', 'g');
        }
        //console.log('re', re);
        const found = clean.match(re);
        if (found) {
            const selector = (mapping.selector || defaultSelector);
            const out = selector(found.map(v => cast(mapping.type, v.split('=')[1]))); // for testing take first for now
            set(parsed, mapping.name, out);
            //parsed[mapping.name] = 
            //if (!parsed[mapping.name])
                //parsed[mapping.name] = [];
            //parsed[mapping.name].push(found[2]);
            //console.log('found', found);
        }
    });
//console.log('parsed', parsed);
    // backfillers
    if (!parsed.price) {
        const price = html.match(/€\s+\d+\.\d+/);
        if (price) {
            const cleanPrice = parseInt(price[0].replace(/[€,.]/g, '').trim(), 10);
            //console.log('res', cleanPrice);
            parsed.price = cleanPrice;
        }
    }
    if (!parsed.id) {
        const res = html.match(/<meta[^>]+property="og:url"\scontent="([^")]*)"/);
        
        if (res) {
            const idmatch = res[1].match(/[A-Z\d]{4,}/g);
            if (idmatch) {
                // find longest numeric match because these matches will also contain postalcodes
                parsed.id = idmatch.sort((a, b) => b.length - a.length)[0];
            }
        }
    }
    if (!parsed.location) {
        const res = html.match(/<meta\sproperty="og:street_address"\scontent="(.*)"/);
        
        if (res) {
            set(parsed, 'location.address', res[1]);
        }
    }
    if (!parsed.location) {
        const res = html.match(/maps\/place\/(.*?)\/?\"/);
        
        if (res) {
            const address = res[1];
            //console.log('res', res[1]);
            if (res[1].match(/\d+\.\d+\,\d+\.\d+/)) {
                set(parsed, 'location.lat', parseFloat(address.split(',')[0]));
                set(parsed, 'location.lng', parseFloat(address.split(',')[1]));
            } else {
                set(parsed, 'location.address', uriDecoder(address));
            }
        }
    }
    if (!parsed.location) { //tweedehands
        const res = html.match(/<meta\sname="twitter:label2"\scontent="(.*)"/);
        
        if (res) {
            set(parsed, 'location.address', res[1]);
        }
    }


    if (parsed.location && parsed.location.lat) {
        set(parsed, 'location.map', `https://www.google.com/maps/search/?api=1&query=${parsed.location.lat},${parsed.location.lng}`);
    }

    return parsed;
}

function genericClean(html) {
    return html.toLowerCase()
            .replace(/€/g, "")
            .replace(/€/g, "")
            //.replace(/\(/g, "")
            //.replace(/\)/g, "")
            .replace(/(&.+;)/ig, "") //remove html entities
            .replace(/m²/g, "")
            .replace(/\(jaar\)/g, "")
            //.replace(/\./g, "") // prevent point numbers being seen as multiple numbers
            //.replace(/\,/g, "") // prevent comma numbers being seen as multiple numbers
            .replace(/\s=\s/g, " ") // JSON prepare
            .replace(/":\s?"/g, "=") // JSON prepare
            .replace(/":/g, "=") // JSON prepare
            .replace(/",\s?"/g, "\r\n") // JSON prepare
            //.replace(/: /g, " ")
                
            .replace(/<meta/g, "") // keep meta tags in because they contain usefull info   
            .replace(/<(.|\n)*?>/g, "") // strip html tags
            .replace(/(\r\n|\n|\r)/gm, "")
            //.replace(/\s+/g, " ")
            .replace(/\s+/g, ' ')
            .replace(/:?\s?(\d+\.?\,?\s?\d+)/g, "$&\r\n")
            //.replace(/,/g, "\n")
            //.replace(/"/g, "");
            .replace(/\s:/g, ":")
            .replace(/\s\d+/g, "=$&")
            .replace(/:?=\s?/g, "=")
            .replace(/:/g, "=")
            //.replace(/[a-z]+\s(\d)+/g, "**$&**")
            .replace(/=?\sja/g, "=01\r\n")
            .replace(/=?\snee/g, "=00\r\n")
            .replace(/\s?[\(\)\/]/g, '')
            .replace(/\r(\d)/g, "/$1")
}

function parseListing(html) {
    return html; 
}

module.exports = {
    parse,
    parseListing
}
