var React = require("react");

var RegistrationFailureMessage = React.createClass({

    render: function () {
        if ( this.props.showMessage ) {
            return (
                <div className="registration-failure-message">
                    {this.props.failureText}
                </div>
            );
        } else {
            return null;
        }
    }
});

module.exports = RegistrationFailureMessage;