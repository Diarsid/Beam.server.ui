var inlineStyles = {

    modalDialogStyle: {
        overlay : {
            backgroundColor   : 'rgba(0, 0, 0, 0.5)'
        },
        content : {
            border: '1px solid darkgray',
            borderRadius: '6px',
            backgroundColor: '#fafafa',
            boxShadow: 'inset 0px 0px 10px 0px lightgrey',
            WebkitBoxShadow: 'inset 0px 0px 10px 0px lightgrey',
            MozBoxShadow: 'inset 0px 0px 10px 0px lightgrey',
            OBoxShadow: 'inset 0px 0px 10px 0px lightgrey',
            top                   : '50%',
            left                  : '50%',
            right                 : 'auto',
            bottom                : 'auto',
            marginRight           : '-50%',
            transform             : 'translate(-50%, -50%)'
        }
    },

    dialogButtonStyle: {
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

    dialogForbiddenButtonStyle: {
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

    dialogButtonStyleHover: {
        color: '#1C1C1C',
        height: '30px',
        width: '90px',
        boxSizing: 'border-box',
        opacity: '1',
        fontFamily: 'Verdana',
        fontSize: '15px',
        borderRadius: '6px',
        border: '1px solid lightgrey',
        backgroundColor: 'white',
        boxShadow: '0px 0px 10px 0px white, inset 0px 0px 3px 0px lightgrey',
        WebkitBoxShadow: '0px 0px 10px 0px white, inset 0px 0px 3px 0px lightgrey',
        MozBoxShadow: '0px 0px 10px 0px white, inset 0px 0px 3px 0px lightgrey',
        OBoxShadow: '0px 0px 10px 0px white, inset 0px 0px 3px 0px lightgrey',
        margin: '0 15px 0 0'
    },

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