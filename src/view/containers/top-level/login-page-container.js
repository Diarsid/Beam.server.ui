var connect = require('react-redux').connect;

var storage =
    require("./../../../state/local/storage.js");
var LoginPage =
    require("./../../components/top-level/login-page.js");
var actionDispatchers =
    require("./../../../state/actions/action-dispatchers.js");
var loginAjaxCall =
    require("./../../../network/prepared-ajax-calls/login-call.js");
var validateNickNameAjaxCall =
    require("./../../../network/prepared-ajax-calls/validate-nick-name-call.js");
var validatePasswordAjaxCall =
    require("./../../../network/prepared-ajax-calls/validate-password-call.js");

// ----------------------

var passwordValidationDelay;
var nickNameValidationDelay;

function beginDelayedPasswordValidation(newPassword) {
    var passwordAjaxValidationCallbacks = {
        onStart : actionDispatchers.login.dispatchPasswordValidationBeginsAction,
        onValid : function () {
            actionDispatchers.login.dispatchPasswordValidAction();
            actionDispatchers.login.dispatchAssessIfLoginAllowedAction();
        },
        onInvalid : actionDispatchers.login.dispatchPasswordInvalidAction
    };
    validatePasswordAjaxCall(newPassword, passwordAjaxValidationCallbacks);
}

function beginDelayedNickNameValidation(newNickName) {
    var nickNameAjaxValidationCallbacks = {
        onStart : actionDispatchers.login.dispatchNickNameValidationBeginsAction,
        onValid : function () {
            actionDispatchers.login.dispatchNickNameValidAction();
            actionDispatchers.login.dispatchAssessIfLoginAllowedAction();
        },
        onInvalid : actionDispatchers.login.dispatchNickNameInvalidAction
    };
    validateNickNameAjaxCall(newNickName, nickNameAjaxValidationCallbacks);
}

function passwordChanged (newPassword) {
    window.clearTimeout(passwordValidationDelay);
    actionDispatchers.login.dispatchPasswordChangedAction(newPassword);
    passwordValidationDelay = window.setTimeout(beginDelayedPasswordValidation, 700, newPassword);
}

function nickNameChanged (newNickName) {
    window.clearTimeout(nickNameValidationDelay);
    actionDispatchers.login.dispatchNickNameChangedAction(newNickName);
    nickNameValidationDelay = window.setTimeout(beginDelayedNickNameValidation, 700, newNickName);
}

function goToRegistration() {
    actionDispatchers.app.dispatchGoToRegisterAction();
}

function tryToLogin(loginData) {
    var loginAjaxCallbacks = {
        onCallStart : actionDispatchers.login.dispatchLoginAttemptBegins,
        onCallSuccess : function (jwtString) {
            actionDispatchers.login.dispatchLoginSuccessAction(storage.saveAndParseJwt(jwtString));
        },
        onUnauthorized : actionDispatchers.login.dispatchLoginFailedAction,
        onBadRequest : actionDispatchers.login.dispatchLoginFailedAction
    };
    loginAjaxCall(loginData, loginAjaxCallbacks);
}

function mapStateToProps(state) {
    return {
        nickName : state.loginPage.nickName,
        nickNameValid: state.loginPage.nickNameValid,
        nickNameInvalidMessage : state.loginPage.nickNameInvalidMessage,
        nickNameValidationInProgress : state.loginPage.nickNameValidationInProgress,

        password : state.loginPage.password,
        passwordValid : state.loginPage.passwordValid,
        passwordInvalidMessage : state.loginPage.passwordInvalidMessage,
        passwordValidationInProgress : state.loginPage.passwordValidationInProgress,

        loginFailureMessage : state.loginPage.loginFailureMessage,

        loginAllowed : state.loginPage.loginAllowed,

        goToLanding : actionDispatchers.app.dispatchGoToLandingPageAction,
        goToRegistration : goToRegistration,
        tryToLogin : function() {
            if (state.loginPage.loginAllowed) {
                var loginData = {
                    "nickName" : state.loginPage.nickName,
                    "password" : state.loginPage.password
                };
                tryToLogin(loginData);
            }
        },
        nickNameChanged : nickNameChanged,
        passwordChanged : passwordChanged
    }
}

var LoginPageContainer = connect(mapStateToProps)(LoginPage);

module.exports = LoginPageContainer;