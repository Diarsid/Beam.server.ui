var connect = require('react-redux').connect;

var MainPageBar =
    require("./../../../../components/inner/main/common/main-page-bar.js");
var actionDispatchers =
    require("./../../../../../state/actions/action-dispatchers.js");
var createDirAjaxCall =
    require("./../../../../../network/prepared-ajax-calls/directories-create-new-call.js");

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

function mapStateToProps(state) {
    return {
        createDirectory : function (newDirName) {
            createDirectory(state.user.id, state.mainPage.currentView, newDirName);
        }
    };
}

var MainPageBarContainer = connect(mapStateToProps)(MainPageBar);

module.exports = MainPageBarContainer;