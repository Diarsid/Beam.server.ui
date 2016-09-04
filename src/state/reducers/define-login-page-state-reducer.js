var actionTypes =
    require("./../actions/action-types.js");

var initialLoginPageState = {

    nickName : "",
    nickNameValid: true,
    nickNameInvalidMessage : "",
    nickNameValidationInProgress : false,

    password : "",
    passwordValid : true,
    passwordInvalidMessage : "",
    passwordValidationInProgress : false,

    loginFailureMessage : ""

};

function defineLoginPageState(loginPageState = initialLoginPageState, action) {
    switch (action.type) {

        // actions to process nick name input field
        case actionTypes.loginNickNameChanged :
            return Object.assign({}, loginPageState, {nickName : action.newNickName} );
        case actionTypes.loginNickNameInvalid :
            return Object.assign({}, loginPageState, {
                nickNameValidationInProgress : false,
                nickNameValid : false,
                nickNameInvalidMessage : action.message
            });
        case actionTypes.loginNickNameValid :
            return Object.assign({}, loginPageState, {
                nickNameValidationInProgress : false,
                nickNameValid : true,
                nickNameInvalidMessage : ""
            });
        case actionTypes.loginNickNameValidationBegins :
            return Object.assign({}, loginPageState, {nickNameValidationInProgress : true});

        // actions to process password input field
        case actionTypes.loginPasswordChanged :
            return Object.assign({}, loginPageState, {password : action.newPassword});
        case actionTypes.loginPasswordInvalid :
            return Object.assign({}, loginPageState, {
                passwordValid : false,
                passwordValidationInProgress: false,
                passwordInvalidMessage: action.message
            });
        case actionTypes.loginPasswordValid :
            return Object.assign({}, loginPageState, {
                passwordValid : true,
                passwordValidationInProgress: false,
                passwordInvalidMessage: ""
            });
        case actionTypes.loginPasswordValidationBegins :
            return Object.assign({}, loginPageState, {passwordValidationInProgress : true});

        // login attempt
        case actionTypes.loginFailed :
            return Object.assign({}, loginPageState, {loginFailureMessage : action.message});
        case actionTypes.loginSuccess :
            return initialLoginPageState;

        case actionTypes.goToLanding :
            return initialLoginPageState;
        case actionTypes.goToRegister :
            return initialLoginPageState;
        case actionTypes.goToMain :
            return initialLoginPageState;
        case actionTypes.goToError :
            return initialLoginPageState;

        // default
        default :
            return loginPageState;
    }
}

module.exports = defineLoginPageState;