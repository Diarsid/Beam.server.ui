var React =
    require('react');

/* custom modules */

var RegistrationFormContainer =
    require("./registration-page-cmpnts/registration-form-container.js");
var routes =
    require("./../../../global-util/router-navigation.js").routes;
var navigateTo =
    require("./../../../global-util/router-navigation.js").navigateTo;

/* module code */

var RegistrationPage = React.createClass({

    render: function () {
        return (
            <div className="registration-page">
                <button
                    type="button"
                    className="go-to-landing-button-on-login"
                    onClick={() => navigateTo(routes.welcomeRoute) } >
                    Back
                </button>
                <div>Registration page</div>
                <RegistrationFormContainer />
            </div>
        );
    }
});

module.exports = RegistrationPage;