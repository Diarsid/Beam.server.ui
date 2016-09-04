var dispatch =
    require("./../store/app-store.js").dispatch;
var actionCreators =
    require("./action-creators.js");

function dispatchLog(message) {
    console.log("[APP] [ACTION DISPATCHER] " + message);
}

var actionDispatchers = {

    app : {

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
    }
};

module.exports = actionDispatchers;