var browserHistory =
    require('react-router').browserHistory;

/* custom modules */

var appName =
    require("./root-detector.js").appName;
var dispatch =
    require("./../state/store/app-store.js").dispatch;
var actions =
    require("./../state/actions/actions.js");

/* module code */

function navigationLog(message) {
    console.log("[ROUTER NAVIGATOR] " + message);
}

function makeSimpleRouteTo(path) {
    console.log("[NAVIGATOR] make route : " + appName + path );
    return "/" + appName + path;
}

var routesHooks = {
    mainRoute : {
        onLeaveHook : function () {
            navigationLog("leaving main");
        },
        onEnterHook : function () {
            navigationLog("entering main");
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

var navigationRoutes = {
    mainRoute : makeSimpleRouteTo("/main"),
    landingRoute : makeSimpleRouteTo("/"),
    welcomeRoute : makeSimpleRouteTo("/welcome"),
    registrationRoute : makeSimpleRouteTo("/registration"),
    errorRoute : makeSimpleRouteTo("/error"),
    loginRoute : makeSimpleRouteTo("/login")
};

var routerNavigation = {
    routesHooks : routesHooks,
    routes : navigationRoutes,
    navigateTo : function (route) {
        navigationLog(" to : " + route);
        browserHistory.push(route);
    }
};

module.exports = routerNavigation;