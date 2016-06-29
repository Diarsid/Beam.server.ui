var inlineStyles = {

    getInputStyle: function ( isInputValid ) {
        if ( isInputValid ) {
            return this.inputValidStyle;
        } else {
            return this.inputInvalidStyle;
        }
    },

    getRegistrationButtonStyle: function ( isRegistrationAllowed ) {
        if ( isRegistrationAllowed ) {
            return this.registrationButtonActiveStyle;
        } else {
            return this.registrationButtonInactiveStyle;
        }
    },

    registrationButtonInactiveStyle: {

    },

    registrationButtonActiveStyle: {

    },

    loginButtonInactiveStyle: {

    },

    loginButtonActiveStyle: {

    },

    inputValidStyle: {

    },

    inputInvalidStyle: {

    }
};

module.exports = inlineStyles;