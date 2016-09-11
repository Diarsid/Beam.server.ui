var React = require('react');

var FormFieldInvalidUnderlineMessage = React.createClass({
    render : function () {
        if ( this.props.message != "" ) {
            return (
                <div className="form-field-invalid-underline-message">
                    <b>{this.props.message}</b>
                </div>
            );
        } else {
            return null;
        }
    }
});

module.exports = FormFieldInvalidUnderlineMessage;