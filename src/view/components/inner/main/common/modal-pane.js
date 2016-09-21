var React = require('react');
var Modal = require('react-modal');

var styles =
    require("./../../../../inline-styles/inline-styles.js");

// ------------------------

var ModalPane = React.createClass({
    render : function() {
        return (
            <Modal
                closeTimeoutMS={0}
                isOpen={this.props.isOpen}
                shouldCloseOnOverlayClick={false}
                style={styles.modalDialogStyle} >
                {this.props.children}
            </Modal>
        );
    }
});

module.exports = ModalPane;