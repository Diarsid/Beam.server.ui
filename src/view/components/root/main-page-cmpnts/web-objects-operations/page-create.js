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
var createNewPageAjaxCall =
    require("./../../../../../network/prepared-ajax-calls/pages-create-new-call.js");

/* module code */

var operationDescription = "Creating new page.";

function createPage(userId, place, dirOrder, dirName, pageName, pageUrl) {
    dispatch(actions.pageCreatedAction(place, dirOrder,pageName, pageUrl));
    createNewPageAjaxCall(
        userId, place, dirName, {"name" : pageName, "url" : pageUrl}, {
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

module.exports = createPage;