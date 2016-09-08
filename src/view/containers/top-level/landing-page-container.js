var connect = require('react-redux').connect;

var actionDispatchers =
    require("./../../../state/actions/action-dispatchers.js");
var LandingPage =
    require("./../../components/top-level/landing-page.js");

function mapStateToProps(state) {
    return {
        goToLogin : actionDispatchers.app.dispatchGoToLoginAction,
        goToRegistration : actionDispatchers.app.dispatchGoToRegisterAction
    };
}

var LandingPageContainer = connect(mapStateToProps)(LandingPage);

module.exports = LandingPageContainer;