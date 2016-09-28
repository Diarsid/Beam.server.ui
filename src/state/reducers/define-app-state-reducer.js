var appPages = require("./../store/app-pages.js");

var defineUserState =
    require("./define-user-state-reducer.js");
var defineCurrentPageState =
    require("./define-current-page-state-reducer.js");
var defineLoginPageState =
    require("./define-login-page-state-reducer.js");
var defineRegistrationPageState =
    require("./define-registration-page-state-reducer.js");
var defineMainPageState =
    require("./define-main-page-state-reducer.js");
var defineErrorPageState =
    require("./define-error-page-state-reducer.js");
var actionsGlobalInterceptor =
    require("./../actions-interceptors/global-interceptor.js");

// -------------------------

var appInitialState = {
    user : {},
    currentPage : appPages.initial,
    loginPage : {},
    registrationPage : {},
    mainPage : {},
    errorPage : {}
};

function defineAppState (appState = appInitialState, action ) {
    actionsGlobalInterceptor.intercept(action);
    return {
        user : defineUserState(appState.user, action),
        currentPage : defineCurrentPageState(appState.currentPage, action),
        loginPage : defineLoginPageState(appState.loginPage, action),
        registrationPage : defineRegistrationPageState(appState.registrationPage, action),
        mainPage : defineMainPageState(appState.mainPage, action),
        errorPage : defineErrorPageState(appState.errorPage, action)
    }
}

module.exports = defineAppState;
