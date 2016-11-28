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
var editPagePropAjaxCall =
    require("./../../../../../network/prepared-ajax-calls/page-edit-property-call.js");

/* module code */

var operationDescription = "Page reordering.";

function reorderPages(userId, place, dirName, dirOrder, pageName, oldOrder, newOrder) {
    dispatch(actions.pagesReorderedAction(place, dirOrder, oldOrder, newOrder));
    editPagePropAjaxCall(userId, place, dirName, pageName, "order", newOrder, {
        onStart : () => {},
        onSuccess : () => loadAllDirectories(userId, place),
        onFail : (message) => {
            dispatch(actions.webObjectOperationFailedAction(operationDescription, message));
            loadAllDirectories(userId, place);
        },
        onUnauthenticated : () => navigateTo(routes.loginRoute),
        onServerError : (message) => {
            dispatch(actions.globalErrorAction(message));
            navigateTo(routes.errorRoute);
        }
    });
}

module.exports = reorderPages;