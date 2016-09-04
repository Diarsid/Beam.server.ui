var actionTypes = {
    appStarts : "APP_STARTS",

    goToMain : "GO_TO_MAIN",
    goToError : "GO_TO_ERROR",
    goToLanding : "GO_TO_LANDING",
    goToLogin : "GO_TO_LOGIN",
    goToRegister : "GO_TO_REGISTER",

    storedUserInfoValidationBegins : "STORED_USER_INFO_CHECKING_BEGINS",
    storedUserInfoValid : "STORED_USER_INFO_IS_VALID",

    loginNickNameChanged : "LOGIN_NICK_NAME_CHANGED",
    loginNickNameValidationBegins: "LOGIN_NICK_NAME_VALIDATION_BEGINS",
    loginNickNameValid : "LOGIN_NICK_NAME_VALID",
    loginNickNameInvalid : "LOGIN_NICK_NAME_INVALID",

    loginPasswordChanged : "LOGIN_PASSWORD_CHANGED",
    loginPasswordValidationBegins : "LOGIN_PASSWORD_VALIDATION_BEGINS",
    loginPasswordValid : "LOGIN_PASSWORD_VALID",
    loginPasswordInvalid : "LOGIN_PASSWORD_INVALID",

    loginAttemptBegins : "LOGIN_ATTMEPT_BEGINS",
    loginFailed : "LOGIN_FAILED",
    loginSuccess : "LOGIN_SUCCESS"
};

module.exports = actionTypes;