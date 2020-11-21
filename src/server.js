const express = require('express');
const fetch = require('node-fetch');
const { parse } = require('../src/index.js');

const app = express()
const port = process.env.PORT || 3000;

app.get('/immo/parse', async (req, res, next) => {
    console.log('res', req.query.url);
    let response = await fetch(req.query.url, {
        headers: {
            'user-agent': 'facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)'
        }
    });
    let html = await response.text();
    const immo = parse(html);
    console.error('data', immo);
    res.json(immo);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
