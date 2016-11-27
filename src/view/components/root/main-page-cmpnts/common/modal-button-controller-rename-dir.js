var React = require('react');

/* custom modules */

var ModalSingleValueDialog =
    require("./modal-single-value-dialog.js");
var validateDirectoryName =
    require("./../../../../../network/prepared-ajax-calls/validate-webobject-name-call.js");
var renameDir =
    require("./../web-objects-operations/directory-rename.js");

/* module code */

var RenameDirController = React.createClass({

    getInitialState : function () {
        return { open : false };
    },

    open : function () {
        this.setState({ open : true });
    },

    submitDirRename : function (newName) {
        renameDir(
            this.props.userId,
            "webpanel",
            this.props.dirOrder,
            this.props.dirName,
            newName);
        this.setState({ open : false });
    },

    cancelDirRename : function () {
        this.setState({ open : false });
    },

    render: function () {
        return (
            <span className="edit-dir-name-controller">
                <button
                    type="button"
                    className="edit-dir-name-button-on-directory-bar directory-bar-button"
                    onClick={this.open}>
                </button>

                <ModalSingleValueDialog
                    isOpen={this.state.open}
                    validation={validateDirectoryName}
                    placeholder="name..."
                    submitText="Rename"
                    submit={this.submitDirRename}
                    cancel={this.cancelDirRename}
                >
                    Rename <b>{this.props.dirName}</b> to:
                </ModalSingleValueDialog>
            </span>
        );
    }
});
module.exports = RenameDirController;