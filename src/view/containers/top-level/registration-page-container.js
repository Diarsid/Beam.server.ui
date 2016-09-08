var connect = require('react-redux').connect;

var storage =
    require("./../../../state/store/app-local-storage.js");
var RegistrationPage =
    require("./../../components/top-level/registration-page.js");
var actionDispatchers =
    require("./../../../state/actions/action-dispatchers.js");
var registrationAjaxCall =
    require("./../../../network/prepared-ajax-calls/registration-call.js");
var validateNickNameAjaxCall =
    require("./../../../network/prepared-ajax-calls/validate-nick-name-call.js");
var validateNameAjaxCall =
    require("./../../../network/prepared-ajax-calls/validate-name-call.js");
var validateEmailAjaxCall =
    require("./../../../network/prepared-ajax-calls/validate-email-call.js");
var validatePasswordAjaxCall =
    require("./../../../network/prepared-ajax-calls/validate-password-call.js");

//---------------------

var nickNameValidationDelay;
var nameValidationDelay;
var surnameValidationDelay;
var emailValidationDelay;
var passwordValidationDelay;
var confirmPasswordValidationDelay;
var comparePasswordsDelay;

function beginDelayedPasswordValidation(newPassword) {
    var passwordAjaxValidationCallbacks = {
        onStart : actionDispatchers.reg.dispatchPasswordValidationBeginsAction,
        onValid : function () {
            actionDispatchers.reg.dispatchPasswordValidAction();
            actionDispatchers.reg.dispatchAssessIfRegistrationAllowedAction();
        },
        onInvalid : actionDispatchers.reg.dispatchPasswordInvalidAction
    };
    validatePasswordAjaxCall(newPassword, passwordAjaxValidationCallbacks);
}

function beginDelayedConfirmPasswordValidation(newConfirmPassword) {
    var confirmPasswordAjaxValidationCallbacks = {
        onStart : actionDispatchers.reg.dispatchConfirmPasswordValidationBeginsAction,
        onValid : function () {
            actionDispatchers.reg.dispatchConfirmPasswordValidAction();
            actionDispatchers.reg.dispatchAssessIfRegistrationAllowedAction();
        },
        onInvalid : actionDispatchers.reg.dispatchConfirmPasswordInvalidAction
    };
    validatePasswordAjaxCall(newConfirmPassword, confirmPasswordAjaxValidationCallbacks);
}

function beginDelayedNickNameValidation(newNickName) {
    var nickNameAjaxValidationCallbacks = {
        onStart : actionDispatchers.reg.dispatchNickNameValidationBeginsAction,
        onValid : function () {
            actionDispatchers.reg.dispatchNickNameValidAction();
            actionDispatchers.reg.dispatchAssessIfRegistrationAllowedAction();
        },
        onInvalid : actionDispatchers.reg.dispatchNickNameInvalidAction
    };
    validateNickNameAjaxCall(newNickName, nickNameAjaxValidationCallbacks);
}

function beginDelayedSurnameValidation(newSurname) {
    var surnameAjaxValidationCallbacks = {
        onStart : actionDispatchers.reg.dispatchSurnameValidationBeginsAction,
        onValid : function () {
            actionDispatchers.reg.dispatchSurnameValidAction();
            actionDispatchers.reg.dispatchAssessIfRegistrationAllowedAction();
        },
        onInvalid : actionDispatchers.reg.dispatchSurnameInvalidAction
    };
    validateNameAjaxCall(newSurname, surnameAjaxValidationCallbacks);
}

function beginDelayedNameValidation(newName) {
    var nameAjaxValidationCallbacks = {
        onStart : actionDispatchers.reg.dispatchNameValidationBeginsAction,
        onValid : function() {
            actionDispatchers.reg.dispatchNameValidAction();
            actionDispatchers.reg.dispatchAssessIfRegistrationAllowedAction();
        },
        onInvalid : actionDispatchers.reg.dispatchNameInvalidAction
    };
    validateNameAjaxCall(newName, nameAjaxValidationCallbacks);
}

function beginDelayedEmailValidation(newEmail) {
    var emailAjaxValidationCallbacks = {
        onStart : actionDispatchers.reg.dispatchEmailValidationBeginsAction,
        onValid : function () {
            actionDispatchers.reg.dispatchEmailValidAction();
            actionDispatchers.reg.dispatchAssessIfRegistrationAllowedAction();
        },
        onInvalid : actionDispatchers.reg.dispatchEmailInvalidAction
    };
    validateEmailAjaxCall(newEmail, emailAjaxValidationCallbacks);
}

function comparePasswords(password, confirmPassword) {
    if ( password === confirmPassword ) {
        actionDispatchers.reg.dispatchPasswordsEqualAction();
        actionDispatchers.reg.dispatchAssessIfRegistrationAllowedAction();
    } else {
        actionDispatchers.reg.dispatchPasswordsDifferAction();
    }
}

function nickNameChanged (newNickName) {
    window.clearTimeout(nickNameValidationDelay);
    actionDispatchers.reg.dispatchNickNameChangedAction(newNickName);
    nickNameValidationDelay = window.setTimeout(beginDelayedNickNameValidation, 700, newNickName);
}

