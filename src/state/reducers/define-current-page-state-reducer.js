var actionTypes =
    require("./../actions/action-types.js");
var appPages =
    require("./../store/app-pages.js");

function defineCurrentPageState(currentPageState = appPages.landing, action) {
    switch ( action.type ) {

        case actionTypes.goToLanding :
            return appPages.landing;
        case actionTypes.goToLogin :
            return appPages.login;
        case actionTypes.goToRegister :
            return appPages.registration;
        case actionTypes.storedUserInfoValid :
            return appPages.main;
        case actionTypes.loginFailed :
            return appPages.login;
        case actionTypes.loginSuccess :
            return appPages.main;

        default :
            return currentPageState;
    }
}

module.exports = defineCurrentPageState;