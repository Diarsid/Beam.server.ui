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
var createDirAjaxCall =
    require("./../../../../../network/prepared-ajax-calls/directories-create-new-call.js");

/* module code */

var operationDescription = "Directory creation.";

function createDirectory (userId, place, newDirName) {
    /* perform direct optimistic directory creation before ajax call */
    dispatch(actions.directoryCreatedAction(place, newDirName));
    /* perform ajax operation */
    createDirAjaxCall(userId, place, newDirName, {
        onStart : () => {},
        /* if operation was successfull - just reload */
        onSuccess : (userId, placement, dirName) => loadAllDirectories(userId, placement),
        onFail : (message) => {
            dispatch(actions.webObjectOperationFailedAction(operationDescription, message));
            /*  operation failed, so load previous state
             from server to redo previously made optimistic changes*/
            loadAllDirectories(userId, place);
        },
        onUnauthenticated : () => navigateTo(routes.loginRoute),
        onServerError : (message) => {
            dispatch(actions.globalErrorAction(message));
            navigateTo(routes.errorRoute);
        }
    });
}

module.exports = createDirectory;