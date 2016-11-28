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

var operationDescription = "Page renaming";

function renamePage(userId, place, dirName, dirOrder, pageOrder, oldName, newName) {
    dispatch(actions.pageRenamedAction(place, dirOrder, pageOrder, newName));
    editPagePropAjaxCall(userId, place, dirName, oldName, "name", newName, {
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

module.exports = renamePage;