var React = require('react');

var LoginFailureMessage = React.createClass({
    render: function () {
        return (
            <div className="login-failure-message">Invalid nickname or password.</div>
        );
    }
});

module.exports = LoginFailureMessage;