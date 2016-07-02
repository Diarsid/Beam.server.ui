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
        unauthorized: 401
    },

    nickNames: {
        url: function ( nickName ) {
            return serverRootUrl + "/auth/users/nicknames/" + nickName
        },
        method: "GET",
        found: 302,
        notFound: 404
    },

    login: {
        url: serverRootUrl + "/auth/users/login",
        method: "POST",
        success: 200,
        unauthorized: 401,
        badRequest: 400
    }

};

module.exports = appRestResourcesHolder;
