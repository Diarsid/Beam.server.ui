var $ = require('jquery');

var minimumNameLength = 2;
var minimumPasswordLength = 6;
var minimumEmailLength = 3;

var inputValidator = {

    checkIfNickNameIsFree: function ( nickName ) {
        // ask server is given nickName is free
        return true;
    },

    validateNickName: function ( nickName ) {
        if ( nickName.length < minimumNameLength ) {
            return false;
        }
        return true;
    },

    validateName: function ( newName ) {
        if ( newName.length < minimumNameLength ) {
            return false;
        }
        return true;
    },

    validateEmail: function ( email ) {
        if ( ! email.includes('@') ) {
            return false;
        } else if ( email.length < minimumEmailLength ) {
            return false;
        }
        return true;
    },

    validatePassword: function ( password ) {
        if ( password.length < minimumPasswordLength ) {
            return false
        }
        return true;
    },

    validatePasswords: function ( pass1, pass2 ) {
        if ( pass1 != pass2 ) {
            return false;
        } else if ( pass1.length < minimumPasswordLength ) {
            return false;
        }
        return true;
    }
};

module.exports = inputValidator;