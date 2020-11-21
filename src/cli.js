const express = require('express');
const fetch = require('node-fetch');
const { parse } = require('../src/index.js');

const args = process.argv.slice(2);

async function run(url) {
    let response = await fetch(url, {
        headers: {
            'user-agent': 'facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)'
        }
    });
    let html = await response.text();
    const immo = parse(html);
    console.log(JSON.stringify(immo, null, 2));
}

run(args[0]);
