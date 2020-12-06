const puppeteer = require('puppeteer-extra')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
const URL = require('url').URL;
const fs = require('fs');

const { parse, parseListing } = require('./index.js');

puppeteer.use(StealthPlugin())

async function startBrowser(){
    let browser;

    try {
        console.log("Opening the browser......");
        browser = await puppeteer.launch({ headless: true, });
    } catch (err) {
        console.log("Could not create a browser instance => : ", err);
    }
    return browser;
}

async function scrapeAll(browserInstance){
    let browser;
    try{
        browser = await browserInstance;
        await scraperObject.scraper(browser);

    }
    catch(err){
        console.log("Could not resolve the browser instance => ", err);
    }
}

const url = 'https://www.immoweb.be/en/search/house/for-sale/geel/2440?countries=BE&maxPrice=270000&page=1&orderBy=relevance';
const scraperObject = {
    url: url,
    async scraper(browser){
        let page = await browser.newPage();
        console.log(`Navigating to ${this.url}...`);
        await page.goto(this.url);
        // Wait for the required DOM to be rendered
        //await page.waitForSelector('.main-container');
        console.log('found links');

        const source = await page.evaluate(() => document.querySelector('*').outerHTML);

        browser.close();
        //console.log(data);

        const baseURL = new URL(url).origin;
        const res = parseListing(source, baseURL);
        console.log('res', res);

        fs.appendFile('output/immoweb.csv', res.join("\n"), function (err) {
            if (err) throw err;
            console.log('Saved!');
        });

    }
}


//Start the browser and create a browser instance
let browserInstance = startBrowser();
scrapeAll(browserInstance);
