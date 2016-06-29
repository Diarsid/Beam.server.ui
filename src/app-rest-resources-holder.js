function obtainServerRootUrl() {
    var rootUrl = window.location.href;
    if ( rootUrl.endsWith("/") ) {
        rootUrl = rootUrl.substring(0, rootUrl.length-1);
    }
    console.log('[RESOURCES HOLDER] root url: ' + rootUrl);
    return rootUrl;
}

var serverRootUrl = obtainServerRootUrl() + "/services";

var appRestResourcesHolder = {

    appRootUrl: serverRootUrl,

    jwtValidation: {
        url: serverRootUrl + "/auth/tokens/validation",
        method: "POST",
        jwtValid: 200,
        jwtValidButExpired: 302,
        jwtInvalid: 401
    },

    registration: {
        url: serverRootUrl + "/auth/users/registration",
        method: "POST",
        success: 200,
        failed: 401
    },

    login: {
        url: serverRootUrl + "/auth/users/login",
        method: "POST",
        success: 200,
        failed: 401
    }

};

module.exports = appRestResourcesHolder;
