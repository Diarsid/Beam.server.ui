var React = require('react');
var Modal = require('react-modal');

var styles =
    require("./../../../../inline-styles/inline-styles.js");
var DialogButtonsPane =
    require("./dialog-buttons-pane.js");
var FormFieldInvalidUnderlineMessage =
    require("./../../common/form-field-invalid-underline-message.js");
var validateDirectoryName =
    require("./../../../../../network/prepared-ajax-calls/validate-webobject-name-call.js");

// -----------------------

var initialControllerState = {
    open : false,
    newName : "",
    newNameValid : false,
    newNameInvalidMessage : ""
};

var CreateDirController = React.createClass({

    dirNameValidationCallbacks : {
        onStart : function () {
            this.setState({
                newNameValid : false,
                newNameInvalidMessage : ""
            });
        },
        onValid : function () {
            this.setState({
                newNameValid : true,
                newNameInvalidMessage : ""
            });
        },
        onInvalid : function (message) {
            this.setState({
                newNameValid : false,
                newNameInvalidMessage : message
            });
        }
    },

    getInitialState : function () {
        return Object.assign({}, initialControllerState);
    },

    open : function () {
        this.setState({
            open : true
        });
    },

    inputChanged: function ( e ) {
        this.setState({
            open : e.target.value
        });
        validateDirectoryName(e.target.value, this.dirNameValidationCallbacks);
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
                        className="create-directory-button-on-main-page"
                        onClick={this.open}>
                    Create dir
                </button>
                <Modal
                    closeTimeoutMS={0}
                    isOpen={this.state.open}
                    shouldCloseOnOverlayClick={false}
                    style={styles.modalDialogStyle} >

                    <label className="form-label">Create new directory: </label>
                    <br/>

                    <input type="text"
                        id="new-dir-name"
                        placeholder="name..."
                        className="form-input"
                        style={styles.getInputStyle(this.state.newNameValid)}
                        value={this.state.newName}
                        onChange={this.inputChanged}/>
                    <FormFieldInvalidUnderlineMessage
                        message={this.state.newNameInvalidMessage} />
                    <br/>

                    <DialogButtonsPane
                        submitAllowed={this.state.newNameValid}
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