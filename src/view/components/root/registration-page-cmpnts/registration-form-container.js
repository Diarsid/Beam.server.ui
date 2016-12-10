var connect =
    require("react-redux").connect;

/* custom modules */

var RegistrationForm =
    require("./registration-form.js");
var actions =
    require("./../../../../state/actions/actions.js");
var dispatch =
    require("./../../../../state/store/app-store.js").dispatch;
var storage =
    require("./../../../../state/store/app-local-storage.js");
var registrAjaxCall =
    require("./../../../../network/prepared-ajax-calls/registration-call.js");
var routes =
    require("./../../../../global-util/router-navigation.js").routes;
var navigateTo =
    require("./../../../../global-util/router-navigation.js").navigateTo;

/* module code */

function regLog(message) {
    console.log("[REGISTR CONTAINER] " + message);
}

var regAjaxCallbacks = {
    onStart : function() {
    },
    onSuccess : function (jwtString) {
        regLog("success!");
        dispatch(actions.loggedInAction(
            storage.saveAndParseJwt(jwtString)));
        navigateTo(routes.mainRoute);
    },
    onUnauthenticated : function() {
        regLog("not registered.");
        dispatch(actions.regFailedAction());
    },
    onBadRequest : function() {
        regLog("error.");
        dispatch(actions.regClearAction());
        navigateTo(routes.errorRoute);
    }
};

function createRegData(regPageState) {
    return  {
        "nickName" : regPageState.nickNameState.value,
        "name" : regPageState.nameState.value,
        "surname" : regPageState.surnameState.value,
        "email" : regPageState.emailState.value,
        "password" : regPageState.passwordState.value
    };
}

function isRegInfoValid(regPageState) {
    console.log(regPageState);
    var allowed = (

        ( regPageState.nickNameState.value != "" ) &&
        ( regPageState.nameState.value != "" ) &&
        ( regPageState.surnameState.value != "" ) &&
        ( regPageState.emailState.value != "" ) &&
        ( regPageState.passwordState.value != "" ) &&
        ( regPageState.confirmPasswordState.value != "" ) &&

        ( regPageState.nickNameState.status == "valid" ) &&
        ( regPageState.nameState.status == "valid" ) &&
        ( regPageState.surnameState.status == "valid" ) &&
        ( regPageState.emailState.status == "valid" ) &&
        ( regPageState.passwordState.status == "valid" ) &&
        ( regPageState.confirmPasswordState.status == "valid" ) &&

        ( regPageState.passwordState.value == regPageState.confirmPasswordState.value )
    );
    regLog("is allowed? : " + allowed);
    return allowed;
}

function arePasswordsEqual(regPageState) {
    return (
        ( regPageState.passwordState.value == regPageState.confirmPasswordState.value )
    );
}

function defineRegistrationPageMessage (regPageState) {
    if ( regPageState.message != "" ) {
        return regPageState.message;
    } else if ( ! arePasswordsEqual(regPageState) ) {
        return "Passwords do not match!";
    } else {
        return "";
    }
}

function mapStateToProps(state) {
    return {
        nickNameState : state.registrationPage.nickNameState,
        nameState : state.registrationPage.nameState,
        surnameState : state.registrationPage.surnameState,
        emailState : state.registrationPage.emailState,
        passwordState : state.registrationPage.passwordState,
        confirmPasswordState : state.registrationPage.confirmPasswordState,
        message : defineRegistrationPageMessage(state.registrationPage),
        tryToRegister : function () {
            if ( isRegInfoValid(state.registrationPage) ) {
                regLog("try to register...");
                registrAjaxCall(
                    createRegData(state.registrationPage), regAjaxCallbacks);
            }
        },
        isRegistrAllowed : isRegInfoValid(state.registrationPage)
    }
}

var RegistrationFormContainer = connect(mapStateToProps)(RegistrationForm);

module.exports = RegistrationFormContainer;