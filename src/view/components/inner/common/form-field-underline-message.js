var React = require('react');

var FormFieldInvalidUnderlineMessage = React.createClass({

    getFieldClasses : function () {
        if ( this.props.message != "" ) {
            return "form-field-underline-message invalid";
        } else {
            return "form-field-underline-message";
        }
    },

    render : function () {
        return (
            <div className={this.getFieldClasses()} >
                {this.props.message}
            </div>
        );
    }
});

module.exports = FormFieldInvalidUnderlineMessage;