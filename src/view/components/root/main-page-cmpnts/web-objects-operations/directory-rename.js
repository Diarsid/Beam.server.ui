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
var editDirectoryPropAjaxCall =
    require("./../../../../../network/prepared-ajax-calls/directory-edit-property-call.js");

/* module code */

var operationDescription = "Directory renaming";

function renameDirectory (userId, place, dirOrder, oldDirName, newDirName) {
    dispatch(actions.directoryRenamedAction(place, dirOrder, newDirName));
    editDirectoryPropAjaxCall(userId, place, oldDirName, "name", newDirName, {
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

module.exports = renameDirectory;