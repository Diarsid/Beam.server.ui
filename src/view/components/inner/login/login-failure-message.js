var React = require('react');

var LoginFailureMessage = React.createClass({
    render : function () {
        if ( this.props.message != "" ) {
            return (
                <div className="login-failure-message">
                    Login failure:
                    <br/>
                    {this.props.message}
                </div>
            );
        } else {
            return null;
        }
    }
});

module.exports = LoginFailureMessage;