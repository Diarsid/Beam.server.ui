var connect = require('react-redux').connect;

var MainPage =
    require("./../../components/top-level/main-page.js");
var storage =
    require("./../../../state/store/app-local-storage.js");
var actionDispatchers =
    require("./../../../state/actions/action-dispatchers.js");

var getDirectoriesAjaxCall =
    require("./../../../network/prepared-ajax-calls/directories-get-all-call.js");

// ----------------------

function performLogout() {
    actionDispatchers.app.dispatchLogoutAction();
    storage.deleteJwt();
}

function loadWebPanel(userId) {
    var callbacks = {
        onStart : actionDispatchers.main.webPanel.dispatchLoadingBeginsAction,
        onSuccess : actionDispatchers.main.webPanel.dispatchLoadedAction,
        onFail : actionDispatchers.main.webPanel.dispatchLoadingFailedAction,
        onUnauthenticated : actionDispatchers.app.dispatchGoToLoginAction,
        onServerError : actionDispatchers.app.dispatchGoToErrorAction
    };
    getDirectoriesAjaxCall(userId, "webpanel", callbacks);
}

function loadBookmarks(userId) {
    var callbacks = {
        onStart : actionDispatchers.main.bookmarks.dispatchLoadingBeginsAction,
        onSuccess : actionDispatchers.main.bookmarks.dispatchLoadedAction,
        onFail : actionDispatchers.main.bookmarks.dispatchLoadingFailedAction,
        onUnauthenticated : actionDispatchers.app.dispatchGoToLoginAction,
        onServerError : actionDispatchers.app.dispatchGoToErrorAction
    };
    getDirectoriesAjaxCall(userId, "bookmarks", callbacks);
}

function mapStateToProps(state) {
    return {

        loadInitialData : function () {
            loadWebPanel(state.user.id);
            loadBookmarks(state.user.id);
        },
        logout : performLogout
    };
}

var MainPageContainer = connect(mapStateToProps)(MainPage);

module.exports = MainPageContainer;