var actionTypes = require("./action-types.js");

function creatorLog(message) {
    console.log("[APP] [ACTION CREATOR] " + message);
}

var actionCreators = {

    app : {

        appStartsAction : function () {
            return {
                type : actionTypes.appStarts
            }
        },

        goToLandingPageAction : function () {
            return {
                type : actionTypes.goToLanding
            }
        },

        logoutAction : function () {
            return {
                type : actionTypes.logout
            }
        },

        goToErrorAction : function (message) {
            return {
                type : actionTypes.goToError,
                message : message
            }
        }
    },

    main : {

        toggleMainPageContentViewAction : function () {
            return {
                type : actionTypes.toggleMainPageContentView
            }
        },

        webPanel : {

            loadingBegins : function () {
                return {
                    type : actionTypes.webPanelLoadingBegins
                }
            },

            loaded : function (dirs) {
                return {
                    type : actionTypes.webPanelLoaded,
                    dirs : dirs
                }
            },

            loadingFailed : function (message) {
                return {
                    type : actionTypes.webPanelLoadingFailed,
                    message : message
                }
            }
        },

        bookmarks : {
            loadingBegins : function () {
                return {
                    type : actionTypes.bookmarksLoadingBegins
                }
            },

            loaded : function (dirs) {
                return {
                    type : actionTypes.bookmarksLoaded,
                    dirs : dirs
                }
            },

            loadingFailed : function (message) {
                return {
                    type : actionTypes.bookmarksLoadingFailed,
                    message : message
                }
            }
        },

        directory : {

            creationStartAction() {
                return {
                    type : actionTypes.directoryCreationStart
                }
            },

            creationSuccessAction(placement, dirName) {
                return {
                    type : actionTypes.directoryCreationSuccess,
                    placement : placement,
                    dirName : dirName
                }
            },

            creationFailAction(message) {
                return {
                    type : actionTypes.directoryCreationFail,
                    message : message
                }
            }
        }
    },

    initialAuthCheck : {

        goToLoginAction : function () {
            creatorLog("force to login.");
            return {
                type : actionTypes.goToLogin
            }
        },

        goToRegisterAction : function () {
            creatorLog("force to register.");
            return {
                type : actionTypes.goToRegister
            }
        },

        storedUserInfoValidationBeginsAction : function () {
            creatorLog("stored user info validation... ");
            return {
                type : actionTypes.storedUserInfoValidationBegins
            }
        },

        storedUserInfoValidAction : function ( userInfo ) {
            creatorLog("stored user info valid: " + userInfo);
            return {
                type : actionTypes.storedUserInfoValid,
                userInfo : userInfo
            }
        }
    },

    login: {

        nickNameChangedAction : function (newNickName) {
            creatorLog("login nickName changed to : " + newNickName);
            return {
                type : actionTypes.loginNickNameChanged,
                newNickName : newNickName
            }
        },

        nickNameValidationBeginsAction : function () {
            creatorLog("login nickName validation begins...");
            return {
                type : actionTypes.loginNickNameValidationBegins
            }
        },

        nickNameValidAction : function () {
            creatorLog("login nickName valid.");
            return {
                type : actionTypes.loginNickNameValid
            }
        },

        nickNameInvalidAction : function (message) {
            creatorLog("login nickName invalid : " + message);
            return {
                type : actionTypes.loginNickNameInvalid,
                message : message
            }
        },

        passwordChangedAction : function (newPassword) {
            creatorLog("login password changed : " + newPassword);
            return {
                type : actionTypes.loginPasswordChanged,
                newPassword : newPassword
            }
        },

        passwordValidationBeginsAction : function () {
            return {
                type : actionTypes.loginPasswordValidationBegins
            }
        },

        passwordValidAction : function () {
            return {
                type : actionTypes.loginPasswordValid
            }
        },

        passwordInvalidAction : function (message) {
            return {
                type : actionTypes.loginPasswordInvalid,
                message : message
            }
        },

        assessIfAllowedAction : function () {
            return {
                type : actionTypes.loginAssessIfAllowed
            }
        },

        attemptBegins : function () {
            return {
                type : actionTypes.loginAttemptBegins
            }
        },

        attemptFailedAction : function (message) {
            return {
                type : actionTypes.loginFailed,
                message : message
            }
        },

        attemptSuccessAction : function (userInfo) {
            return {
                type : actionTypes.loginSuccess,
                userInfo : userInfo
            }
        }
    },

    reg : {

        nickNameChangedAction : function (newNickName) {
            creatorLog("registr nickName changed to : " + newNickName);
            return {
                type : actionTypes.regNickNameChanged,
                newNickName : newNickName
            }
        },

        nickNameValidationBeginsAction : function () {
            creatorLog("registr nickName validation begins...");
            return {
                type : actionTypes.regNickNameValidationBegins
            }
        },

        nickNameValidAction : function () {
            creatorLog("registr nickName valid.");
            return {
                type : actionTypes.regNickNameValid
            }
        },

        nickNameInvalidAction : function (message) {
            creatorLog("registr nickName invalid : " + message);
            return {
                type : actionTypes.regNickNameInvalid,
                message : message
            }
        },

        nameChangedAction : function (newName) {
            creatorLog("registr name changed to : " + newName);
            return {
                type : actionTypes.regNameChanged,
                newName : newName
            }
        },

        nameValidationBeginsAction : function () {
            creatorLog("registr name validation begins...");
            return {
                type : actionTypes.regNameValidationBegins
            }
        },

        nameValidAction : function () {
            creatorLog("registr name valid.");
            return {
                type : actionTypes.regNameValid
            }
        },

        nameInvalidAction : function (message) {
            creatorLog("registr name invalid : " + message);
            return {
                type : actionTypes.regNameInvalid,
                message : message
            }
        },

        surnameChangedAction : function (newSurname) {
            creatorLog("registr surname changed to : " + newSurname);
            return {
                type : actionTypes.regSurnameChanged,
                newSurname : newSurname
            }
        },

        surnameValidationBeginsAction : function () {
            creatorLog("registr surname validation begins...");
            return {
                type : actionTypes.regSurnameValidationBegins
            }
        },

        surnameValidAction : function () {
            creatorLog("registr surname valid.");
            return {
                type : actionTypes.regSurnameValid
            }
        },

        surnameInvalidAction : function (message) {
            creatorLog("registr surname invalid : " + message);
            return {
                type : actionTypes.regSurnameInvalid,
                message : message
            }
        },

        emailChangedAction : function (newEmail) {
            creatorLog("registr email changed to : " + newEmail);
            return {
                type : actionTypes.regEmailChanged,
                newEmail : newEmail
            }
        },

        emailValidationBeginsAction : function () {
            creatorLog("registr email validation begins...");
            return {
                type : actionTypes.regEmailValidationBegins
            }
        },

        emailValidAction : function () {
            creatorLog("registr email valid.");
            return {
                type : actionTypes.regEmailValid
            }
        },

        emailInvalidAction : function (message) {
            creatorLog("registr email invalid : " + message);
            return {
                type : actionTypes.regEmailInvalid,
                message : message
            }
        },

        passwordChangedAction : function (newPassword) {
            creatorLog("registr password changed : " + newPassword);
            return {
                type : actionTypes.regPasswordChanged,
                newPassword : newPassword
            }
        },

        passwordValidationBeginsAction : function () {
            return {
                type : actionTypes.regPasswordValidationBegins
            }
        },

        passwordValidAction : function () {
            return {
                type : actionTypes.regPasswordValid
            }
        },

        passwordInvalidAction : function (message) {
            return {
                type : actionTypes.regPasswordInvalid,
                message : message
            }
        },


        confirmPasswordChangedAction : function (newConfirmPassword) {
            creatorLog("registr confirmPassword changed : " + newConfirmPassword);
            return {
                type : actionTypes.regConfirmPasswordChanged,
                newConfirmPassword : newConfirmPassword
            }
        },

        confirmPasswordValidationBeginsAction : function () {
            return {
                type : actionTypes.regConfirmPasswordValidationBegins
            }
        },

        confirmPasswordValidAction : function () {
            return {
                type : actionTypes.regConfirmPasswordValid
            }
        },

        confirmPasswordInvalidAction : function (message) {
            return {
                type : actionTypes.regConfirmPasswordInvalid,
                message : message
            }
        },

        assessIfAlowedAction : function () {
            return {
                type : actionTypes.regAssessIfAllowed
            }
        },

        attemptBegins : function () {
            return {
                type : actionTypes.regAttemptBegins
            }
        },

        attemptFailedAction : function (message) {
            return {
                type : actionTypes.regFailed,
                message : message
            }
        },

        attemptSuccessAction : function (userInfo) {
            return {
                type : actionTypes.regSuccess,
                userInfo : userInfo
            }
        },

        passwordsDifferAction : function () {
            return {
                type : actionTypes.regPasswordsDiffer
            }
        },

        passwordsEqualAction : function () {
            return {
                type : actionTypes.regPasswordsEqual
            }
        }
    }

};

module.exports = actionCreators;