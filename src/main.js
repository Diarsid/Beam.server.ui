var React =     require("react");
var ReactDOM =  require('react-dom');
var Provider =  require('react-redux').Provider;

var appStore =
    require("./state/store/app-store.js");
var actionDispatchers =
    require("./state/actions/action-dispatchers.js");
var ajaxJwtValidation =
    require("./network/prepared-ajax-calls/validate-jwt-call.js");
var storage =
    require("./state/store/app-local-storage.js");
var RootPageContainer =
    require('./view/containers/top-level/root-page-container.js');

// --------------------------------------------

function mainLog(message) {
    console.log('[APP] [MAIN] ' + message);
}

var jwtValidationHttpResponseCallbacks = {
    onStart : function () {
        actionDispatchers.initialAuthCheck.dispatchStoredUserInfoValidationBeginsAction();
    },
    onJwtValid : function () {
        actionDispatchers.app.dispatchGoToMainAction();
        actionDispatchers.initialAuthCheck.dispatchStoredUserInfoValidAction(storage.parseUserFromJwt());
    },
    onJwtInvalid : function () {
        storage.deleteJwt();
        actionDispatchers.app.dispatchGoToLoginAction();
    },
    onJwtExpired : function () {
        storage.deleteJwt();
        actionDispatchers.app.dispatchGoToLoginAction();
    }
};

function initialAppUserInfoProcessing() {
    if ( storage.hasJwt() ) {
        ajaxJwtValidation(storage.getJwt(), jwtValidationHttpResponseCallbacks);
    } else {
        actionDispatchers.app.dispatchGoToLandingPageAction();
    }
}

function renderView() {
    ReactDOM.render(
        <Provider store={appStore} >
            <RootPageContainer />
        </Provider>,
        document.getElementById('content')
    );
}

function startApp() {
    mainLog("start app...");
    actionDispatchers.app.dispatchAppStartsAction();
    initialAppUserInfoProcessing();
    renderView();
}

startApp();