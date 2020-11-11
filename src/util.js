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

module.exports = {
    cast,
    reverseString,
    uriDecoder,
    defaultSelector
};
