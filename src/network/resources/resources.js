function obtainServerRootUrl() {
    var rootUrl = window.location.href;
    if ( rootUrl.endsWith("/") ) {
        rootUrl = rootUrl.substring(0, rootUrl.length-1);
    }
    console.log('[APP] [RESOURCES] root url: ' + rootUrl);
    return rootUrl;
}

var serverRootUrl = obtainServerRootUrl() + "/services";

var urls = {

    directories : function (userId, placement) {
        return serverRootUrl + "/users/" + userId + "/" + placement + "/directories";
    },

    singleDirectory : function (userId, placement, name) {
        return serverRootUrl + "/users/" + userId + "/" + placement + "/directories/" + name;
    },

    singleDirectoryProp : function (userId, placement, name, prop) {
        return serverRootUrl + "/users/" + userId + "/" + placement + "/directories/" + name + "/" + prop;
    },

    pages : function(userId, placement, dirName) {
        return serverRootUrl + "/users/" + userId + "/" + placement + "/directories/" + dirName + "/pages";
    },

    singlePage : function(userId, placement, dirName, pageName) {
        return serverRootUrl + "/users/" + userId + "/" + placement + "/directories/" + dirName + "/pages/" + pageName;
    },

    singlePageProp : function(userId, placement, dirName, pageName, prop) {
        return serverRootUrl + "/users/" + userId + "/" + placement + "/directories/" + dirName + "/pages/" + pageName + "/" + prop;
    }
};

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
        },

        webObjects : {

            names : {
                url : serverRootUrl + "/validation/webobjects/names",
                method : "POST"
            },

            urls : {
                url : serverRootUrl + "/validation/webobjects/urls",
                method : "POST"
            }
        }
    },

    login: {
        url: serverRootUrl + "/auth/login",
        method: "POST",
        success: 200,
        unauthorized: 401,
        badRequest: 400
    },

    pages : {

        getAllInDirectory : {
            url : urls.pages,
            method : "GET"
        },

        postNew : {
            url : urls.pages,
            method : "POST"
        },

        single : {

            editProp : {
                url : urls.singlePageProp,
                method : "PUT"
            },

            getPage : {
                url : urls.singlePage,
                method : "GET"
            },

            delete : {
                url : urls.singlePage,
                method : "DELETE"
            }
        }
    },

    directories : {

        getAllInPlace : {
            url : urls.directories,
            method : "GET"
        },

        postNew : {
            url : urls.directories,
            method : "POST"
        },

        single : {

            getDirectory : {
                url : urls.singleDirectory,
                method : "GET"
            },

            editProp : {
                url : urls.singleDirectoryProp,
                method : "PUT"
            },

            remove : {
                url : urls.singleDirectory,
                method : "DELETE"
            }
        }

    }

};

module.exports = resources;