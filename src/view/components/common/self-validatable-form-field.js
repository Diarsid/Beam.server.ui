var React = require('react');

/* sutom modules */

var styles =
    require("./../../inline-styles/inline-styles.js");
var FormFieldInvalidUnderlineMessage =
    require("./form-field-invalid-underline-message.js");

/* module code */

var valueValidationDelay;

var initialFieldState = {
    value : "",
    valueValid : true,
    valueInvalidMessage : ""
};

var SelfValidatableFormField = React.createClass({

    getInitialState : function () {
        return Object.assign({}, initialFieldState);
    },

    /*  May be invoked by parent components in order
        to mark value field as invalid forcibly. */
    setInvalidExternally : function () {
        this.setState({ valueValid : false });
    },

    /*  May be invoked by parent components in order
     to mark value field as valid forcibly. */
    setValidExternally : function () {
        this.setState({ valueValid : true });
    },

    setValidState : function () {
        this.setState({
            valueValid : true,
            valueInvalidMessage : ""
        });
        this.props.valueAvailableCallback(this.state.value);
    },

    setValidationInProcessState : function () {
        this.setState({
            valueInvalidMessage : ""
        });
        this.props.valueUnavailableCallback();
    },

    setInvalidState : function (message) {
        this.setState({
            valueValid : false,
            valueInvalidMessage : message
        });
        this.props.valueUnavailableCallback();
    },

    scheduleValidation : function(valueToValidate) {
        var self = this;
        window.clearTimeout(valueValidationDelay);
        valueValidationDelay = window.setTimeout(
            this.props.validation,
            700,
            valueToValidate, {
                onStart : self.setValidationInProcessState,
                onValid : self.setValidState,
                onInvalid : self.setInvalidState
            });
    },

    inputChanged: function (e ) {
        this.setState({
            value : e.target.value,
            valueValid : true
        });
        this.scheduleValidation(e.target.value);
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
            </div>
        );
    }
});

module.exports = SelfValidatableFormField;