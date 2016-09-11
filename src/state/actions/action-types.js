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

    regNickNameChanged : "REGISTR_NICK_NAME_CHANGED",
    regNickNameValidationBegins: "REGISTR_NICK_NAME_VALIDATION_BEGINS",
    regNickNameValid : "REGISTR_NICK_NAME_VALID",
    regNickNameInvalid : "REGISTR_NICK_NAME_INVALID",

    regNameChanged : "REGISTR_NAME_CHANGED",
    regNameValidationBegins: "REGISTR_NAME_VALIDATION_BEGINS",
    regNameValid : "REGISTR_NAME_VALID",
    regNameInvalid : "REGISTR_NAME_INVALID",

    regSurnameChanged : "REGISTR_SURNAME_CHANGED",
    regSurnameValidationBegins: "REGISTR_SURNAME_VALIDATION_BEGINS",
    regSurnameValid : "REGISTR_SURNAME_VALID",
    regSurnameInvalid : "REGISTR_SURNAME_INVALID",

    regEmailChanged : "REGISTR_EMAIL_CHANGED",
    regEmailValidationBegins: "REGISTR_EMAIL_VALIDATION_BEGINS",
    regEmailValid : "REGISTR_EMAIL_VALID",
    regEmailInvalid : "REGISTR_EMAIL_INVALID",

    regPasswordChanged : "REGISTR_PASSWORD_CHANGED",
    regPasswordValidationBegins : "REGISTR_PASSWORD_VALIDATION_BEGINS",
    regPasswordValid : "REGISTR_PASSWORD_VALID",
    regPasswordInvalid : "REGISTR_PASSWORD_INVALID",

    regConfirmPasswordChanged : "REGISTR_CONFIRM_PASSWORD_CHANGED",
    regConfirmPasswordValidationBegins : "REGISTR_CONFIRM_PASSWORD_VALIDATION_BEGINS",
    regConfirmPasswordValid : "REGISTR_CONFIRM_PASSWORD_VALID",
    regConfirmPasswordInvalid : "REGISTR_CONFIRM_PASSWORD_INVALID",

    regPasswordsDiffer : "REGISTR_PASSWORDS_DIFFER",
    regPasswordsEqual : "REGISTR_PASSWORDS_EQUAL",

    loginAssessIfAllowed : "ASSESS_IF_LOGIN_ALLOWED",
    loginAttemptBegins : "LOGIN_ATTMEPT_BEGINS",
    loginFailed : "LOGIN_FAILED",
    loginSuccess : "LOGIN_SUCCESS",

    regAssessIfAllowed : "ASSESS_IF_REGISTR_ALLOWED",
    regAttemptBegins : "REGISTR_ATTEMPT_BEGINS",
    regFailed : "REGISTR_FAILED",
    regSuccess : "REGISTR_SUCCESS",

    logout : "LOGOUT",

    webPanelLoadingBegins : "WEB_PANEL_LOADING_BEGINS",
    webPanelLoaded : "WEB_PANEL_LOADED",
    webPanelLoadingFailed : "WEB_PANEL_LOADING_FAILED",

    bookmarksLoadingBegins : "BOOKMARKS_LOADING_BEGINS",
    bookmarksLoaded : "BOOKMARKS_LOADED",
    bookmarksLoadingFailed : "BOOKMARKS_LOADING_FAILED",

    directoryCreationStart : "DIR_CREATION_START",
    directoryCreationSuccess : "DIR_CREATION_SUCCESS",
    directoryCreationFail : "DIR_CREATION_FAIL"
};

module.exports = actionTypes;