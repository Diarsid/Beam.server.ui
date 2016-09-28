var ajaxJwtRefresh =
    require("./network/prepared-ajax-calls/refresh-jwt-call.js");
var storage =
    require("./state/store/app-local-storage.js");

// --------------------------

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
var refreshInterval = 1000 * 60 * 17;

var jwtRefreshCallbacks = {
    onSuccess : function (jwt) {
        storage.saveJwt(jwt);
        jwtRefreshLog("...refreshed.");
    },
    onUnauthenticated : function () {
        jwtRefreshLog("...refreshing failed: jwt is rejected.");
    },
    onFail : function (errorMessage) {
        jwtRefreshLog("...fail: " + errorMessage);
    }
};

function refresh() {
    jwtRefreshLog(getCurrentTime() + " refreshing...");
    ajaxJwtRefresh(jwtRefreshCallbacks);
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