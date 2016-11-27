var $ =
    require('jquery');

var resources =
    require("./../resources/resources.js");

// --------------------------------

function ajaxLog(message) {
    console.log("[APP] [AJAX CALL] [JWT] " + message);
}

function validateJwt ( jwtString, callbacks ) {
    ajaxLog("validation call starts...");
    callbacks.onStart();
    $.ajax({
        method: resources.validation.jwt.method,
        url: resources.validation.jwt.url,
        cache: false,
        beforeSend: function ( xhr ) {
            xhr.setRequestHeader('Authentication', 'Bearer ' + jwtString);
        },
        statusCode: {
            200: function () {
                ajaxLog("valid, parse user info and proceed.");
                callbacks.onJwtValid();
            },
            401: function () {
                ajaxLog("expired.");
                callbacks.onJwtExpired();
            },
            403: function () {
                ajaxLog("invalid.");
                callbacks.onJwtInvalid();
            }
        }
    });
}

module.exports = validateJwt;