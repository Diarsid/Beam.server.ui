var connect = require("react-redux").connect;

/* custom modules */

var WelcomePage =
    require("./welcome-page.js");

/* module code */

function mapStateToProps(state) {
    return {
        transitionToMainIsAllowed : function () {
            return ( state.user.status != "logged out" );
        }
    }
}

var WelcomePageContainer = connect(mapStateToProps)(WelcomePage);

module.exports = WelcomePageContainer;