var app = require('./app.js');
var appRestResourcesHolder = require('./app-rest-resources-holder.js');

function renderInitialPage () {
    if ( localStorage.getItem(appStorageKeys.JWTKey) == null ) {
        app.renderLoginPage();
    } else {
        $.ajax({
            method: appRestResourcesHolder.jwtValidation.method,
            url: appRestResourcesHolder.jwtValidation.url,
            beforeSend: function ( xhr ) {
                xhr.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem(appStorageKeys.JWTKey));
            }
        }).always(function ( data, statusText, xhr ) {
            var responseStatusCode = xhr.status;
            console.log('[MAIN] verify JWT, response status code: ' + responseStatusCode);
            if ( responseStatusCode == appRestResourcesHolder.jwtValidation.jwtValid ) {
                app.renderMainPage();
            } else if ( responseStatusCode == appRestResourcesHolder.jwtValidation.jwtValidButExpired ) {
                app.logoutAndRenderLoginPage();
            } else if ( responseStatusCode == appRestResourcesHolder.jwtValidation.jwtInvalid ) {
                app.renderRegistrationPage();
            } else {
                console.error('[MAIN] JWT verification failed.');
                var error = {
                    title: "Json Web Token verification failure.",
                    description: "Error during Json Web Token verification attempt. Response status code" +
                    " is neither 200 (JWT is valid), nor 302 (JWT is valid, but has expired), nor 401 " +
                    "(JWT is invalid).",
                    source: xhr
                };
                app.renderErrorPage(error);
            }
        });
    }
}

renderInitialPage();