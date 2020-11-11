const assert = require('assert');
const fixtures = require('./fixtures/index.js');
const { parse } = require('../src/index.js');

//console.log(fixtures);

describe('Image source functional tests', () => {

    before(() => {
    });

    it('Should return image as is when no options are specified', () => {
        const results = [];
        Object.keys(fixtures).forEach(key => {
            const fixture = fixtures[key];
            const res = parse(fixture);
            res.source = key;
            results.push(res);
        });


        //const res = parse("bouwjaar: 1988\r\nconstruction year : 1999");
        //res.source = "test";
        //results.push(res);

        console.table(results);
        //const res = parse(fixtures.immoweb);
        //const res = parse("Testsfa epc waarde : 982 m\r\nTEST shite face: 675a er \r\n Bouwjaar 1927");
        //console.log('res', res);
        //console.table([{name: 'wim', price: 1000}, {name: 'jefke', price: 38}]);
        assert.ok(false);
    });

    it('Should be able to resize images', () => {
        assert.ok(true);
    });

})
