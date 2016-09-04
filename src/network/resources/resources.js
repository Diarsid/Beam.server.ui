function obtainServerRootUrl() {
    var rootUrl = window.location.href;
    if ( rootUrl.endsWith("/") ) {
        rootUrl = rootUrl.substring(0, rootUrl.length-1);
    }
    console.log('[APP] [RESOURCES] root url: ' + rootUrl);
    return rootUrl;
}

var serverRootUrl = obtainServerRootUrl() + "/services";

var resources = {

    appRootUrl: serverRootUrl,

    registration: {
        url: serverRootUrl + "/auth/registration",
        method: "POST",
        success: 200,
        unauthorized: 401
    },

    validation : {

        jwt : {
            url: serverRootUrl + "/auth/verify",
            method: "POST",
            jwtValid: 200,
            jwtValidButExpired: 302,
            jwtInvalid: 401
        },

        nickNames : {
            url: serverRootUrl + "/validation/users/nicknames",
            method: "POST",
            badRequest: 400
        },

        passwords : {
            url : serverRootUrl + "/validation/users/passwords",
            method : "POST",
            badRequest : 400
        },

        names : {
            url : serverRootUrl + "/validation/users/names",
            method : "POST",
            badRequest : 400
        },

        surnames : {
            url : serverRootUrl + "/validation/users/surnames",
            method : "POST",
            badRequest : 400
        },

        emails : {
            url : serverRootUrl + "/validation/users/emails",
            method : "POST",
            badRequest : 400
        },

        freeNickNames : {
            url : serverRootUrl + "/validation/users/free-nicknames",
            method: "POST",
            found: 302,
            badRequest: 400
        }
    },

    login: {
        url: serverRootUrl + "/auth/login",
        method: "POST",
        success: 200,
        unauthorized: 401,
        badRequest: 400
    },

    objects: {
        url: serverRootUrl + "/objects/object",
        method: "GET",
        success: 200
    }

};

module.exports = resources;