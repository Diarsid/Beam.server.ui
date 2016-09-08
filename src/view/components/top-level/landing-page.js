var React = require('react');

var LandingPage = React.createClass({

    render: function () {
        return (
            <div className="landing-page">
                <button type="button"
                        className="go-tologin-button-on-landing-page"
                        onClick={this.props.goToLogin}>
                    Login
                </button>
                <button type="button"
                        className="go-to-registration-button-on-landing-page"
                        onClick={this.props.goToRegistration}>
                    Registration
                </button>
                <br/>
                Landing page.
            </div>
        );
    }
});

module.exports = LandingPage;