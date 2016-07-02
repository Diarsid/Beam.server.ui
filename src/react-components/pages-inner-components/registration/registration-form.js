var React = require("react");

var RegistrationInputHint = require('./registration-input-hint.js');

var inlineStyles =      require('../../../inline-styles.js');
var inputValidator =    require('../../../input-validator.js');

var RegistrationForm = React.createClass({

    getInitialState: function () {
        return {
            nickName: "",
            name: "",
            surname: "",
            email: "",
            password: "",
            confirmedPassword: "",

            nickNameIsFree: true,
            nickNameValid: false,
            nameValid: false,
            surnameValid: false,
            emailValid: false,
            passwordValid: false,
            confirmedPasswordValid: false,

            nickNameInvalidMessage: " < enter nick name",
            nameInvalidMessage: " < enter name",
            surnameInvalidMessage: " < enter surname",
            emailInvalidMessage: " < enter email",
            passwordInvalidMessage: " < enter password",
            confirmedPasswordInvalidMessage: " < confirm password"
        }
    },

    register: function () {
        if ( this.isRegistrationAllowed() ) {
            this.props.registerAction(
                this.state.nickName,
                this.state.name,
                this.state.surname,
                this.state.email,
                this.state.password);
        }
    },

    getNickNameInputStyle: function () {
        return inlineStyles.getInputStyle(this.state.nickNameIsFree && this.state.nickNameValid);
    },

    getNameInputStyle: function () {
        return inlineStyles.getInputStyle(this.state.nameValid) ;
    },

    getSurnameInputStyle: function () {
        return inlineStyles.getInputStyle(this.state.surnameValid );
    },

    getEmailInputStyle: function () {
        return inlineStyles.getInputStyle(this.state.emailValid);
    },

    getEnterPasswordInputStyle: function () {
        return inlineStyles.getInputStyle(this.state.passwordValid);
    },

    getConfirmedPasswordInputStyle: function () {
        return inlineStyles.getInputStyle(this.state.confirmedPasswordValid);
    },

    isRegistrationAllowed: function () {
        return this.state.nickNameIsFree &&
            this.state.nickNameValid &&
            this.state.nameValid &&
            this.state.surnameValid &&
            this.state.emailValid &&
            this.state.passwordValid &&
            this.state.confirmedPasswordValid;
    },

    getRegistrationButtonStyle: function () {
        return inlineStyles.getRegistrationButtonStyle(this.isRegistrationAllowed());
    },

    nickNameFreeCallback: function () {
        console.log('[REG FORM] nick free');
        this.setState({
            nickNameIsFree: true,
            nickNameValid: true,
            nickNameInvalidMessage: ""
        });
    },

    nickNameNotFreeCallback: function () {
        console.log('[REG FORM] nick not free');
        this.setState({
            nickNameIsFree: false,
            nickNameValid: true,
            nickNameInvalidMessage: " < this nick name is not free"
        });
    },

    nickNameChanged: function ( event ) {
        var newNickName = event.target.value;

        if ( inputValidator.validateNickName(newNickName) ) {
            inputValidator.checkIfNickNameIsFree(
                newNickName, this.nickNameFreeCallback, this.nickNameNotFreeCallback);
            this.setState({
                nickName : newNickName
            });
        } else {
            this.setState({
                nickName : newNickName,
                nickNameIsFree: true,
                nickNameValid: false,
                nickNameInvalidMessage: " < this nick name is invalid"
            });
        }
    },

    nameChanged: function ( event ) {
        var newName = event.target.value;
        if ( inputValidator.validateName(newName) ) {
            this.setState({
                name: newName,
                nameValid: true,
                nameInvalidMessage: ""
            });
        } else {
            this.setState({
                name: newName,
                nameValid: false,
                nameInvalidMessage: " < name must be longer than 1 character"
            });
        }
    },

    surnameChanged: function ( event ) {
        var newSurname = event.target.value;
        if ( inputValidator.validateName(newSurname) ) {
            this.setState({
                surname: newSurname,
                surnameValid: true,
                surnameInvalidMessage: ""
            });
        } else {
            this.setState({
                surname: newSurname,
                surnameValid: false,
                surnameInvalidMessage: " < surname must be longer than 1 character"
            });
        }
    },

    emailChanged: function ( event ) {
        var newEmail = event.target.value;
        if ( inputValidator.validateEmail(newEmail) ) {
            this.setState({
                email: newEmail,
                emailValid: true,
                emailInvalidMessage: ""
            });
        } else {
            this.setState({
                email: newEmail,
                emailValid: false,
                emailInvalidMessage: " < email must be of the right format"
            });
        }
    },

    passwordChanged: function ( event ) {
        var newPassword = event.target.value;
        if ( inputValidator.validatePassword(newPassword) ) {
            if ( inputValidator.validatePasswords(newPassword, this.state.confirmedPassword) ) {
                this.setState({
                    password: newPassword,
                    passwordValid: true,
                    confirmedPasswordValid: true,
                    passwordInvalidMessage: "",
                    confirmedPasswordInvalidMessage: ""
                });
            } else {
                this.setState({
                    password: newPassword,
                    passwordValid: true,
                    confirmedPasswordValid: false,
                    passwordInvalidMessage: "",
                    confirmedPasswordInvalidMessage: " < passwords do not match"
                });
            }
        } else {
            if ( inputValidator.validatePasswords(newPassword, this.state.confirmedPassword) ) {
                this.setState({
                    password: newPassword,
                    passwordValid: false,
                    confirmedPasswordValid: true,
                    passwordInvalidMessage: " < password must be longer than 6 chars",
                    confirmedPasswordInvalidMessage: ""
                });
            } else {
                this.setState({
                    password: newPassword,
                    passwordValid: false,
                    confirmedPasswordValid: false,
                    passwordInvalidMessage: " < password must be longer than 6 chars",
                    confirmedPasswordInvalidMessage: " < passwords do not match"
                });
            }
        }
    },

    confirmedPasswordChanged: function ( event ) {
        var newConfirmedPassword = event.target.value;
        if ( inputValidator.validatePasswords(this.state.password, newConfirmedPassword) ) {
            this.setState({
                confirmedPassword : newConfirmedPassword,
                confirmedPasswordValid: true,
                confirmedPasswordInvalidMessage: ""
            });
        } else {
            this.setState({
                confirmedPassword : newConfirmedPassword,
                confirmedPasswordValid: false,
                confirmedPasswordInvalidMessage: " < passwords do not match"
            });
        }
    },

    render: function () {
        var nickNameInputStyle = this.getNickNameInputStyle();
        var nameInputStyle = this.getNameInputStyle();
        var surnameInputStyle = this.getSurnameInputStyle();
        var emailInputStyle = this.getEmailInputStyle();
        var passwordInputStyle = this.getEnterPasswordInputStyle();
        var confirmedPasswordInputStyle = this.getConfirmedPasswordInputStyle();
        var registrationButtonStyle = this.getRegistrationButtonStyle();
        return (
            <div className="registration-form">
                <form>
                    <fieldset>

                        <label class="registration-form-label">Nickname:</label>
                        <br/>
                        <input type="text"
                               className="registration-form-input"
                               placeholder="nick_name"
                               style = {nickNameInputStyle}
                               value = {this.state.nickName}
                               onChange={this.nickNameChanged} />
                        <RegistrationInputHint
                            showHint={!this.state.nickNameValid | !this.state.nickNameIsFree}
                            message={this.state.nickNameInvalidMessage} />
                        <br/>

                        <label class="registration-form-label">Name:</label>
                        <br/>
                        <input type="text"
                               className="registration-form-input"
                               placeholder="name"
                               style = {nameInputStyle}
                               value = {this.state.name}
                               onChange={this.nameChanged} />
                        <RegistrationInputHint
                            showHint={!this.state.nameValid}
                            message={this.state.nameInvalidMessage} />
                        <br/>

                        <label class="registration-form-label">Surname:</label>
                        <br/>
                        <input type="text"
                               className="registration-form-input"
                               placeholder="surname"
                               style = {surnameInputStyle}
                               value = {this.state.surname}
                               onChange={this.surnameChanged} />
                        <RegistrationInputHint
                            showHint={!this.state.surnameValid}
                            message={this.state.surnameInvalidMessage} />
                        <br/>

                        <label class="registration-form-label">Email:</label>
                        <br/>
                        <input type="text"
                               className="registration-form-input"
                               placeholder="...@..."
                               style = {emailInputStyle}
                               value = {this.state.email}
                               onChange={this.emailChanged} />
                        <RegistrationInputHint
                            showHint={!this.state.emailValid }
                            message={this.state.emailInvalidMessage} />
                        <br/>

                        <label className="registration-form-label">Enter password:</label>
                        <br/>
                        <input type="password"
                               className="registration-form-input"
                               style={passwordInputStyle}
                               value={this.state.password}
                               onChange={this.passwordChanged}/>
                        <RegistrationInputHint
                            showHint={!this.state.passwordValid}
                            message={this.state.passwordInvalidMessage} />
                        <br/>

                        <label className="registration-form-label">Confirm password:</label>
                        <br/>
                        <input type="password"
                               className="registration-form-input"
                               style={confirmedPasswordInputStyle}
                               value={this.state.confirmedPassword}
                               onChange={this.confirmedPasswordChanged}/>
                        <RegistrationInputHint
                            showHint={!this.state.confirmedPasswordValid}
                            message={this.state.confirmedPasswordInvalidMessage} />
                        <br/>

                    </fieldset>
                </form>
                <button type="button"
                        className="registration-button"
                        style={registrationButtonStyle}
                        onClick={this.register} >
                    OK
                </button>
            </div>
        );
    }
});

module.exports = RegistrationForm;