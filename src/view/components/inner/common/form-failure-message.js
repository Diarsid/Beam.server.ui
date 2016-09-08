var React = require('react');

var FormFailureMessage = React.createClass({
    render : function () {
        if ( this.props.message != "" ) {
            return (
                <div className="form-failure-message">
                    {this.props.message}
                </div>
            );
        } else {
            return null;
        }
    }
});

module.exports = FormFailureMessage;