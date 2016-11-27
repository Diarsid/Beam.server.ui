var connect =
    require("react-redux").connect;

/* custom modules */

var actions =
    require("./../../../../state/actions/actions.js");
var LoginForm =
    require("./login-form.js");
var dispatch =
    require("./../../../../state/store/app-store.js").dispatch;
var storage =
    require("./../../../../state/store/app-local-storage.js");
var loginAjaxCall =
    require("./../../../../network/prepared-ajax-calls/login-call.js");
var routes =
    require("./../../../../global-util/router-navigation.js").routes;
var navigateTo =
    require("./../../../../global-util/router-navigation.js").navigateTo;

/* module code */

function loginLog(message) {
    console.log("[LOGIN CONTAINER] " + message)
}

var loginAjaxCallbacks = {
    onCallStart : function () {
        loginLog("starts...");
    },
    onCallSuccess : function (jwtString) {
        loginLog("success!");
        dispatch(actions.acceptUserInfoAction(
            storage.saveAndParseJwt(jwtString)));
        navigateTo(routes.mainRoute);
    },
    onUnauthenticated : function() {
        loginLog("unauthorized!");
        dispatch(actions.loginFailedAction());
    },
    onBadRequest : function() {
        loginLog("bad request!");
        dispatch(actions.loginClearAction());
        navigateTo(routes.errorRoute);
    }
};

function isLoginInfoValid (loginPageState) {
    return (
        ( loginPageState.nickNameState.value != "" ) &&
        ( loginPageState.passwordState.value != "" ) &&
        ( loginPageState.nickNameState.status == "valid" ) &&
        ( loginPageState.passwordState.status == "valid" )
    );
}

function mapStateToProps(state) {
    return {
        nickNameState : state.loginPage.nickNameState,
        passwordState : state.loginPage.passwordState,
        message : state.loginPage.message,
        tryToLogin : function() {
            if ( isLoginInfoValid(state.loginPage) ) {
                loginAjaxCall({
                    "nickName" : state.loginPage.nickNameState.value,
                    "password" : state.loginPage.passwordState.value
                }, loginAjaxCallbacks);
            }
        },
        isLoginAllowed : isLoginInfoValid(state.loginPage)
    }
}

var LoginFormContainer = connect(mapStateToProps)(LoginForm);

module.exports = LoginFormContainer;