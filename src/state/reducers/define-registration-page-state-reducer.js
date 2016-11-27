/* custom modules */

var actionTypes =
    require("./../actions/action-types.js");

/* module code */

function reducerLog(message) {
    console.log("[REG REDUCER] " + message);
}

var initialRegPageState = {
    nickNameState : {
        value : "",
        status : "",
        message : ""
    },
    nameState : {
        value : "",
        status : "",
        message : ""
    },
    surnameState : {
        value : "",
        status : "",
        message : ""
    },
    emailState : {
        value : "",
        status : "",
        message : ""
    },
    passwordState : {
        value : "",
        status : "",
        message : ""
    },
    confirmPasswordState : {
        value : "",
        status : "",
        message : ""
    },
    message : ""
};

function defineRegistrationPageState(regPageState = initialRegPageState, action) {

    switch (action.type) {

        case actionTypes.appStarts :
        case actionTypes.regClear :
        case actionTypes.userInfoDelivered :
        case actionTypes.logout :
            reducerLog("initial");
            return initialRegPageState;

        case actionTypes.regFailed :
            return Object.assign({}, regPageState, {
                message : "Registration failed!"
            });

        case actionTypes.regNickNameChanged :

            return Object.assign({}, regPageState, {
                nickNameState : action.nickNameState,
                message : ""
            });
        case actionTypes.regNameChanged :
            return Object.assign({}, regPageState, {
                nameState : action.nameState,
                message : ""
            });
        case actionTypes.regSurnameChanged :
            return Object.assign({}, regPageState, {
                surnameState : action.surnameState,
                message : ""
            });
        case actionTypes.regEmailChanged :
            return Object.assign({}, regPageState, {
                emailState : action.emailState,
                message : ""
            });
        case actionTypes.regPasswordChanged :
            return Object.assign({}, regPageState, {
                passwordState : action.passwordState,
                message : ""
            });
        case actionTypes.regConfirmPasswordChanged : {
            return Object.assign({}, regPageState, {
                confirmPasswordState : action.confirmPasswordState,
                message : ""
            });
        }

        default :
            return regPageState;
    }
}

module.exports = defineRegistrationPageState;