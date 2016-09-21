var React = require('react');

var ModalDialog =
    require("./modal-dialog.js");

// -----------------------

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
        this.props.delete();
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