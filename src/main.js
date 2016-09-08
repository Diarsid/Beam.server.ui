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

var jwtValidationHttpResponseCallbacks = {
    onStart : function () {
        actionDispatchers.initialAuthCheck.dispatchStoredUserInfoValidationBeginsAction();
    },
    onJwtValid : function () {
        actionDispatchers.initialAuthCheck.dispatchStoredUserInfoValidAction(storage.parseUserFromJwt());
    },
    onJwtInvalid : function () {
        storage.deleteJwt();
        actionDispatchers.app.dispatchGoToRegisterAction();
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
    console.log('[APP] [MAIN] start app...');
    initialAppUserInfoProcessing();
    renderView();
}

startApp();