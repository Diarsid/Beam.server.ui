var React = require('react');

/* custom modules */

var LoginFormContainer =
    require("./login-page-cmpnts/login-form-container.js");
var routes =
    require("./../../../global-util/router-navigation.js").routes;
var navigateTo =
    require("./../../../global-util/router-navigation.js").navigateTo;

/* module code */

var LoginPage = React.createClass({

    render: function () {
        return (
            <div className="login-page">Login page
                <button
                    type="button"
                    className="go-to-registration-button-on-login"
                    onClick={() => navigateTo(routes.registrationRoute) } >
                    Registration
                </button>
                <button
                    type="button"
                    className="go-to-landing-button-on-login"
                    onClick={() => navigateTo(routes.welcomeRoute) } >
                    Back to welcome
                </button>
                <br/>
                <LoginFormContainer />
            </div>
        );
    }
});

module.exports = LoginPage;