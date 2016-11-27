var React = require('react');

var styles =
    require("./../../../../inline-styles/inline-styles.js");
var ModalPane =
    require("./modal-pane.js");
var DialogButtonsPane =
    require("./dialog-buttons-pane.js");

// -----------------------

var ModalDialog = React.createClass({
    render : function() {
        return (
            <ModalPane isOpen={this.props.isOpen}>
                <label className="form-label">
                    {this.props.children}
                </label>
                <br/>

                <DialogButtonsPane
                    submitAllowed={true}
                    submitText={this.props.submitText}
                    submitAction={this.props.submitAction}
                    cancelAction={this.props.cancelAction}
                />
            </ModalPane>
        );
    }
});

module.exports = ModalDialog;