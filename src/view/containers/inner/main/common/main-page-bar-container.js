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

function barLog(message) {
    console.log("[APP] [MAIN BAR] " + message);
}

function performLogout() {
    actionDispatchers.app.dispatchLogoutAction();
    storage.deleteJwt();
}

var reloadMainPageContent;

function createDirectory(userId, currentView, newDirName) {
    var callbacks = {
        onStart : actionDispatchers.main.directory.dispatchCreationAjaxStartAction,
        onSuccess : function (placement, dirName) {
            actionDispatchers.main.directory.dispatchCreationAjaxSuccessAction(placement, dirName);
            reloadMainPageContent();
        },
        onFail : actionDispatchers.main.directory.dispatchCreationAjaxFailAction,
        onUnauthenticated : actionDispatchers.app.dispatchGoToLoginAction,
        onServerError : actionDispatchers.app.dispatchGoToErrorAction
    };
    actionDispatchers.main.dispatchDirectoryCreatedAction(currentView, newDirName);
    createDirAjaxCall(userId, currentView, newDirName, callbacks);
}

function getOtherView(currentView) {
    if ( currentView === "bookmarks" ) {
        return "WebPanel";
    } else {
        return "Bookmarks";
    }
}

function mapStateToProps(state, ownProps) {
    reloadMainPageContent = function () {
        barLog("reloading content...");
        ownProps.reloadContent();
    };
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