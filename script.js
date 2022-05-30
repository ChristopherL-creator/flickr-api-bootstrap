const BASE_URL = "https://www.flickr.com/services/feeds/photos_public.gne?format=json"; 

function initFlickr() {
    fetch(BASE_URL) 
    .then(response => response.text()) 
    .then(result => createCarouselCards(result)) 
    .catch(error => console.log(error))
} 
//  browser hnno implementato bocco chiamate per api non intese al pubblico

//  devo togliere jsonflickr( e ) alla fine
function cleanJson(text){ 
    const cleanedJson1 = text.replace('jsonFlickrFeed(', ''); 
    const cleanedJson2 = cleanedJson1.slice(0, -1); 
    const json = JSON.parse(cleanedJson2);
    return json; 
} 

function createCarouselCards(result) {
    const parsedResult = cleanJson(result); 
    console.log(parsedResult);
}

initFlickr(); 

