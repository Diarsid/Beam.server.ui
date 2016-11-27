/* custom modules */

var routes =
    require("./../../../../../global-util/router-navigation.js").routes;
var navigateTo =
    require("./../../../../../global-util/router-navigation.js").navigateTo;
var actions =
    require("./../../../../../state/actions/actions.js");
var dispatch =
    require("./../../../../../state/store/app-store.js").dispatch;
var getDirectoriesAjaxCall =
    require("./../../../../../network/prepared-ajax-calls/directories-get-all-call.js");

/* module code */

var webPanelCallbacks = {
    onStart : function () {},
    onSuccess : (data) => dispatch(actions.webPanelLoadedAction(data)),
    onFail : (message) => dispatch(actions.webPanelLoadingFailedAction(message)),
    onUnauthenticated : () => navigateTo(routes.loginRoute),
    onServerError : () => navigateTo(routes.errorRoute)
};

var bookmarksCallbacks = {
    onStart : function () {},
    onSuccess : (data) => dispatch(actions.bookmarksLoadedAction(data)),
    onFail : (message) => dispatch(actions.bookmarksLoadingFailedAction(message)),
    onUnauthenticated : () => navigateTo(routes.loginRoute),
    onServerError : () => navigateTo(routes.errorRoute)
};

function getAllDirectories (userId, place) {
    console.log("[LOAD DIRECTORIES] userId:" + userId, " place:" + place);
    if ( place == "bookmarks" ) {
        getDirectoriesAjaxCall(userId, place, bookmarksCallbacks);
    } else {
        getDirectoriesAjaxCall(userId, place, webPanelCallbacks);
    }
}

module.exports = getAllDirectories;