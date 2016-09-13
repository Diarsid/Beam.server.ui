var React = require('react');

var FormFieldInvalidUnderlineMessage = React.createClass({
    render : function () {
        return (
            <div className="form-field-invalid-underline-message">
                <b>{this.props.message}</b>
            </div>
        );
    }
});

module.exports = FormFieldInvalidUnderlineMessage;