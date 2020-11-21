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
    //bodverhoging: {
        //name: 'auction.bidUp',
        //type: 'Number',
        //map: [ 'bodverhoging' ]
    //},
    //begindatum: {
        //name: 'auction.start',
        //type: 'Date',
        //map: [ 'begindatum' ]
    //},
    //einddatum: {
        //name: 'auction.end',
        //type: 'Date',
        //map: [ 'einddatum' ]
    //},
    //income: {
        //name: 'income',
        //type: 'Number',
        //map: [ 'kadastrale inkomen', 'cadastral income', 'geïndexeerd - bedrag', 'ki', 'kadastraal inkomen' ]
    //},
    //buildyear: {
        //name: 'buildingConstructionYear',
        //type: 'Number',
        //map: [ 
            //'bouwjaar',
            //'construction year'
        //]
    //},
    //epc: {
        //name: 'epc',
        //type: 'Number',
        //map: [ 
            //'epc waarde', 
            //'epc', 
            //'energy',
            //'epckwhj'
        //]
    //},
    terrain: {
        name: 'landSurface',
        type: 'Number',
        map: [ 
            'oppervlakte terrein', 
            'grond opp',
            'grond oppervlakte',
            'grondopp.',
            'oppervlakte grond',
            'grondoppervlakte',
            'terrain surface lot',
            'totale oppervlakte',
            'perceeloppervlakte van ca.',
            'perceel oppervlakte',
            'oppervlakte kadaster',
            'terrein oppervlakte',
            'surface of plot',
            'connectedsurface'
        ],
        // function to pick the best result from an array
        selector: (values) => { 
            return Math.max(...values.map(v => parseInt(v, 10)));
        }
    },
    dimension: {
        name: 'habitableSurface',
        type: 'Number',
        map: [ 
            //'livable space', 
            //'surface', 
            'surface livable', 
            'bewoonbare opp',
            'woonoppervlakte',
            'oppervlakte',
            'nethabitablesurface',
            'woonopp.'
        ]
    },
    //tank: {
        //name: 'tank',
        //type: 'Number',
        //map: [ 'mazouttank' ]
    //},
    //parking: {
        //name: 'parking.count',
        //type: 'Number',
        //map: [ 'parking' ]
    //},
    //parkingOutside: {
        //name: 'parking.outside',
        //type: 'Number',
        //map: [ 'parking outside' ]
    //},
    //parkingInside: {
        //name: 'parking.inside',
        //type: 'Number',
        //map: [ 'parking inside' ]
    //},
    //toilets: {
        //name: 'toilet',
        //type: 'Number',
        //map: [ 'toilet', 'toilets' ]
    //},
    //lat: {
        //name: 'location.lat',
        //type: 'Coordinate',
        //map: [ 'lat', 'latitude' ]
    //},
    //lng: {
        //name: 'location.lng',
        //type: 'Coordinate',
        //map: [ 'lng', 'longitude' ]
    //},
    //bouwvergunning: {
        //name: 'extra.bouwvergunning',
        //type: 'Boolean',
        //map: [ 'bouwvergunning verkregen' ]
    //},
    //bestemming: {
        //name: 'extra.bestemming',
        //type: 'Boolean',
        //map: [ 'bestemming' ]
    //},
    //voorkooprecht: {
        //name: 'extra.voorkooprecht',
        //type: 'Boolean',
        //map: [ 'voorkooprecht' ]
    //},
    //verkavelingsvergunning: {
        //name: 'extra.verkavelingsvergunning',
        //type: 'Boolean',
        //map: [ 'verkavelingsvergunning' ]
    //},
    //overstromingsgebied: {
        //name: 'extra.overstromingsgebied',
        //type: 'Boolean',
        //map: [ 'overstromingsgebied', 'resicozone voor overstromingen' ]
    //},
    //rechterlijkherstel: {
        //name: 'extra.rechterlijkherstel',
        //type: 'Boolean',
        //map: [ 'rechterlijke herstelmaatregel' ]
    //},
    //dagvaarding: {
        //name: 'extra.dagvaarding',
        //type: 'Boolean',
        //map: [ 'dagvaarding' ]
    //},
};

module.exports = mapper;
