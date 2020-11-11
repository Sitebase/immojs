function cast(type, value) {
    if (type == 'Number') {
        value = value.replace(/\./g, '').replace(',', '.');
        return (value.indexOf('.') > -1) ? parseFloat(value) : parseInt(value, 10);
    }

    if (type == 'Boolean') 
        return Boolean(parseInt(value, 10));

    return value;
}

module.exports = {
    cast
};
