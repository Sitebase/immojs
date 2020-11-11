# ImmoJS
Command line tool to fetch real estates from different sources.

## Scrape content methods

### Headless Chrome
>"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless --disable-gpu --dump-dom "https://www.immoweb.be/en/classified/house/for-sale/geel/2440/8828856?searchId=5fa435e06348f" > chrome.htm

 for delay:
 --virtual-time-budget=10000

### Curls
>curl -s https://www.immoweb.be/en/classified/house/for-sale/geel/2440/8828856\?searchId\=5fa435e06348f

### Curl acting as the Facebook bot
>curl -s -A 'facebookexternalhit/1.1 (+https://www.facebook.com/externalhit_uatext.php)'

### Lynx
>lynx --dump https://www.immoweb.be/en/classified/house/for-sale/geel/2440/8828856\?searchId\=5fa435e06348f




### use og:url for ref id detectie

### Detect google maps url for address
https://www.google.com/maps/place/51.1837884815087,4.98187065124512
