/* custom modules */

/* module code */

var authStatus = "unknown";

function authStatusLog(message) {
    console.log("[AUTH STATUS] " + message);
}

function listenToUserStatus(appState) {
    authStatus = appState.user.status;
}

function authenticationIsUnknown() {
    authStatusLog("checking: " + authStatus);
    return ( authStatus == "unknown" );
}

function authenticated() {
    authStatusLog("checking: " + authStatus);
    return ( authStatus == "logged in");
}

function notAuthenticated() {
    authStatusLog("checking: " + authStatus);
    return ( authStatus == "logged out");
}

module.exports = {
    authenticationIsUnknown : authenticationIsUnknown,
    authenticated : authenticated,
    notAuthenticated : notAuthenticated,
    listenToUserStatus : listenToUserStatus
};