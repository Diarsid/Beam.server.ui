var $ = require('jquery');

var appStorageKeys = require('./app-storage-keys.js');
var appUrlsHolder = require('./app-urls-holder.js');

var jwtVerifier = {

    currentJwtValidationStatusCode: function () {
        $.ajax({
            method: 'GET',
            url: appUrlsHolder.jwtValidationUrl,
            beforeSend: function ( xhr ) {
                xhr.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem(appStorageKeys.JWTKey));
            }
        }).always(function ( data, statusText, xhr ) {
            var responseStatusCode = xhr.status;
            console.log('[JWT VERIFIER] verify token, status code: ' + responseStatusCode);
            return responseStatusCode;
        });
    }
};

module.exports = jwtVerifier;