var React = require('react');

var styles =
    require("./../../../../inline-styles/inline-styles.js");

// ----------------------

var DialogButtonsPane = React.createClass({

    getInitialState : function () {
        return {
            submitButtonHover: false,
            cancelButtonHover: false
        }
    },

    submit : function () {
        if ( this.props.submitAllowed ) {
            this.props.submitAction();
        }
    },

    getSubmitStyle : function () {
        if ( this.props.submitAllowed ) {
            if ( this.state.submitButtonHover ) {
                return styles.dialogButtonStyleHover;
            } else {
                return styles.dialogButtonStyle;
            }
        } else {
            return styles.dialogForbiddenButtonStyle;
        }
    },

    getCancelStyle : function () {
        if ( this.state.cancelButtonHover ) {
            return styles.dialogButtonStyleHover;
        } else {
            return styles.dialogButtonStyle;
        }
    },

    submitButtonToggle : function () {
        this.setState({
            submitButtonHover: ! this.state.submitButtonHover
        });
    },

    cancelButtonToggle : function () {
        this.setState({
            cancelButtonHover: ! this.state.cancelButtonHover
        });
    },

    render: function () {
        return (
            <div className="dialog-button-pane">
                <button
                    type="button"
                    style={this.getSubmitStyle()}
                    onClick={this.submit}
                    onMouseEnter={this.submitButtonToggle}
                    onMouseLeave={this.submitButtonToggle}>
                    {this.props.submitText}</button>
                <button
                    type="button"
                    style={this.getCancelStyle()}
                    onClick={this.props.cancelAction}
                    onMouseEnter={this.cancelButtonToggle}
                    onMouseLeave={this.cancelButtonToggle}>
                    Cancel</button>
                <br/>
            </div>
        );
    }
});

module.exports = DialogButtonsPane;