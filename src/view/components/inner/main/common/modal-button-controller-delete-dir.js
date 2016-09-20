var React = require('react');
var Modal = require('react-modal');

var styles =
    require("./../../../../inline-styles/inline-styles.js");
var DialogButtonsPane =
    require("./dialog-buttons-pane.js");

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
                <Modal
                    closeTimeoutMS={0}
                    isOpen={this.state.open}
                    shouldCloseOnOverlayClick={false}
                    style={styles.modalDialogStyle} >

                    <label className="form-label">
                        Delete <b>{this.props.dirName}</b> directory?
                    </label>
                    <br/>

                    <DialogButtonsPane
                        submitAllowed={true}
                        submitText="Delete"
                        submitAction={this.submitDirDelete}
                        cancelAction={this.cancelDirDelete}
                    />
                </Modal>
            </span>
        );
    }
});

module.exports = DeleteDirController;