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

var RenameDirController = React.createClass({

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

    submitDirRename : function () {
        this.props.renameTo(this.state.newName);
        this.setState(Object.assign({}, initialControllerState));
    },

    cancelDirRename : function () {
        this.setState(Object.assign({}, initialControllerState));
    },

    render: function () {
        return (
            <span className="edit-dir-name-controller">
                <button
                    type="button"
                    className="edit-dir-name-button-on-main-page directory-bar-button"
                    onClick={this.open}>
                </button>
                <Modal
                    closeTimeoutMS={0}
                    isOpen={this.state.open}
                    shouldCloseOnOverlayClick={false}
                    style={styles.modalDialogStyle} >

                    <label className="form-label">
                        Rename <b>{this.props.dirName}</b> to:
                    </label>
                    <br/>

                    <SelfValidatableFormField
                        valueAvailableCallback={this.validNameAvailable}
                        valueUnavailableCallback={this.validNameNotAvailable}
                        placeholder="name..."
                        validation={validateDirectoryName}
                    />

                    <DialogButtonsPane
                        submitAllowed={this.isSubmitAllowed()}
                        submitText="Rename"
                        submitAction={this.submitDirRename}
                        cancelAction={this.cancelDirRename}
                    />
                </Modal>
            </span>
        );
    }
});
module.exports = RenameDirController;