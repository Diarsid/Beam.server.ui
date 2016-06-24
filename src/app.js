var reactRootPageRenderer = require('./react-root-page-renderer.js');
var appStorageKeys = require('./app-storage-keys.js');
var jwtVerifier = require('./jwt-verifier.js');

var app = {

    loginAndRenderInitialPage: function ( jwt ) {
        // parse JWT
        reactRootPageRenderer.renderMainPage();
    },

    logoutAndRenderLoginPage: function () {
        localStorage.removeItem(appStorageKeys.JWTKey);
        localStorage.removeItem(appStorageKeys.userRoleKey);
        localStorage.removeItem(appStorageKeys.userNameKey);
        localStorage.removeItem(appStorageKeys.userNickNameKey)
        reactRootPageRenderer.renderLoginPage();
    },

    renderInitialPage: function () {
        if ( localStorage.getItem(appStorageKeys.JWTKey) == null ) {
            reactRootPageRenderer.renderLoginPage();
        } else {
            var jwtVerificationStatus = jwtVerifier.currentJwtValidationStatusCode();
            // ASYNC IT IS!!!11
            reactRootPageRenderer.renderMainPage();
        }
    }
};

module.exports = app;