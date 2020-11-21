#!/bin/zsh
source ./functions.sh

city=$(echo $1)
postal=$(echo $2)
#city="geel"
#postal=2440

#echo $url;
#dom=`scrape $url`
#echo $dom | grepurls | grep "te-koop/immo/woning/geel"

echo `scrape "https://www.2dehands.be/l/immo/#Language:nl-BE|PriceCentsFrom:350000|PriceCentsTo:27500000|distanceMeters:10000|postcode:2440" | greppaths | sed 's/^/https:\/\/2dehands\.be/'` 

echo `scrape "https://immovl.be/te-koop/list/appartement+garage-parking+grond+huis/2440-Geel?" | greppaths | sed 's/^/https:\/\/immovl\.be/'`

echo `scrape "https://www.immoscoop.be/immo/$city/koop/woning/maxprijs-275000/sorteerop-date/page-1/ipp-10/" | grepurls`
echo `scrape "https://www.immoscoop.be/immo/$city/koop/appartement/maxprijs-275000/sorteerop-date/page-1/ipp-10/" | grepurls`
echo `scrape "https://www.immoscoop.be/immo/$city/koop/garage/maxprijs-275000/sorteerop-date/page-1/ipp-10/" | grepurls`
echo `scrape "https://www.immoscoop.be/immo/$city/koop/grond/maxprijs-275000/sorteerop-date/page-1/ipp-10/" | grepurls`

echo `scrape "https://www.heylenvastgoed.be/en/for-sale/in-${postal}-${city}" | grepurls`
echo `scrape "https://www.heylenvastgoed.be/en/for-sale/in-${postal}-${city}" | grepurls`


echo `scrape "https://vastengoed.be/aanbod?field_business_type_tid=158&field_location_tid=214&field_property_type_tid=160&field_lot_area_value=&field_bedrooms_tid=All&field_bathrooms_tid=All&field_price_value=&field_price_value_1=275000&sort_by=created&sort_order=DESC" | greppaths | sed 's/^/https:\/\/vastengoed\.be/' | grepurls`
echo `scrape "https://vastengoed.be/aanbod?field_business_type_tid=158&field_location_tid=214&field_property_type_tid=165&field_lot_area_value=&field_bedrooms_tid=All&field_bathrooms_tid=All&field_price_value=&field_price_value_1=275000&sort_by=created&sort_order=DESC" | greppaths | sed 's/^/https:\/\/vastengoed\.be/' | grepurls`
echo `scrape "https://vastengoed.be/aanbod?field_business_type_tid=158&field_location_tid=214&field_property_type_tid=275&field_lot_area_value=&field_bedrooms_tid=All&field_bathrooms_tid=All&field_price_value=&field_price_value_1=275000&sort_by=created&sort_order=DESC" | greppaths | sed 's/^/https:\/\/vastengoed\.be/' | grepurls`
echo `scrape "https://vastengoed.be/aanbod?field_business_type_tid=158&field_location_tid=214&field_property_type_tid=163&field_lot_area_value=&field_bedrooms_tid=All&field_bathrooms_tid=All&field_price_value=&field_price_value_1=275000&sort_by=created&sort_order=DESC" | greppaths | sed 's/^/https:\/\/vastengoed\.be/' | grepurls`
echo `scrape "https://vastengoed.be/aanbod?field_business_type_tid=158&field_location_tid=214&field_property_type_tid=161&field_lot_area_value=&field_bedrooms_tid=All&field_bathrooms_tid=All&field_price_value=&field_price_value_1=275000&sort_by=created&sort_order=DESC" | greppaths | sed 's/^/https:\/\/vastengoed\.be/' | grepurls`
echo `scrape "https://vastengoed.be/aanbod?field_business_type_tid=158&field_location_tid=214&field_property_type_tid=162&field_lot_area_value=&field_bedrooms_tid=All&field_bathrooms_tid=All&field_price_value=&field_price_value_1=275000&sort_by=created&sort_order=DESC" | greppaths | sed 's/^/https:\/\/vastengoed\.be/' | grepurls`

echo `scrape "https://www.vandamm.be/nl/te-koop/woningen,appartementen,gronden/postcode-2440/max-275000-euro" | grepurls`

echo `scrape "https://www.immoweb.be/nl/zoeken/grond/te-koop/geel/2440?countries=BE&maxPrice=275000&orderBy=relevance" | grepurls`
echo `scrape "https://www.immoweb.be/nl/zoeken/huis-en-appartement/te-koop/geel/2440?countries=BE&maxPrice=275000&orderBy=relevance" | grepurls`
echo `scrape "https://www.immoweb.be/nl/zoeken/garage/te-koop/geel/2440?countries=BE&maxPrice=275000&orderBy=relevance" | grepurls`
echo `scrape "https://www.immoweb.be/nl/zoeken/opbrengsteigendom/te-koop/geel/2440?countries=BE&maxPrice=275000&orderBy=relevance" | grepurls`
