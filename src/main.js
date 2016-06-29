var appRestResourcesHolder= require('./app-rest-resources-holder.js');
var appStorageKeys =        require('./app-storage-keys.js');

// Top-level React render function
var renderLoginPage =           require('./render-login-page.js');
var renderMainPage =            require('./render-main-page.js');
var renderRegistrationPage =    require('./render-registration-page.js');
var renderErrorPage =           require('./render-error-page.js');
var logoutAndRenderLoginPage =  require('./logout-and-render-login-page.js');

function renderInitialPage () {
    if ( localStorage.getItem(appStorageKeys.JWTKey) == null ) {
        renderLoginPage();
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
                renderMainPage();
            } else if ( responseStatusCode == appRestResourcesHolder.jwtValidation.jwtValidButExpired ) {
                logoutAndRenderLoginPage();
            } else if ( responseStatusCode == appRestResourcesHolder.jwtValidation.jwtInvalid ) {
                renderRegistrationPage();
            } else {
                console.error('[MAIN] JWT verification failed.');
                var error = {
                    title: "Json Web Token verification failure.",
                    description: "Error during Json Web Token verification attempt. Response status code" +
                    " is neither 200 (JWT is valid), nor 302 (JWT is valid, but has expired), nor 401 " +
                    "(JWT is invalid).",
                    source: xhr
                };
                renderErrorPage(error);
            }
        });
    }
}

renderInitialPage();