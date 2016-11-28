/* custom modules */

var jwtRefreshing =
    require("./../../../global-util/jwt-refreshing.js");

/* module code */

function userInfoLog(message) {
    console.log("[STATE LISTENER] [USER INFO] " + message);
}

var previousUserInfo = "";

function listenToUserInfoChanges(state) {
    var currentInfo = state.user.id + state.user.nickName + state.user.role;

    if ( currentInfo != "" && previousUserInfo == "" ) {
        userInfoLog("user logged in.");
        jwtRefreshing.scheduleRefreshing();
    } else if ( currentInfo == "" && previousUserInfo != "" ) {
        userInfoLog("user logged out.");
        jwtRefreshing.stopRefreshing();
    }

    previousUserInfo = currentInfo;
}

module.exports = listenToUserInfoChanges;