var connect = require('react-redux').connect;

var MainPage =
    require("./../../components/top-level/main-page.js");
var storage =
    require("./../../../state/store/app-local-storage.js");
var actionDispatchers =
    require("./../../../state/actions/action-dispatchers.js");

var getDirectoriesAjaxCall =
    require("./../../../network/prepared-ajax-calls/get-directories-call.js");

// ----------------------

function performLogout() {
    actionDispatchers.app.dispatchLogoutAction();
    storage.deleteJwt();
}

function loadWebPanel(userId) {
    var callbacks = {
        onStart : actionDispatchers.main.webPanel.dispatchLoadingBeginsAction,
        onSuccess : actionDispatchers.main.webPanel.dispatchLoadedAction,
        onBadRequest : actionDispatchers.main.webPanel.dispatchLoadingFailedAction
    };
    getDirectoriesAjaxCall(userId, "webpanel", callbacks);
}

function loadBookmarks(userId) {
    var callbacks = {
        onStart : actionDispatchers.main.bookmarks.dispatchLoadingBeginsAction,
        onSuccess : actionDispatchers.main.bookmarks.dispatchLoadedAction,
        onBadRequest : actionDispatchers.main.bookmarks.dispatchLoadingFailedAction
    };
    getDirectoriesAjaxCall(userId, "bookmarks", callbacks);
}

function mapStateToProps(state) {
    return {

        nickName : state.user.nickName,
        id : state.user.id,
        role : state.user.role,

        mainView : state.mainPage.mainView,

        webPanelLoading : state.mainPage.webPanelLoading,
        bookmarksLoading : state.mainPage.bookmarksLoading,

        webPanelLoadingFailedMessage : state.mainPage.webPanelLoadingFailedMessage,
        bookmarksLoadingFailedMessage : state.mainPage.bookmarksLoadingFailedMessage,

        webPanelDirs : state.mainPage.webPanelDirs,
        bookmarksDirs : state.mainPage.bookmarksDirs,

        loadInitialData : function () {
            loadWebPanel(state.user.id);
            loadBookmarks(state.user.id);
        },
        logout : performLogout
    };
}

var MainPageContainer = connect(mapStateToProps)(MainPage);

module.exports = MainPageContainer;