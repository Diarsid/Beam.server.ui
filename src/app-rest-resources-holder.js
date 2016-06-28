var serverRootUrl = "http://localhost:XXXX/beam.server";

var appRestResourcesHolder = {

    jwtValidation: {
        url: serverRootUrl + "/services/auth/tokens/validation",
        method: "GET"
    },

    registration: {
        url: serverRootUrl + "/services/auth/users/registration",
        method: "GET"
    },

    login: {
        url: serverRootUrl + "/services/auth/users/login",
        method: "GET"
    }

};

module.exports = appRestResourcesHolder;
