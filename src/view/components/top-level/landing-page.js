var React = require('react');

var LandingPage = React.createClass({

    render: function () {
        return (
            <div>
                <button type="button"
                        className="login-button-on-landing-page"
                        onClick={this.props.goToLogin}>
                    Login
                </button>
                Landing page.
            </div>
        );
    }
});

module.exports = LandingPage;