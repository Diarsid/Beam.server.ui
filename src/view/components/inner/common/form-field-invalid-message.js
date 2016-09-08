var React = require('react');

var FormFieldInvalidMessage = React.createClass({
    render : function () {
        if ( this.props.message != "" ) {
            return (<span className="form-field-invalid-message"><b>{this.props.message}</b></span>);
        } else {
            return null;
        }
    }
});

module.exports = FormFieldInvalidMessage;