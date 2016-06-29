var inputValidator = {

    validateNickName: function ( nickName ) {
        if ( nickName.length < 2 ) {
            return false;
        }
        return true;
    },

    validatePassword: function ( password ) {
        if ( password.length < 7 ) {
            return false
        }
        return true;
    }
};

module.exports = inputValidator;