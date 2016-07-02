
var jwtUtil = {

    decodeJwtClaims: function ( jwt ) {
        var parts = jwt.split(".");
        if ( parts.length == 3 ) {
            var claims = JSON.parse(atob(parts[1]));
            console.log('[JWT UTIL] obtained claims: ' + claims);
            return claims;
        } else {
            var i = 0;
            for (; i < parts.length; i++) {
                console.log('[JWT UTIL] part ' + i + ": " + parts[i]);
            }
            throw "JWT is not a valid JWT as it contains more than 3 parts, separated by '.' char.";
        }
    }
};

module.exports = jwtUtil;