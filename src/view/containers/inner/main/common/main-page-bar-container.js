var connect = require('react-redux').connect;

var MainPageBar =
    require("./../../../../components/inner/main/common/main-page-bar.js");
var storage =
    require("./../../../../../state/store/app-local-storage.js");
var actionDispatchers =
    require("./../../../../../state/actions/action-dispatchers.js");
var createDirAjaxCall =
    require("./../../../../../network/prepared-ajax-calls/directories-create-new-call.js");

// ----------------------

function performLogout() {
    actionDispatchers.app.dispatchLogoutAction();
    storage.deleteJwt();
}

function createDirectory(userId, currentView, newDirName) {
    var callbacks = {
        onStart : actionDispatchers.main.directory.dispatchCreationStartAction,
        onSuccess : actionDispatchers.main.directory.directoryCreationSuccess,
        onFail : actionDispatchers.main.directory.dispatchCreationFailAction,
        onUnauthenticated : actionDispatchers.app.dispatchGoToLoginAction,
        onServerError : actionDispatchers.app.dispatchGoToErrorAction
    };
    createDirAjaxCall(userId, currentView, newDirName, callbacks);
}

function getOtherView(currentView) {
    if ( currentView === "bookmarks" ) {
        return "WebPanel";
    } else {
        return "Bookmarks";
    }
}

function mapStateToProps(state) {
    return {
        toggleContentView : actionDispatchers.main.dispatchToggleMainPageContentViewAction,
        otherView : getOtherView(state.mainPage.currentView),
        createDirectory : function (newDirName) {
            createDirectory(state.user.id, state.mainPage.currentView, newDirName);
        },
        logout : performLogout
    };
}

var MainPageBarContainer = connect(mapStateToProps)(MainPageBar);

module.exports = MainPageBarContainer;