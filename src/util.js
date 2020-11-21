function cast(type, value) {
    if (type == 'Number') {
        value = value
                .replace(/\.00$/, '') // fix numeric writing like 12000.00 (tweedehands)
                .replace(/\./g, '')
                .replace(',', '.');
        return (value.indexOf('.') > -1) ? parseFloat(value) : parseInt(value, 10);
    }

    if (type == 'Coordinate') {
        return parseFloat(value);
    }

    if (type == 'Boolean') 
        return Boolean(parseInt(value, 10));

    return value;
}

function reverseString(value) {
    return value.split("").reverse().join("");
}

function uriDecoder(value) {
    return decodeURIComponent(value).replace(/\+/g, ' ');
}

function defaultSelector(values) {
    return values[0];
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

module.exports = {
    cast,
    reverseString,
    uriDecoder,
    defaultSelector,
    genericClean
};
