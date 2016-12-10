/* custom modules */

var jwtRefreshing =
    require("./../../global-util/jwt-refreshing.js");

/* module code */

function userInfoLog(message) {
    console.log("[STATE LISTENER] [USER INFO] " + message);
}

var previousUserStatus = "unknown";

function listenToUserInfoChanges(state) {
    var currentUserStatus = state.user.status;

    if ( currentUserStatus == "logged in" && previousUserStatus != "logged in" ) {
        userInfoLog("user logged in.");
        jwtRefreshing.scheduleRefreshing();
    } else if ( currentUserStatus != "logged in" && previousUserStatus == "logged in" ) {
        userInfoLog("user logged out.");
        jwtRefreshing.stopRefreshing();
    }

    previousUserStatus = currentUserStatus;
}

module.exports = listenToUserInfoChanges;