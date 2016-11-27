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
var deleteDirectoryAjaxCall =
    require("./../../../../../network/prepared-ajax-calls/directory-delete-call.js");

/* module code */

var operationDescription = "Directory removing.";

function deleteDirectory (userId, place, dirOrder, name) {
    dispatch(actions.directoryDeletedAction(place, dirOrder, name));
    deleteDirectoryAjaxCall(userId, place, name, {
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

module.exports = deleteDirectory;