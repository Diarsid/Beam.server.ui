var actionTypes = require("./action-types.js");

function creatorLog(message) {
    console.log("[APP] [ACTION CREATOR] " + message);
}

var actionCreators = {

    app : {

        goToLandingPageAction : function () {
            return {
                type : actionTypes.goToLanding
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

    pages : {

    }

};

module.exports = actionCreators;