function obtainServerRootUrl() {
    var rootUrl = window.location.href;
    if ( rootUrl.endsWith("/") ) {
        rootUrl = rootUrl.substring(0, rootUrl.length-1);
    }
    return rootUrl;
}

var serverRootUrl = obtainServerRootUrl();

var appRestResourcesHolder = {

    appRootUrl: serverRootUrl,

    jwtValidation: {
        url: serverRootUrl + "/auth/tokens/validation",
        method: "GET",
        jwtValid: 200,
        jwtValidButExpired: 302,
        jwtInvalid: 401
    },

    registration: {
        url: serverRootUrl + "/auth/users/registration",
        method: "GET",
        success: 200,
        failed: 401
    },

    login: {
        url: serverRootUrl + "/auth/users/login",
        method: "GET",
        success: 200,
        failed: 401
    }

};

module.exports = appRestResourcesHolder;
