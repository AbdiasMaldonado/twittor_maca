//validando si la página se está desplegando desde produccion o desarrollo

var url = window.location.href;
var swLocation = '/twittor/sw_maca.js'

if (navigator.serviceWorker) {
    if (url.includes('localhost')) { 
        swLocation = '/sw_maca.js'; }
    navigator.serviceWorker.register(swLocation);
}

