const assert = require('assert');
const fixtures = require('./fixtures/index.js');
const { parse, parseListing } = require('../src/index.js');

//console.log(fixtures);
const expectPrice = (property) => assert.equal(typeof property.price, 'number')
const expectLandSurface = (property) => assert.equal(typeof property.landSurface, 'number')
const expectHabitableSurface = (property) => assert.equal(typeof property.habitableSurface, 'number')
const expectId = (property) => assert.equal(typeof property.id, 'string')
const expectAddress = (property) => {
    if (property.location && property.location.address)
        assert.equal(typeof property.location.address, 'string');
    else if (property.location && property.location.lng) {
        assert.equal(typeof property.location.lat, 'number');
        assert.equal(typeof property.location.lng, 'number');
    } else {
        assert.ok(false, 'No address or coordinates found');
    }
}

describe('Image source functional tests', () => {

    before(() => {
    });

    //it('Should parse immo property', () => {
        //const results = [];
        //Object.keys(fixtures.property).forEach(key => {
            //const fixture = fixtures.property[key];
            //const res = parse(fixture);
            //res.source = key;
            //results.push(res);
        //});

        //console.table(results);
        //assert.ok(false);
    //});

    it('Should parse Heylen Vastgoed (Huis)', () => {
        const result = parse(fixtures.property.heylenvastgoed.home);

        expectPrice(result);
        expectLandSurface(result);
        expectHabitableSurface(result);
        expectId(result);
    });

    it('Should parse ImmoVL (Huis)', () => {
        const result = parse(fixtures.property.immovl.home);

        expectPrice(result);
        expectLandSurface(result);
        expectHabitableSurface(result);
        expectId(result);
        expectAddress(result);
    });

    it('Should parse Vastendgoed (Huis)', () => {
        const result = parse(fixtures.property.vastengoed.home);

        expectPrice(result);
        expectLandSurface(result);
        expectHabitableSurface(result);
        expectId(result);
        expectAddress(result);
    });

    it('Should parse Vastendgoed (Appartment)', () => {
        const result = parse(fixtures.property.vastengoed.appartment);

        expectPrice(result);
        expectHabitableSurface(result);
        expectId(result);
        expectAddress(result);
    });

    it('Should parse Immoweb (Huis)', () => {
        const result = parse(fixtures.property.immoweb.home);

        expectPrice(result);
        expectLandSurface(result);
        expectHabitableSurface(result);
        expectId(result);
    });

    it('Should parse 2dehands (Huis)', () => {
        const result = parse(fixtures.property.tweedehands.home);

        expectPrice(result);
        expectLandSurface(result);
        expectId(result);
        expectAddress(result);
    });

    it('Should parse 2dehands (Bouwland)', () => {
        const result = parse(fixtures.property.tweedehands.bouwland);

        expectPrice(result);
        expectLandSurface(result);
        expectHabitableSurface(result);
        expectId(result);
        expectAddress(result);
    });

    it('Should parse 2dehands (Chalet)', () => {
        const result = parse(fixtures.property.tweedehands.chalet);

        expectPrice(result);
        expectLandSurface(result);
        expectHabitableSurface(result);
        expectId(result);
        expectAddress(result);
    });

    it('Should parse 2dehands (Landbouwgrond)', () => {
        const result = parse(fixtures.property.tweedehands.landbouwgrond);

        expectPrice(result);
        expectLandSurface(result);
        expectId(result);
        expectAddress(result);
    });

    it('Should parse Wijns (Huis)', () => {
        const result = parse(fixtures.property.wijns.home);

        expectPrice(result);
        expectLandSurface(result);
        expectHabitableSurface(result);
        expectId(result);
    });

    it('Should parse Stefproost (Huis)', () => {
        const result = parse(fixtures.property.stefproost.house);

        expectPrice(result);
        expectLandSurface(result);
        expectHabitableSurface(result);
        expectId(result);
        expectAddress(result);
    });

    it('Should parse Stefproost (Garage)', () => {
        const result = parse(fixtures.property.stefproost.garage);

        expectPrice(result);
        expectHabitableSurface(result);
        expectId(result);
        expectAddress(result);
    });

    it('Should parse Immodiest (Bouwland)', () => {
        const result = parse(fixtures.property.immodiest.bouwland);

        expectPrice(result);
        expectLandSurface(result);
        expectId(result);
    });

    it('Should parse Notaris (House)', () => {
        const result = parse(fixtures.property.notaris.house);

        expectPrice(result);
        expectLandSurface(result);
        expectId(result);
    });

    it('Should parse Immoscoop (House)', () => {
        const result = parse(fixtures.property.immoscoop.house);

        expectLandSurface(result);
        expectHabitableSurface(result);
        expectId(result);
        expectAddress(result);
    });

    it('Should parse Zimmo (House)', () => {
        const result = parse(fixtures.property.immoscoop.house);

        expectLandSurface(result);
        expectHabitableSurface(result);
        expectId(result);
        expectAddress(result);
    });

    //it('Should list property urls on a page', () => {
        //const { parseListings } = require('../src/index.js');
        //const res = parseListing(fixtures.listing.vastengoed);
        //console.log('res', res);
    //});

})
