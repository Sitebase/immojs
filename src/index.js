const fs = require('fs');
const mapper = require('./mapper.js');
const { cast }  = require('./util.js');

function parse(html) {
    //return genericClean(html).split("\n").forEach((line) => {
        //const cleanLine = line.trim().toLowerCase();

        //if (cleanLine.indexOf('bouwjaar') > -1) {
            //console.log('line', cleanLine); 
        //}
        //if (cleanLine.indexOf('construction year') == 0) {
            //console.log('line', cleanLine); 
        //}
        //console.log('TESTER', cleanLine);
    //});
    const clean = genericClean(html);
    fs.writeFileSync('output.txt', clean);
    const parsed = {};
    //console.log('clean', clean);
    //console.log('tESTER', clean);
    Object.values(mapper).forEach(mapping => {
        //console.log('mappaing', mapping);
        const re = new RegExp('(' + mapping.map.join('|') + ')\=(\\d+\\.?\\,?\\s?\\d+)', 'g');
        //console.log('re', re);
        const found = clean.match(re);
        if (found) {
            parsed[mapping.name] = found.map(v => cast(mapping.type, v.split('=')[1]))[0] // for testing take first for now
            //if (!parsed[mapping.name])
                //parsed[mapping.name] = [];
            //parsed[mapping.name].push(found[2]);
            //console.log('found', found);
        }
    });

    //console.log('parsed', parsed);
    return parsed;
}

function genericClean(html) {
    return html.toLowerCase()
            .replace(/€/g, "")
            .replace(/€/g, "")
            .replace(/(&.+;)/ig, "") //remove html entities
            .replace(/m²/g, "")
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
            .replace(/[a-z]+\s(\d)+/g, "**$&**")
            .replace(/\sja/g, "=01\r\n")
            .replace(/\snee/g, "=00\r\n");
}

module.exports = {
    parse
}
