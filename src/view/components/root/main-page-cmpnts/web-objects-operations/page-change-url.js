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

var operationDescription = "Page URL changing.";

function changePageUrl(userId, place, dirName, dirOrder, pageOrder, pageName, newUrl) {
    dispatch(actions.pageUrlChangedAction(place, dirOrder, pageOrder, newUrl));
    editPagePropAjaxCall(userId, place, dirName, pageName, "url", newUrl, {
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

module.exports = changePageUrl;