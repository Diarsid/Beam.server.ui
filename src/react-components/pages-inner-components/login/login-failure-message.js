var React = require('react');

var LoginFailureMessage = React.createClass({
    render: function () {
        if ( this.props.showMessage ) {
            return (
                <div className="login-failure-message">
                    Invalid nickname or password.
                </div>
            );
        } else {
            return null;
        }
    }
});

module.exports = LoginFailureMessage;