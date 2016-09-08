var actionTypes =
    require("./../actions/action-types.js");
var appPages =
    require("./../store/app-pages.js");

function currentPageLog(message) {
    console.log("[APP] [CURRENT PAGE REDUCER] " + message);
}

function defineCurrentPageState(currentPageState = appPages.landing, action) {
    switch ( action.type ) {

        case actionTypes.goToLanding :
            currentPageLog("goToLanding");
            return appPages.landing;
        case actionTypes.goToLogin :
            currentPageLog("goToLogin");
            return appPages.login;
        case actionTypes.goToRegister :
            currentPageLog("goToRegister");
            return appPages.registration;
        case actionTypes.storedUserInfoValid :
            currentPageLog("stored user info valid");
            return appPages.main;
        case actionTypes.loginSuccess :
            currentPageLog("login success");
            return appPages.main;
        case actionTypes.regSuccess :
            currentPageLog("reg success");
            return appPages.main;
        case actionTypes.logout :
            currentPageLog("logout");
            return appPages.landing;

        default :
            currentPageLog("default: " + currentPageState);
            return currentPageState;
    }
}

module.exports = defineCurrentPageState;