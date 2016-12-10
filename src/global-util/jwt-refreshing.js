/* custom modules */

var actions =
    require("./../state/actions/actions.js");
var dispatch =
    require("./../state/store/app-store.js").dispatch;
var routes =
    require("./router-navigation.js").routes;
var navigateTo =
    require("./router-navigation.js").navigateTo;
var ajaxJwtRefresh =
    require("./../network/prepared-ajax-calls/refresh-jwt-call.js");
var storage =
    require("./../state/store/app-local-storage.js");

/* module code */

function jwtRefreshLog(message) {
    console.log("[APP] [JWT REFRESH] " + message);
}

function getCurrentTime() {
    var now = new Date();
    var dd = now.getDate() < 10 ? "0" + now.getDate() : now.getDate();
    //January is 0!
    var MM = (now.getMonth() + 1) < 10 ? "0" + (now.getMonth() + 1) : (now.getMonth() + 1);
    var yyyy = now.getFullYear();
    var HH = now.getHours();
    var mm = now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
    var ss = now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds();

    return (MM + '.' + dd + '.' + yyyy + " " + HH + ":" + mm + ":" + ss);
}

var jwtRefreshSchedule;
var refreshInterval = 1000 * 60 * 2;

var jwtRefreshCallbacks = {
    onSuccess : function (jwt) {
        dispatch(
            actions.loggedInAction(
                storage.saveAndParseJwt(jwt)));
        jwtRefreshLog("...refreshed.");
    },
    onUnauthenticated : function () {
        jwtRefreshLog("...refreshing failed: jwt is rejected.");
        storage.deleteJwt();
        cancelScheduledConstantJwtRefreshing();
        dispatch(actions.logoutAction());
        navigateTo(routes.loginRoute);
    },
    onFail : function (errorMessage) {
        jwtRefreshLog("...fail: " + errorMessage);
        dispatch(actions.globalErrorAction(message));
        navigateTo(routes.errorRoute);
    }
};

function refresh() {
    if ( storage.hasJwt() ) {
        jwtRefreshLog(getCurrentTime() + " refreshing...");
        ajaxJwtRefresh(jwtRefreshCallbacks);
    } else {
        cancelScheduledConstantJwtRefreshing();
    }
}

function scheduleConstantJwtRefreshing() {
    jwtRefreshLog("refreshing scheduled!");
    window.clearInterval(jwtRefreshSchedule);
    jwtRefreshSchedule = window.setInterval(refresh, refreshInterval);
}

function cancelScheduledConstantJwtRefreshing() {
    jwtRefreshLog("refreshing stopped.");
    window.clearInterval(jwtRefreshSchedule);
}

var jwtRefreshing = {
    scheduleRefreshing : scheduleConstantJwtRefreshing,
    stopRefreshing : cancelScheduledConstantJwtRefreshing
};

module.exports = jwtRefreshing;