function nameChanged (newName) {
    window.clearTimeout(nameValidationDelay);
    actionDispatchers.reg.dispatchNameChangedAction(newName);
    nameValidationDelay = window.setTimeout(beginDelayedNameValidation, 700, newName);
}

function surnameChanged (newSurname) {
    window.clearTimeout(surnameValidationDelay);
    actionDispatchers.reg.dispatchSurnameChangedAction(newSurname);
    surnameValidationDelay = window.setTimeout(beginDelayedSurnameValidation, 700, newSurname);
}

function emailChanged (newEmail) {
    window.clearTimeout(emailValidationDelay);
    actionDispatchers.reg.dispatchEmailChangedAction(newEmail);
    emailValidationDelay = window.setTimeout(beginDelayedEmailValidation, 700, newEmail);
}

function passwordChangedAndCompare (newPassword, newConfirmPassword) {
    window.clearTimeout(passwordValidationDelay);
    window.clearTimeout(comparePasswordsDelay);
    actionDispatchers.reg.dispatchPasswordChangedAction(newPassword);
    passwordValidationDelay = window.setTimeout(beginDelayedPasswordValidation, 700, newPassword);
    comparePasswordsDelay = window.setTimeout(comparePasswords, 700, newPassword, newConfirmPassword);
}

function confirmPasswordChangedAndCompare (newPassword, newConfirmPassword) {
    window.clearTimeout(confirmPasswordValidationDelay);
    window.clearTimeout(comparePasswordsDelay);
    actionDispatchers.reg.dispatchConfirmPasswordChangedAction(newConfirmPassword);
    confirmPasswordValidationDelay = window.setTimeout(beginDelayedConfirmPasswordValidation, 700, newConfirmPassword);
    comparePasswordsDelay = window.setTimeout(comparePasswords, 700, newPassword, newConfirmPassword);
}

function invokeRegistrationCall(regData) {
    var regAjaxCallbacks = {
        onStart : actionDispatchers.reg.dispatchRegistrationAttemptBegins,
        onSuccess : function (jwtString) {
            actionDispatchers.reg.dispatchRegistrationSuccessAction(storage.saveAndParseJwt(jwtString));
        },
        onUnauthorized : actionDispatchers.reg.dispatchRegistrationFailedAction,
        onBadRequest : actionDispatchers.reg.dispatchRegistrationFailedAction
    };
    registrationAjaxCall(regData, regAjaxCallbacks);
}

function mapStateToProps(state) {
    return {
        nickName : state.registrationPage.nickName,
        nickNameValid : state.registrationPage.nickNameValid,
        nickNameInvalidMessage : state.registrationPage.nickNameInvalidMessage,
        nickNameValidationInProgress : state.registrationPage.nickNameValidationInProgress,

        name : state.registrationPage.name,
        nameValid : state.registrationPage.nameValid,
        nameInvalidMessage : state.registrationPage.nameInvalidMessage,
        nameValidationInProgress : state.registrationPage.nameValidationInProgress,

        surname : state.registrationPage.surname,
        surnameValid : state.registrationPage.surnameValid,
        surnameInvalidMessage : state.registrationPage.surnameInvalidMessage,
        surnameValidationInProgress : state.registrationPage.surnameValidationInProgress,

        email : state.registrationPage.email,
        emailValid : state.registrationPage.emailValid,
        emailInvalidMessage : state.registrationPage.emailInvalidMessage,
        emailValidationInProgress : state.registrationPage.emailValidationInProgress,

        password : state.registrationPage.password,
        passwordValid : state.registrationPage.passwordValid,
        passwordInvalidMessage : state.registrationPage.passwordInvalidMessage,
        passwordValidationInProgress : state.registrationPage.passwordValidationInProgress,

        confirmPassword : state.registrationPage.confirmPassword,
        confirmPasswordValid : state.registrationPage.confirmPasswordValid,
        confirmPasswordInvalidMessage : state.registrationPage.confirmPasswordInvalidMessage,
        confirmPasswordValidationInProgress : state.registrationPage.confirmPasswordValidationInProgress,

        registrationFailureMessage : state.registrationPage.registrationFailureMessage,
        passwordsDifferFailureMessage : state.registrationPage.passwordsDifferFailureMessage,

        goToLanding : actionDispatchers.app.dispatchGoToLandingPageAction,
        tryToRegister : function () {
            if ( state.registrationPage.registrationAllowed ) {
                var regData = {
                    "nickName" : state.registrationPage.nickName,
                    "name" : state.registrationPage.name,
                    "surname" : state.registrationPage.surname,
                    "email" : state.registrationPage.email,
                    "password" : state.registrationPage.password
                };
                invokeRegistrationCall(regData);
            }
        },
        registrationAllowed : state.registrationPage.registrationAllowed,
        nickNameChanged : nickNameChanged,
        nameChanged : nameChanged,
        surnameChanged : surnameChanged,
        emailChanged : emailChanged,
        passwordChanged : function (newPassword) {
            passwordChangedAndCompare(newPassword, state.registrationPage.confirmPassword)
        },
        confirmPasswordChanged : function (newConfirmPassword) {
            confirmPasswordChangedAndCompare(state.registrationPage.password, newConfirmPassword);
        }
    };
}

var RegistrationPageContainer = connect(mapStateToProps)(RegistrationPage);

module.exports = RegistrationPageContainer;