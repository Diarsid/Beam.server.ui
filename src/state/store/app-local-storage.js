
var jwtKey = "beam.server.ui.jwt";

function decodeJwtClaims(jwt) {
    var parts = jwt.split(".");
    if ( parts.length == 3 ) {
        var claims = JSON.parse(atob(parts[1]));
        console.log('[APP] [JWT] [DECODE] obtained claims: ' + claims);
        return claims;
    } else {
        console.log('[APP] [JWT] [DECODE] error:');
        var i = 0;
        for (; i < parts.length; i++) {
            console.log('[APP] [JWT] [DECODE] ' + i + ": " + parts[i]);
        }
        throw "JWT is not a valid JWT as it contains more than 3 parts, separated by '.' char.";
    }
}

var storage = {

    hasJwt : function () {
        var jwtExists = ( localStorage.getItem(jwtKey) != null );
        console.log('[APP] [JWT] has jwt? ' + jwtExists);
        return jwtExists;
    },

    deleteJwt : function () {
        console.log('[APP] [JWT] deleted.');
        localStorage.removeItem(jwtKey);
    },

    saveJwt : function (jwtString) {
        console.log('[APP] [JWT] stored: ' + jwtString);
        localStorage.setItem(jwtKey, jwtString);
    },

    saveAndParseJwt : function (jwtString) {
        console.log('[APP] [JWT] stored: ' + jwtString);
        localStorage.setItem(jwtKey, jwtString);
        return this.parseUserFromJwt();
    },

    getJwt : function () {
        if ( this.hasJwt() ) {
            return localStorage.getItem(jwtKey);
        } else {
            throw "Jwt not found";
        }
    },

    parseUserFromJwt : function () {
        if ( this.hasJwt() ) {
            var claims = decodeJwtClaims(localStorage.getItem(jwtKey));
            console.log('[APP] [JWT] parsed claims: ' + claims);
            return {
                role : claims.role,
                id : claims.id,
                nickName : claims.nickName
            }
        } else {
            throw "Jwt not found";
        }
    }
};

module.exports = storage;