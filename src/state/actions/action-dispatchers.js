var dispatch =
    require("./../store/app-store.js").dispatch;
var actionCreators =
    require("./action-creators.js");

function dispatchLog(message) {
    console.log("[APP] [ACTION DISPATCHER] " + message);
}

var actionDispatchers = {

    app : {

        dispatchAppStartsAction : function () {
            dispatchLog("app starts.");
            dispatch(actionCreators.app.appStartsAction());
        },

        dispatchGoToLandingPageAction : function () {
            dispatchLog("go to landing.");
            dispatch(actionCreators.app.goToLandingPageAction());
        },

        dispatchGoToLoginAction : function () {
            dispatchLog("go to login.");
            dispatch(actionCreators.initialAuthCheck.goToLoginAction());
        },

        dispatchGoToRegisterAction : function () {
            dispatchLog("go to register.");
            dispatch(actionCreators.initialAuthCheck.goToRegisterAction());
        },

        dispatchLogoutAction : function () {
            dispatchLog("logout.");
            dispatch(actionCreators.app.logoutAction());
        },

        dispatchGoToErrorAction : function (message) {
            dispatchLog("Error occurs : " + message);
            dispatch(actionCreators.app.goToErrorAction(message));
        }
    },

    initialAuthCheck : {

        dispatchStoredUserInfoValidationBeginsAction : function () {
            dispatchLog("stored user info validation... ");
            dispatch(actionCreators.initialAuthCheck.storedUserInfoValidationBeginsAction() );
        },

        dispatchStoredUserInfoValidAction : function ( userInfo ) {
            dispatchLog("stored user info valid, " + userInfo);
            dispatch(actionCreators.initialAuthCheck.storedUserInfoValidAction(userInfo) );
        }


    },

    login : {

        dispatchNickNameChangedAction : function (newNickName) {
            dispatchLog("nickName changed : " + newNickName);
            dispatch(actionCreators.login.nickNameChangedAction(newNickName));
        },

        dispatchNickNameValidAction : function () {
            dispatchLog("nickNameValid");
            dispatch(actionCreators.login.nickNameValidAction());
        },

        dispatchNickNameInvalidAction : function (message) {
            dispatchLog("nickName invalid : " + message);
            dispatch(actionCreators.login.nickNameInvalidAction(message));
        },

        dispatchNickNameValidationBeginsAction : function () {
            dispatchLog("nickName validation begins... ");
            dispatch(actionCreators.login.nickNameValidationBeginsAction());
        },

        dispatchPasswordChangedAction : function (newPassword) {
            dispatchLog("password changed : " + newPassword);
            dispatch(actionCreators.login.passwordChangedAction(newPassword));
        },

        dispatchPasswordValidAction : function () {
            dispatchLog("password valid.");
            dispatch(actionCreators.login.passwordValidAction());
        },

        dispatchPasswordInvalidAction : function (message) {
            dispatchLog("password invalid : " + message);
            dispatch(actionCreators.login.passwordInvalidAction(message));
        },

        dispatchPasswordValidationBeginsAction : function () {
            dispatchLog("password validation begins...");
            dispatch(actionCreators.login.passwordValidationBeginsAction());
        },

        dispatchAssessIfLoginAllowedAction : function () {
            dispatchLog("is login allowed?");
            dispatch(actionCreators.login.assessIfAllowedAction());
        },

        dispatchLoginAttemptBegins : function () {
            dispatchLog("login call begins...");
            dispatch(actionCreators.login.attemptBegins());
        },

        dispatchLoginFailedAction : function (message) {
            dispatchLog("login failed : " + message);
            dispatch(actionCreators.login.attemptFailedAction(message));
        },

        dispatchLoginSuccessAction : function (userInfo) {
            dispatchLog("login success - " + userInfo);
            dispatch(actionCreators.login.attemptSuccessAction(userInfo));
        }
    },

    reg : {

        dispatchNickNameChangedAction : function (newNickName) {
            dispatchLog("nickName changed : " + newNickName);
            dispatch(actionCreators.reg.nickNameChangedAction(newNickName));
        },

        dispatchNickNameValidAction : function () {
            dispatchLog("nickNameValid");
            dispatch(actionCreators.reg.nickNameValidAction());
        },

        dispatchNickNameInvalidAction : function (message) {
            dispatchLog("nickName invalid : " + message);
            dispatch(actionCreators.reg.nickNameInvalidAction(message));
        },

        dispatchNickNameValidationBeginsAction : function () {
            dispatchLog("nickName validation begins... ");
            dispatch(actionCreators.reg.nickNameValidationBeginsAction());
        },

        dispatchNameChangedAction : function (newName) {
            dispatchLog("name changed : " + newName);
            dispatch(actionCreators.reg.nameChangedAction(newName));
        },

        dispatchNameValidAction : function () {
            dispatchLog("nameValid");
            dispatch(actionCreators.reg.nameValidAction());
        },

        dispatchNameInvalidAction : function (message) {
            dispatchLog("name invalid : " + message);
            dispatch(actionCreators.reg.nameInvalidAction(message));
        },

        dispatchNameValidationBeginsAction : function () {
            dispatchLog("name validation begins... ");
            dispatch(actionCreators.reg.nameValidationBeginsAction());
        },

        dispatchSurnameChangedAction : function (newSurname) {
            dispatchLog("surname changed : " + newSurname);
            dispatch(actionCreators.reg.surnameChangedAction(newSurname));
        },

        dispatchSurnameValidAction : function () {
            dispatchLog("surname valid");
            dispatch(actionCreators.reg.surnameValidAction());
        },

        dispatchSurnameInvalidAction : function (message) {
            dispatchLog("surname invalid : " + message);
            dispatch(actionCreators.reg.surnameInvalidAction(message));
        },

        dispatchSurnameValidationBeginsAction : function () {
            dispatchLog("surname validation begins... ");
            dispatch(actionCreators.reg.surnameValidationBeginsAction());
        },

        dispatchEmailChangedAction : function (newEmail) {
            dispatchLog("email changed : " + newEmail);
            dispatch(actionCreators.reg.emailChangedAction(newEmail));
        },

        dispatchEmailValidAction : function () {
            dispatchLog("email valid");
            dispatch(actionCreators.reg.emailValidAction());
        },

        dispatchEmailInvalidAction : function (message) {
            dispatchLog("email invalid : " + message);
            dispatch(actionCreators.reg.emailInvalidAction(message));
        },

        dispatchEmailValidationBeginsAction : function () {
            dispatchLog("email validation begins... ");
            dispatch(actionCreators.reg.emailValidationBeginsAction());
        },

        dispatchPasswordChangedAction : function (newPassword) {
            dispatchLog("password changed : " + newPassword);
            dispatch(actionCreators.reg.passwordChangedAction(newPassword));
        },

        dispatchPasswordValidAction : function () {
            dispatchLog("password valid.");
            dispatch(actionCreators.reg.passwordValidAction());
        },

        dispatchPasswordInvalidAction : function (message) {
            dispatchLog("password invalid : " + message);
            dispatch(actionCreators.reg.passwordInvalidAction(message));
        },

        dispatchPasswordValidationBeginsAction : function () {
            dispatchLog("password validation begins...");
            dispatch(actionCreators.reg.passwordValidationBeginsAction());
        },

        dispatchConfirmPasswordChangedAction : function (newConfirmPassword) {
            dispatchLog("confirm password changed : " + newConfirmPassword);
            dispatch(actionCreators.reg.confirmPasswordChangedAction(newConfirmPassword));
        },

        dispatchConfirmPasswordValidAction : function () {
            dispatchLog("confirm password valid.");
            dispatch(actionCreators.reg.confirmPasswordValidAction());
        },

        dispatchConfirmPasswordInvalidAction : function (message) {
            dispatchLog("confirm password invalid : " + message);
            dispatch(actionCreators.reg.confirmPasswordInvalidAction(message));
        },

        dispatchConfirmPasswordValidationBeginsAction : function () {
            dispatchLog("confirm password validation begins...");
            dispatch(actionCreators.reg.confirmPasswordValidationBeginsAction());
        },

        dispatchAssessIfRegistrationAllowedAction : function () {
            dispatchLog("is registr allowed?");
            dispatch(actionCreators.reg.assessIfAlowedAction());
        },

        dispatchRegistrationAttemptBegins : function () {
            dispatchLog("registr call begins...");
            dispatch(actionCreators.reg.attemptBegins());
        },

        dispatchRegistrationFailedAction : function (message) {
            dispatchLog("registr failed : " + message);
            dispatch(actionCreators.reg.attemptFailedAction(message));
        },

        dispatchRegistrationSuccessAction : function (userInfo) {
            dispatchLog("registr success - " + userInfo);
            dispatch(actionCreators.reg.attemptSuccessAction(userInfo));
        },

        dispatchPasswordsDifferAction : function () {
            dispatchLog("passwords differ.");
            dispatch(actionCreators.reg.passwordsDifferAction());
        },

        dispatchPasswordsEqualAction : function () {
            dispatchLog("passwords equal.");
            dispatch(actionCreators.reg.passwordsEqualAction());
        }
    },

    main : {

        dispatchToggleMainPageContentViewAction : function () {
            dispatchLog("toggle main page content view.");
            dispatch(actionCreators.main.toggleMainPageContentViewAction());
        },

        webPanel : {

            dispatchLoadingBeginsAction : function () {
                dispatchLog("webPanel loading begins...");
                dispatch(actionCreators.main.webPanel.loadingBegins());
            },

            dispatchLoadedAction : function (dirs) {
                dispatchLog("webPanel loaded: ");
                console.log(dirs);
                dispatch(actionCreators.main.webPanel.loaded(dirs));
            },

            dispatchLoadingFailedAction : function (message) {
                dispatchLog("webPanel loading fails: " + message);
                dispatch(actionCreators.main.webPanel.loadingFailed(message));
            }
        },

        bookmarks : {
            dispatchLoadingBeginsAction : function () {
                dispatchLog("bookmarks loading begins...");
                dispatch(actionCreators.main.bookmarks.loadingBegins());
            },

            dispatchLoadedAction : function (dirs) {
                dispatchLog("bookmarks loaded: ");
                console.log(dirs);
                dispatch(actionCreators.main.bookmarks.loaded(dirs));
            },

            dispatchLoadingFailedAction : function (message) {
                dispatchLog("bookmarks loading fails: " + message);
                dispatch(actionCreators.main.bookmarks.loadingFailed(message));
            }
        },

        directory : {

            dispatchCreationStartAction() {
                dispatchLog("directory creation start...");
                dispatch(actionCreators.main.directory.creationStartAction());
            },

            directoryCreationSuccess(placement, dirName) {
                dispatchLog("directory created : " + placement + "::" + dirName);
                dispatch(actionCreators.main.directory.creationSuccessAction(placement, dirName));
            },

            dispatchCreationFailAction(message) {
                dispatchLog("directory creation fails : " + message);
                dispatch(actionCreators.main.directory.creationFailAction(message));
            }
        }
    }
};

module.exports = actionDispatchers;