var React =
    require("react");
var ReactDOM =
    require('react-dom');
var Provider =
    require('react-redux').Provider;
var syncHistoryWithStore =
    require('react-router-redux').syncHistoryWithStore;
var Router =
    require('react-router').Router;
var browserHistory =
    require('react-router').browserHistory;
var Route =
    require('react-router').Route;

/* custom modules */

var LandingPage =
    require("./view/components/root/landing-page.js");
var MainPage =
    require("./view/components/root/main-page.js");
var WelcomePage =
    require("./view/components/root/welcome-page.js");
var LoginPage =
    require("./view/components/root/login-page.js");
var ErrorPageContainer =
    require("./view/components/root/error-page-container.js");
var RegistrationPage =
    require("./view/components/root/registration-page.js");
var actions =
    require("./state/actions/actions.js");
var appStore =
    require("./state/store/app-store.js");
var dispatch = appStore.dispatch;
var ajaxJwtValidation =
    require("./network/prepared-ajax-calls/validate-jwt-call.js");
var storage =
    require("./state/store/app-local-storage.js");
var hooks =
    require("./global-util/router-navigation.js").routesHooks;
var routes =
    require("./global-util/router-navigation.js").routes;
var navigateTo =
    require("./global-util/router-navigation.js").navigateTo;

/* module code */

var history = syncHistoryWithStore(browserHistory, appStore);

function mainLog(message) {
    console.log('[APP] [MAIN] ' + message);
}

var jwtValidationCallbacks = {
    onStart : function () {
    },
    onJwtValid : function () {
        dispatch(actions.acceptUserInfoAction(storage.parseUserFromJwt()));
        navigateTo(routes.mainRoute);
    },
    onJwtInvalid : function () {
        storage.deleteJwt();
        navigateTo(routes.welcomeRoute);
    },
    onJwtExpired : function () {
        storage.deleteJwt();
        navigateTo(routes.loginRoute);
    }
};

function initialAppUserInfoProcessing() {
    if ( storage.hasJwt() ) {
        ajaxJwtValidation(storage.getJwt(), jwtValidationCallbacks);
    } else {
        navigateTo(routes.welcomeRoute);
    }
}

function renderView() {
    ReactDOM.render(
        <Provider store={appStore} >
            <Router history={history}>
                <Route
                    path={routes.landingRoute}
                    component={LandingPage} />
                <Route
                    path={routes.welcomeRoute}
                    onEnter={hooks.welcomeRoute.onEnterHook}
                    onLeave={hooks.welcomeRoute.onLeaveHook}
                    component={WelcomePage} />
                <Route
                    path={routes.mainRoute}
                    onEnter={hooks.mainRoute.onEnterHook}
                    onLeave={hooks.mainRoute.onLeaveHook}
                    component={MainPage} />
                <Route
                    path={routes.loginRoute}
                    onEnter={hooks.loginRoute.onEnterHook}
                    onLeave={hooks.loginRoute.onLeaveHook}
                    component={LoginPage} />
                <Route
                    path={routes.registrationRoute}
                    onEnter={hooks.registrationRoute.onEnterHook}
                    onLeave={hooks.registrationRoute.onLeaveHook}
                    component={RegistrationPage} />
                <Route
                    path={routes.errorRoute}
                    onEnter={routes.errorRoute.onEnterHook}
                    onLeave={routes.errorRoute.onLeaveHook}
                    component={ErrorPageContainer} />
            </Router>
        </Provider>,
        document.getElementById('content')
    );
}

function startApp() {
    mainLog("start app...");
    dispatch(actions.appStartsAction());
    renderView();
    initialAppUserInfoProcessing();
}

startApp();