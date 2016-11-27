var React = require('react');

var ModalSingleValueDialog =
    require("./modal-single-value-dialog.js");
var validateDirectoryName =
    require("./../../../../../network/prepared-ajax-calls/validate-webobject-name-call.js");


// -----------------------

var CreateDirController = React.createClass({

    getInitialState : function () {
        return { open : false };
    },

    open : function () {
        this.setState({ open : true });
    },

    submitDirCreation : function (newName) {
        this.props.create(newName);
        this.setState({ open : false });
    },

    cancelDirCreation : function () {
        this.setState({ open : false });
    },

    render: function () {
        return (
            <div className="create-dir-controller">
                <button type="button"
                        className="create-directory-button-on-main-page main-page-bar-button"
                        onClick={this.open}>
                </button>

                <ModalSingleValueDialog
                    isOpen={this.state.open}
                    validation={validateDirectoryName}
                    placeholder="name..."
                    submitText="Create"
                    submit={this.submitDirCreation}
                    cancel={this.cancelDirCreation}
                >
                    Create new directory:
                </ModalSingleValueDialog>
            </div>
        );
    }
});

module.exports = CreateDirController;