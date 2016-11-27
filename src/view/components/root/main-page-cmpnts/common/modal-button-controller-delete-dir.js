var React = require('react');

/* custom modules */

var ModalDialog =
    require("./modal-dialog.js");
var deleteDir =
    require("./../web-objects-operations/directory-delete.js");

/* module code */

var DeleteDirController = React.createClass({

    getInitialState : function () {
        return {
            open : false
        }
    },

    open : function () {
        this.setState({ open : true });
    },

    submitDirDelete : function () {
        deleteDir(
            this.props.userId,
            "webpanel",
            this.props.dirOrder,
            this.props.dirName);
        this.setState({ open : false });
    },

    cancelDirDelete : function () {
        this.setState({ open : false });
    },

    render : function() {
        return (
            <span className="delete-dir-controller">
                <button type="button"
                        className="delete-dir-button-on-directory-bar directory-bar-button"
                        onClick={this.open}>
                </button>
                <ModalDialog
                    isOpen={this.state.open}
                    submitText="Delete"
                    submitAction={this.submitDirDelete}
                    cancelAction={this.cancelDirDelete}
                >
                    Delete <b>{this.props.dirName}</b> directory?
                </ModalDialog>
            </span>
        );
    }
});

module.exports = DeleteDirController;