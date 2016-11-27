/* custom modules */

var routes =
    require("./../../../../../global-util/router-navigation.js").routes;
var navigateTo =
    require("./../../../../../global-util/router-navigation.js").navigateTo;
var actions =
    require("./../../../../../state/actions/actions.js");
var dispatch =
    require("./../../../../../state/store/app-store.js").dispatch;
var loadAllDirectories =
    require("./load-all-directories.js");
var deletePageAjaxCall =
    require("./../../../../../network/prepared-ajax-calls/page-delete-call.js");

/* module code */

var operationDescription = "Page deleting.";

function pageDelete(userId, place, dirOrder, dirName, pageOrder, pageName) {
    dispatch(actions.pageDeletedAction(place, dirOrder, pageOrder));
    deletePageAjaxCall(userId, place, dirName, pageName, {
        onStart : () => {},
        onSuccess : () => loadAllDirectories(userId, place),
        onFail : (message) => {
            dispatch(actions.webObjectOperationFailedAction(operationDescription, message));
            loadAllDirectories(userId, place);
        },
        onUnauthenticated : () => navigateTo(routes.loginRoute),
        onServerError : () => navigateTo(routes.errorRoute)
    });
}

module.exports = pageDelete;