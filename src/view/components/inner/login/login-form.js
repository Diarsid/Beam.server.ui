var React = require('react');

var inlineStyles =
    require('./../../../inline-styles/inline-styles.js');
var AcceptedSign =
    require("./../common/accepted-sign.js");
var FormFieldInvalidMessage =
    require("./../common/form-field-invalid-message.js");
var Spinner =
    require("./../common/spinner.js");

var LoginForm = React.createClass({

    nickNameInputChanged : function (event) {
        this.props.nickNameChanged(event.target.value);
    },

    passwordInputChanged : function (event) {
        this.props.passwordChanged(event.target.value);
    },

    getLoginButtonStyle: function () {
        if ( this.props.loginAllowed ) {
            return inlineStyles.loginButtonActiveStyle;
        } else {
            return inlineStyles.loginButtonInactiveStyle;
        }
    },

    getNickNameInputStyle: function () {
        return inlineStyles.getInputStyle(this.props.nickNameValid);
    },

    getPasswordInputStyle: function () {
        return inlineStyles.getInputStyle(this.props.passwordValid);
    },

    isNickNameAccepted : function () {
        return (
            this.props.nickNameValid &&
            this.props.nickName != "" &&
            ! this.props.nickNameValidationInProgress
        );
    },

    isPasswordAccepted : function () {
        return (
            this.props.passwordValid &&
            this.props.password != "" &&
            ! this.props.passwordValidationInProgress
        );
    },

    render : function () {
        var loginButtonStyle = this.getLoginButtonStyle();
        var nickNameInputStyle = this.getNickNameInputStyle();
        var passwordInputStyle = this.getPasswordInputStyle();
        return(
            <div className="login-form">
                <form>
                    <fieldset>
                        <label className="login-form-label">Nickname:</label>
                        <br/>
                        <input type="text"
                               className="login-form-input"
                               placeholder="nick_name"
                               style = {nickNameInputStyle}
                               value = {this.props.nickName}
                               onChange={this.nickNameInputChanged} />
                        <AcceptedSign accepted={this.isNickNameAccepted()}/>
                        <FormFieldInvalidMessage message={this.props.nickNameInvalidMessage} />
                        <br/>

                        <label className="login-form-label">Password:</label>
                        <br/>
                        <input type="password"
                               className="login-form-input"
                               style={passwordInputStyle}
                               value={this.props.password}
                               onChange={this.passwordInputChanged}/>
                        <AcceptedSign accepted={this.isPasswordAccepted()}/>
                        <FormFieldInvalidMessage message={this.props.passwordInvalidMessage} />
                        <br/>
                    </fieldset>
                </form>
                <button type="button"
                        className="login-button"
                        style={loginButtonStyle}
                        onClick={this.props.loginAction} >
                    Login
                </button>
            </div>
        );
    }
});

module.exports = LoginForm;