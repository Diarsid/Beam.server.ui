var React = require('react');
var Modal = require('react-modal');

var styles =
    require("./../../../../inline-styles/inline-styles.js");
var DialogButtonsPane =
    require("./dialog-buttons-pane.js");
var SelfValidatableFormField =
    require("./self-validatable-form-field.js");
var validateDirectoryName =
    require("./../../../../../network/prepared-ajax-calls/validate-webobject-name-call.js");

// -----------------------

var initialControllerState = {
    open : false,
    newName : ""
};

var CreateDirController = React.createClass({

    getInitialState : function () {
        return Object.assign({}, initialControllerState);
    },

    open : function () {
        this.setState({
            open : true
        });
    },

    isSubmitAllowed : function () {
        return ( this.state.newName != "" );
    },

    validNameAvailable : function (name) {
        this.setState({
            newName : name
        });
    },

    validNameNotAvailable : function () {
        this.setState({
            newName : ""
        });
    },

    submitDirCreation : function () {
        this.props.create(this.state.newName);
        this.setState(Object.assign({}, initialControllerState));
    },

    cancelDirCreation : function () {
        this.setState(Object.assign({}, initialControllerState));
    },

    render: function () {
        return (
            <div className="create-dir-controller">
                <button type="button"
                        className="create-directory-button-on-main-page main-page-bar-button"
                        onClick={this.open}>
                </button>
                <Modal
                    closeTimeoutMS={0}
                    isOpen={this.state.open}
                    shouldCloseOnOverlayClick={false}
                    style={styles.modalDialogStyle} >

                    <label className="form-label">Create new directory: </label>
                    <br/>

                    <SelfValidatableFormField
                        valueAvailableCallback={this.validNameAvailable}
                        valueUnavailableCallback={this.validNameNotAvailable}
                        placeholder="name..."
                        validation={validateDirectoryName}
                    />

                    <DialogButtonsPane
                        submitAllowed={this.isSubmitAllowed()}
                        submitText="Create"
                        submitAction={this.submitDirCreation}
                        cancelAction={this.cancelDirCreation}
                    />
                </Modal>
            </div>
        );
    }
});

module.exports = CreateDirController;