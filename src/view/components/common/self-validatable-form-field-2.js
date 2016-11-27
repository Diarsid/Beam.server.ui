var React = require('react');

/* sutom modules */

var styles =
    require("./../../inline-styles/inline-styles.js");
var FormFieldInvalidUnderlineMessage =
    require("./form-field-invalid-underline-message.js");

/* module code */

var valueValidationDelay;

var SelfValidatableFormField = React.createClass({

    getInitialState : function() {
        return {
            value : this.props.initial.value
        };
    },

    scheduleValidation : function(valueToValidate) {
        var self = this;
        window.clearTimeout(valueValidationDelay);
        valueValidationDelay = window.setTimeout(
            this.props.validation,
            700,
            valueToValidate, {
                onStart : function () {
                    self.props.dispatchValidateValue({
                        value : valueToValidate,
                        status : "processing",
                        message : ""
                    });
                },
                onValid : function () {
                    self.props.dispatchValidateValue({
                        value : valueToValidate,
                        status : "valid",
                        message : ""
                    });
                },
                onInvalid : function (message) {
                    self.props.dispatchValidateValue({
                        value : valueToValidate,
                        status : "invalid",
                        message : message
                    });
                }
            });
    },

    inputChanged: function ( e ) {
        this.setState({
            value : e.target.value
        });
        this.scheduleValidation(e.target.value);
    },

    getInputStyle : function () {
        return styles.getInputStyle(this.props.initial.status != "invalid");
    },

    render : function() {
        return (
            <div className="self-validatable-form-field">
                <input type="text"
                       className="form-input"
                       placeholder={this.props.placeholder}
                       style={this.getInputStyle()}
                       value={this.state.value}
                       onChange={this.inputChanged}/>
                <FormFieldInvalidUnderlineMessage
                    message={this.props.initial.message} />
            </div>
        );
    }
});

module.exports = SelfValidatableFormField;