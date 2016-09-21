var React = require('react');

var styles =
    require("./../../../../inline-styles/inline-styles.js");
var FormFieldInvalidUnderlineMessage =
    require("./../../common/form-field-invalid-underline-message.js");

// ----------------------

var valueValidationDelay;

var initialFieldState = {
    value : "",
    valueValid : true,
    valueInvalidMessage : ""
};

var SelfValidatableFormField = React.createClass({

    setValidationState : function (isValid, validMessage) {
        this.setState({
            valueValid : isValid,
            valueInvalidMessage : validMessage
        });
    },

    valueValidationCallbacks : function (self) {
        return {
            onStart : function () {
                self.setValidationState(false, "");
                self.props.valueUnavailableCallback();
            },
            onValid : function () {
                self.setValidationState(true, "");
                self.props.valueAvailableCallback(self.state.value);
            },
            onInvalid : function (message) {
                self.setValidationState(false, message);
                self.props.valueUnavailableCallback();
            }
        };
    },

    getInitialState : function () {
        return Object.assign({}, initialFieldState);
    },

    inputChanged: function ( e ) {
        this.setState({
            value : e.target.value
        });
        window.clearTimeout(valueValidationDelay);
        valueValidationDelay = window.setTimeout(
            this.props.validation,
            700,
            e.target.value, this.valueValidationCallbacks(this));
    },

    render : function() {
        return (
            <div className="self-validatable-form-field">
                <input type="text"
                       className="form-input"
                       placeholder={this.props.placeholder}
                       style={styles.getInputStyle(this.state.valueValid)}
                       value={this.state.value}
                       onChange={this.inputChanged}/>
                <FormFieldInvalidUnderlineMessage
                    message={this.state.valueInvalidMessage} />
                <br/>
            </div>
        );
    }
});

module.exports = SelfValidatableFormField;