var React = require('react');

var inlineStyles =
    require('./../../../inline-styles/inline-styles.js');
var AcceptedSign =
    require("./../common/accepted-sign.js");
var FormFieldInvalidMessage =
    require("./../common/form-field-invalid-inline-message.js");

// -------------------------

var RegistrationForm = React.createClass({

    nickNameInputChanged : function (event) {
        this.props.nickNameChanged(event.target.value);
    },

    nameInputChanged : function (event) {
        this.props.nameChanged(event.target.value);
    },

    surnameInputChanged : function (event) {
        this.props.surnameChanged(event.target.value);
    },

    emailInputChanged : function (event) {
        this.props.emailChanged(event.target.value);
    },

    passwordInputChanged : function (event) {
        this.props.passwordChanged(event.target.value);
    },

    confirmPasswordInputChanged : function (event) {
        this.props.confirmPasswordChanged(event.target.value);
    },

    getNickNameInputStyle: function () {
        return inlineStyles.getInputStyle(this.props.nickNameValid);
    },

    getNameInputStyle: function () {
        return inlineStyles.getInputStyle(this.props.nameValid);
    },

    getSurnameInputStyle: function () {
        return inlineStyles.getInputStyle(this.props.surnameValid);
    },

    getEmailInputStyle: function () {
        return inlineStyles.getInputStyle(this.props.emailValid);
    },

    getPasswordInputStyle: function () {
        return inlineStyles.getInputStyle(this.props.passwordValid);
    },

    getRegButtonStyle: function () {
        return inlineStyles.getRegistrationButtonStyle(this.props.registrationAllowed);
    },

    getConfirmPasswordInputStyle: function () {
        return inlineStyles.getInputStyle(
            this.props.passwordValid &&
            this.props.confirmPasswordValid &&
            (this.props.passwordValid === this.props.confirmPasswordValid));
    },

    isNickNameAccepted : function () {
        return (
            this.props.nickNameValid &&
            this.props.nickName != "" &&
            ! this.props.nickNameValidationInProgress
        );
    },

    isNameAccepted : function () {
        return (
            this.props.nameValid &&
            this.props.name != "" &&
            ! this.props.nameValidationInProgress
        );
    },

    isSurnameAccepted : function () {
        return (
            this.props.surnameValid &&
            this.props.surname != "" &&
            ! this.props.surnameValidationInProgress
        );
    },

    isEmailAccepted : function () {
        return (
            this.props.emailValid &&
            this.props.email != "" &&
            ! this.props.emailValidationInProgress
        );
    },

    isPasswordAccepted : function () {
        return (
            this.props.passwordValid &&
            this.props.password != "" &&
            ! this.props.passwordValidationInProgress
        );
    },

    isConfirmPasswordAccepted : function () {
        return (
            this.props.passwordValid &&
            this.props.confirmPasswordValid &&
            (this.props.passwordValid === this.props.confirmPasswordValid) &&
            this.props.confirmPasswordValid &&
            this.props.confirmPassword != "" &&
            ! this.props.confirmPasswordValidationInProgress
        );
    },

    render : function () {
        var nickNameInputStyle = this.getNickNameInputStyle();
        var nameInputStyle = this.getNameInputStyle();
        var surnameInputStyle = this.getSurnameInputStyle();
        var emailInputStyle = this.getEmailInputStyle();
        var passwordInputStyle = this.getPasswordInputStyle();
        var confirmedPasswordInputStyle = this.getConfirmPasswordInputStyle();
        var regButtonStyle = this.getRegButtonStyle();
        return (
            <div className="registration-form">
                <form>
                    <fieldset>

                        <label className="registration-form-label">Nickname:</label>
                        <br/>
                        <input type="text"
                               className="registration-form-input"
                               placeholder="nick_name"
                               style={nickNameInputStyle}
                               value={this.props.nickName}
                               onChange={this.nickNameInputChanged} />
                        <AcceptedSign accepted={this.isNickNameAccepted()}/>
                        <FormFieldInvalidMessage message={this.props.nickNameInvalidMessage} />
                        <br/>

                        <label className="registration-form-label">Name:</label>
                        <br/>
                        <input type="text"
                               className="registration-form-input"
                               placeholder="name"
                               style = {nameInputStyle}
                               value = {this.props.name}
                               onChange={this.nameInputChanged} />
                        <AcceptedSign accepted={this.isNameAccepted()}/>
                        <FormFieldInvalidMessage message={this.props.nameInvalidMessage} />
                        <br/>

                        <label className="registration-form-label">Surname:</label>
                        <br/>
                        <input type="text"
                               className="registration-form-input"
                               placeholder="surname"
                               style = {surnameInputStyle}
                               value = {this.props.surname}
                               onChange={this.surnameInputChanged} />
                        <AcceptedSign accepted={this.isSurnameAccepted()}/>
                        <FormFieldInvalidMessage message={this.props.surnameInvalidMessage} />
                        <br/>

                        <label className="registration-form-label">Email:</label>
                        <br/>
                        <input type="text"
                               className="registration-form-input"
                               placeholder="...@..."
                               style = {emailInputStyle}
                               value = {this.props.email}
                               onChange={this.emailInputChanged} />
                        <AcceptedSign accepted={this.isEmailAccepted()}/>
                        <FormFieldInvalidMessage message={this.props.emailInvalidMessage} />
                        <br/>

                        <label className="registration-form-label">Enter password:</label>
                        <br/>
                        <input type="password"
                               className="registration-form-input"
                               style={passwordInputStyle}
                               value={this.props.password}
                               onChange={this.passwordInputChanged}/>
                        <AcceptedSign accepted={this.isPasswordAccepted()}/>
                        <FormFieldInvalidMessage message={this.props.passwordInvalidMessage} />
                        <br/>

                        <label className="registration-form-label">Confirm password:</label>
                        <br/>
                        <input type="password"
                               className="registration-form-input"
                               style={confirmedPasswordInputStyle}
                               value={this.props.confirmedPassword}
                               onChange={this.confirmPasswordInputChanged}/>
                        <AcceptedSign accepted={this.isConfirmPasswordAccepted()}/>
                        <FormFieldInvalidMessage message={this.props.confirmPasswordInvalidMessage} />
                        <br/>

                    </fieldset>
                </form>
                <button type="button"
                        className="registration-button"
                        style={regButtonStyle}
                        onClick={this.props.registerAction} >
                    Register!
                </button>
            </div>
        );
    }
});

module.exports = RegistrationForm;