const assert = require('assert');
const { 
    findId,
    findAddress, 
    findPrice,
    findOriginalURL
} = require('../src/sniffers.js');

describe('Advanced detail finders', () => {

    it('Should be able to find property id', () => {
        assert.equal('321123', findId('bla <meta property="og:url" content="https://www.test.com/cat/12/321123" />'));
    });

    it('Should be able to find address in og tag', () => {
        assert.equal('address', findAddress('bla <meta property="og:street_address" content="address" />').address);
    });

    it('Should be able to find coordinates in google maps url', () => {
        const coordinates = findAddress('<iframe src="https://www.google.com/maps/place/51.123,4.123" />');
        assert.equal(51.123, coordinates.lat);
        assert.equal(4.123, coordinates.lng);
    });

    it('Should be able to find address in google maps url', () => {
        const res = findAddress('<iframe src="https://www.google.com/maps/place/an%20address" />');
        assert.equal('an address', res.address);
    });

    it('Should be able to find address in og tag label2', () => {
        assert.equal('my address', findAddress('bla <meta name="twitter:label2" content="my address" />').address);
    });

    it('Should be able to find addressess', () => {
        assert.equal(70000, findPrice('Hello<i> € 70.000 bl'));
        assert.equal(7000, findPrice('Hello<i> €7.000 bl'));
    });

    it('Should be able to find original url', () => {
        assert.equal('test', findOriginalURL('bla <meta property="og:url" content="test" />'));
    });

})
