var routerReducer = require('react-router-redux').routerReducer;

/* custom modules */

var defineUserState =
    require("./define-user-state-reducer.js");
var defineLoginPageState =
    require("./define-login-page-state-reducer.js");
var defineRegistrationPageState =
    require("./define-registration-page-state-reducer.js");
var defineMainPageState =
    require("./define-main-page-state-reducer.js");
var defineErrorPageState =
    require("./define-error-page-state-reducer.js");

/* module code */

var appInitialState = {
    user : {},
    loginPage : {},
    registrationPage : {},
    mainPage : {},
    errorPage : {},
    routing : {}
};

function defineAppState (appState = appInitialState, action ) {
    return {
        user : defineUserState(appState.user, action),
        loginPage : defineLoginPageState(appState.loginPage, action),
        registrationPage : defineRegistrationPageState(appState.registrationPage, action),
        mainPage : defineMainPageState(appState.mainPage, action),
        errorPage : defineErrorPageState(appState.errorPage, action),
        routing : routerReducer(appState.routing, action)
    }
}

module.exports = defineAppState;
