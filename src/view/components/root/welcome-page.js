var React = require('react');

/* custom modules */

var routes =
    require("./../../../global-util/router-navigation.js").routes;
var navigateTo =
    require("./../../../global-util/router-navigation.js").navigateTo;

/* module code */

var WelcomePage = React.createClass({

    goToMainIfAuthenticated : function () {
        if ( this.props.transitionToMainIsAllowed() ) {
            navigateTo(routes.mainRoute);
        }
    },

    render: function () {
        return (
            <div className="welcome-page">
                <button
                    type="button"
                    className="go-to-login-button-on-landing-page"
                    onClick={() => navigateTo(routes.loginRoute)}
                >
                    Login
                </button>
                <button
                    type="button"
                    className="go-to-registration-button-on-landing-page"
                    onClick={() => navigateTo(routes.registrationRoute)}
                >
                    Registration
                </button>
                <button
                    type="button"
                    className="go-to-main-button-on-landing-page"
                    onClick={this.goToMainIfAuthenticated}
                >
                    Main
                </button>
                <br/>
            </div>
        );
    }
});

module.exports = WelcomePage;