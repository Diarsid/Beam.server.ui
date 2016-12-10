var browserHistory =
    require('react-router').browserHistory;

/* custom modules */

var appUrlState =
    require("./app-url-state.js");
var appStore =
    require("./../state/store/app-store.js");
var dispatch =
    require("./../state/store/app-store.js").dispatch;
var actions =
    require("./../state/actions/actions.js");
var history =
    require("./prepared-history.js");
var authStatus =
    require("./authentication-status.js");

/* module code */

function navigationLog(message) {
    console.log("[ROUTER NAVIGATOR] " + message);
}

/*
function makeMappingRouteTo(path) {
    console.log("[NAVIGATOR] mapping route : " + appUrlState.appName + path );
    return "/" + appUrlState.appName + path;
}
*/

function waitForAuthStatus(redirectTo, transition) {
    var interval = setInterval(() => {
        navigationLog(" [WAITING] is authentication defined?");
        if ( authStatus.authenticated() ) {
            clearInterval(interval);
            transition();
        } else if ( authStatus.notAuthenticated() ) {
            clearInterval(interval);
            redirectTo(navigationRoutes.loginRoute);
            transition();
        }
    }, 2000);
}

var routesHooks = {
    mainRoute : {
        onLeaveHook : function () {
            navigationLog("leaving main");
        },
        onEnterHook : function (nextState, redirectTo, transition) {
            navigationLog("attempt to enter main...");
            if ( authStatus.authenticationIsUnknown() ) {
                navigationLog("entering main, waiting for auth status...");
                waitForAuthStatus(redirectTo, transition);
            } else if ( authStatus.authenticated() ) {
                navigationLog("authentication OK, entering main");
                transition();
            } else {
                redirectTo(navigationRoutes.loginRoute);
                transition();
            }
        }
    },
    welcomeRoute : {
        onLeaveHook : function () {
            navigationLog("leaving welcome");
        },
        onEnterHook : function () {
            navigationLog("entering welcome");
        }
    },
    registrationRoute : {
        onLeaveHook : function () {
            navigationLog("leaving reg");
            dispatch(actions.regClearAction());
        },
        onEnterHook : function () {
            navigationLog("entering reg");
        }
    },
    errorRoute : {
        onLeaveHook : function () {
            navigationLog("leaving error");
        },
        onEnterHook : function () {
            navigationLog("entering error");
        }
    },
    loginRoute : {
        onLeaveHook : function () {
            navigationLog("leaving login");
            dispatch(actions.loginClearAction());
        },
        onEnterHook : function () {
            navigationLog("entering login");
        }
    }
};

/*
var navigationRoutes = {
    mainRoute : makeSimpleRouteTo("/main"),
    landingRoute : makeSimpleRouteTo("/"),
    welcomeRoute : makeSimpleRouteTo("/welcome"),
    registrationRoute : makeSimpleRouteTo("/registration"),
    errorRoute : makeSimpleRouteTo("/error"),
    loginRoute : makeSimpleRouteTo("/login")
};
*/

var navigationRoutes = {
    mainRoute : "/main",
    landingRoute : "/",
    welcomeRoute : "/welcome",
    registrationRoute : "/registration",
    errorRoute : "/error",
    loginRoute : "/login"
};

var routerNavigation = {
    routesHooks : routesHooks,
    routes : navigationRoutes,
//    mappingTo : makeMappingRouteTo,
    navigateTo : function (route) {
        navigationLog(" to : " + route);
        history.push(route);
    }
};

module.exports = routerNavigation;