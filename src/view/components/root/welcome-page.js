var React = require('react');

/* custom modules */

var routes =
    require("./../../../global-util/router-navigation.js").routes;
var navigateTo =
    require("./../../../global-util/router-navigation.js").navigateTo;

/* module code */

var WelcomePage = React.createClass({

    render: function () {
        return (
            <div className="welcome-page">
                <button type="button"
                        className="go-to-login-button-on-landing-page"
                        onClick={() => navigateTo(routes.loginRoute)}>
                    Login
                </button>
                <button type="button"
                        className="go-to-registration-button-on-landing-page"
                        onClick={() => navigateTo(routes.registrationRoute)}>
                    Registration
                </button>
                <br/>
            </div>
        );
    }
});

module.exports = WelcomePage;