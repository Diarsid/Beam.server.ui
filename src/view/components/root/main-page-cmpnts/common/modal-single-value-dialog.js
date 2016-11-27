var React = require('react');

var ModalPane =
    require("./modal-pane.js");
var DialogButtonsPane =
    require("./dialog-buttons-pane.js");
var SelfValidatableFormField =
    require("./../../../common/self-validatable-form-field.js");

// ---------------------

var ModalSingleValueDialog = React.createClass({

    getInitialState : function () {
        return { value : "" };
    },

    isSubmitAllowed : function () {
        return ( this.state.value != "" );
    },

    valueAvailable : function (newValue) {
        this.setState({ value : newValue });
    },

    valueNotAvailable : function () {
        this.setState({ value : "" });
    },

    submitAction : function () {
        this.props.submit(this.state.value);
        this.setState({ value : "" });
    },

    cancelAction : function () {
        this.props.cancel();
        this.setState({ value : "" });
    },

    render : function() {
        return (
            <ModalPane isOpen={this.props.isOpen} >
                <label className="form-label">
                    {this.props.children}
                </label>
                <br/>

                <SelfValidatableFormField
                    valueAvailableCallback={this.valueAvailable}
                    valueUnavailableCallback={this.valueNotAvailable}
                    placeholder={this.props.placeholder}
                    validation={this.props.validation}
                />

                <DialogButtonsPane
                    submitAllowed={this.isSubmitAllowed()}
                    submitText={this.props.submitText}
                    submitAction={this.submitAction}
                    cancelAction={this.cancelAction}
                />
            </ModalPane>
        );
    }
});

module.exports = ModalSingleValueDialog;