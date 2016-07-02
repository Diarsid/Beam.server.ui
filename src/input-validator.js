var $ = require('jquery');

var appRestResourcesHolder= require('./app-rest-resources-holder.js');

var minimumNameLength = 2;
var minimumPasswordLength = 7;
var minimumEmailLength = 3;

var inputValidator = {

    checkIfNickNameIsFree: function ( nickName, isFreeCallback, isNotFreeCallback ) {
        $.ajax({
            method: appRestResourcesHolder.nickNames.method,
            url: appRestResourcesHolder.nickNames.url(nickName),
            statusCode: {
                302: function () {
                    // nickName found among nicknames that are already registered
                    // it is not free
                    console.log('[INPUT VALIDATOR] nick is not free');
                    isNotFreeCallback();
                },
                404: function () {
                    // nickName not found among nicknames that are already registered
                    // it is free
                    console.log('[INPUT VALIDATOR] nick is free');
                    isFreeCallback();
                }
            }
        });
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