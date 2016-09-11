var React = require('react');

var FormFieldInvalidInlineMessage = React.createClass({
    render : function () {
        if ( this.props.message != "" ) {
            return (<span className="form-field-invalid-inline-message"><b>{this.props.message}</b></span>);
        } else {
            return null;
        }
    }
});

module.exports = FormFieldInvalidInlineMessage;