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
        color: '#D5D5D5',
        height: '30px',
        width: '90px',
        boxSizing: 'border-box',
        opacity: '0.85',
        fontFamily: 'Verdana',
        fontSize: '15px',
        borderRadius: '6px',
        border: '1px solid lightgrey',
        backgroundColor: '#fafafa',
        boxShadow: 'inset 0px 0px 5px 0px lightgrey',
        WebkitBoxShadow: 'inset 0px 0px 5px 0px lightgrey',
        MozBoxShadow: 'inset 0px 0px 5px 0px lightgrey',
        OBoxShadow: 'inset 0px 0px 5px 0px lightgrey',
        margin: '0 15px 0 0'
    },

    registrationButtonActiveStyle: {
        color: '#1C1C1C',
        height: '30px',
        width: '90px',
        boxSizing: 'border-box',
        opacity: '0.85',
        fontFamily: 'Verdana',
        fontSize: '15px',
        borderRadius: '6px',
        border: '1px solid lightgrey',
        backgroundColor: '#fafafa',
        boxShadow: 'inset 0px 0px 5px 0px lightgrey',
        WebkitBoxShadow: 'inset 0px 0px 5px 0px lightgrey',
        MozBoxShadow: 'inset 0px 0px 5px 0px lightgrey',
        OBoxShadow: 'inset 0px 0px 5px 0px lightgrey',
        margin: '0 15px 0 0'
    },

    loginButtonInactiveStyle: {
        color: '#D5D5D5',
        height: '30px',
        width: '90px',
        boxSizing: 'border-box',
        opacity: '0.85',
        fontFamily: 'Verdana',
        fontSize: '15px',
        borderRadius: '6px',
        border: '1px solid lightgrey',
        backgroundColor: '#fafafa',
        boxShadow: 'inset 0px 0px 5px 0px lightgrey',
        WebkitBoxShadow: 'inset 0px 0px 5px 0px lightgrey',
        MozBoxShadow: 'inset 0px 0px 5px 0px lightgrey',
        OBoxShadow: 'inset 0px 0px 5px 0px lightgrey',
        margin: '0 15px 0 0'
    },

    loginButtonActiveStyle: {
        color: '#1C1C1C',
        height: '30px',
        width: '90px',
        boxSizing: 'border-box',
        opacity: '0.85',
        fontFamily: 'Verdana',
        fontSize: '15px',
        borderRadius: '6px',
        border: '1px solid lightgrey',
        backgroundColor: '#fafafa',
        boxShadow: 'inset 0px 0px 5px 0px lightgrey',
        WebkitBoxShadow: 'inset 0px 0px 5px 0px lightgrey',
        MozBoxShadow: 'inset 0px 0px 5px 0px lightgrey',
        OBoxShadow: 'inset 0px 0px 5px 0px lightgrey',
        margin: '0 15px 0 0'
    },

    inputValidStyle: {
        backgroundColor: 'white',
        boxShadow: 'inset 0px 0px 5px 0px lightgrey',
        WebkitBoxShadow: 'inset 0px 0px 5px 0px lightgrey',
        MozBoxShadow: 'inset 0px 0px 5px 0px lightgrey',
        OBoxShadow: 'inset 0px 0px 5px 0px lightgrey'
    },

    inputInvalidStyle: {
        backgroundColor: '#FFF8F6',
        boxShadow: 'inset 0px 0px 5px 0px #FFD7CE',
        WebkitBoxShadow: 'inset 0px 0px 5px 0px #FFD7CE ',
        MozBoxShadow: 'inset 0px 0px 5px 0px #FFD7CE ',
        OBoxShadow: 'inset 0px 0px 5px 0px #FFD7CE '
    }
};

module.exports = inlineStyles;