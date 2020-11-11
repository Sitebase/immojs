const mapper = {
    id: {
        name: 'id',
        type: 'String',
        map: [ 
            'referentie', 
            'immoweb code', 
            'makelaar ref.',
            'og:url' 
        ]
    },
    price: {
        name: 'price',
        type: 'Number',
        map: [ 'accessibilityprice', 'price', 'prijs', 'bieden vanaf' ]
    },
    bodverhoging: {
        name: 'bidUp',
        type: 'Number',
        map: [ 'bodverhoging' ]
    },
    income: {
        name: 'income',
        type: 'Number',
        map: [ 'kadastrale inkomen', 'cadastral income', 'geïndexeerd - bedrag', 'ki', 'kadastraal inkomen' ]
    },
    buildyear: {
        name: 'buildyear',
        type: 'Number',
        map: [ 
            'bouwjaar',
            'construction year'
        ]
    },
    epc: {
        name: 'epc',
        type: 'Number',
        map: [ 'epc waarde', 'epc', 'energy' ]
    },
    dimension: {
        name: 'dimensions',
        type: 'Number',
        map: [ 
            'livable space', 
            'surface', 
            'surface livable', 
            'bewoonbare opp',
            'woonoppervlakte',
            'oppervlakte'
        ]
    },
    terrain: {
        name: 'terrain',
        type: 'Number',
        map: [ 
            'oppervlakte terrein', 
            'grond opp',
            'grond oppervlakte',
            'grondoppervlakte',
            'terrain surface lot',
            'perceeloppervlakte van ca.',
            'oppervlakte kadaster',
            'terrein oppervlakte'
        ]
    },
    //tank: {
        //name: 'tank',
        //type: 'Number',
        //map: [ 'mazouttank' ]
    //},
    parking: {
        name: 'parking',
        type: 'Number',
        map: [ 'parking' ]
    },
    parkingOutside: {
        name: 'parkingOutside',
        type: 'Number',
        map: [ 'parking outside' ]
    },
    parkingInside: {
        name: 'parkingInside',
        type: 'Number',
        map: [ 'parking inside' ]
    },
    toilets: {
        name: 'toilet',
        type: 'Number',
        map: [ 'toilet', 'toilets' ]
    },
    lat: {
        name: 'lat',
        type: 'Number',
        map: [ 'lat' ]
    },
    lng: {
        name: 'lng',
        type: 'Number',
        map: [ 'lng' ]
    },
    voorkooprecht: {
        name: 'voorkooprecht',
        type: 'Boolean',
        map: [ 'voorkooprecht' ]
    },
    //overstromingsgebied: {
        //name: 'overstromingsgebied',
        //type: 'Boolean',
        //map: [ 'overstromingsgebied' ]
    //},
    //dagvaarding: {
        //name: 'dagvaarding',
        //type: 'Boolean',
        //map: [ 'dagvaarding' ]
    //},
};

module.exports = mapper;
