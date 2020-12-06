//const puppeteer = require('puppeteer');

const puppeteer = require('puppeteer-extra')
 
// add stealth plugin and use defaults (all evasion techniques)
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())

async function startBrowser(){
    let browser;

    const args = [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-infobars',
        '--window-position=0,0',
        '--ignore-certifcate-errors',
        '--ignore-certifcate-errors-spki-list',
        '--user-agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3312.0 Safari/537.36"'
    ];

    try {
        console.log("Opening the browser......");
        browser = await puppeteer.launch({
            headless: true,
            //args: args,
            //ignoreHTTPSErrors: true,
            //userDataDir: './tmp'
        });
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

const scraperObject = {
    url: 'https://www.immoweb.be/en/search/house/for-sale/geel/2440?countries=BE&maxPrice=270000&page=1&orderBy=relevance',
    async scraper(browser){
        let page = await browser.newPage();
        console.log(`Navigating to ${this.url}...`);
        await page.goto(this.url);
        // Wait for the required DOM to be rendered
        //await page.waitForSelector('.main-container');
        console.log('found links');

        //const data = await page.evaluate(() => document.querySelector('*').outerHTML);
        //console.log(data);

        // Get the link to all the required books
        let urls = await page.$$eval('.card__title-link', links => {
            // Make sure the book to be scraped is in stock
            // Extract the links from the data
            links = links.map(el => el.href)
            //links = links.map(el => el.querySelector('h3 > a').href)
            return links;
        });
        await browser.close();
        console.log(urls);
    }
}


//Start the browser and create a browser instance
let browserInstance = startBrowser();
scrapeAll(browserInstance);
