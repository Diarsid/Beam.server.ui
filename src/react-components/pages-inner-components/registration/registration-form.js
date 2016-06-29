var React = require("react");

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
            confirmedPasswordValid: false
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

    nickNameChanged: function ( event ) {
        var newNickName = event.target.value;
        this.setState({
            nickName : newNickName,
            nickNameIsFree: inputValidator.checkIfNickNameIsFree(newNickName),
            nickNameValid: inputValidator.validateNickName(newNickName)
        });
    },

    nameChanged: function ( event ) {
        var newName = event.target.value;
        this.setState({
            name: newName,
            nameValid: inputValidator.validateName(newName)
        });
    },

    surnameChanged: function ( event ) {
        var newSurname = event.target.value;
        this.setState({
            surname: newSurname,
            surnameValid: inputValidator.validateName(newSurname)
        });
    },

    emailChanged: function ( event ) {
        var newEmail = event.target.value;
        this.setState({
            email: newEmail,
            emailValid: inputValidator.validateEmail(newEmail)
        });
    },

    passwordChanged: function ( event ) {
        var newPassword = event.target.value;
        this.setState({
            password: newPassword,
            passwordValid: inputValidator.validatePassword(newPassword)
        });
    },

    confirmedPasswordChanged: function ( event ) {
        var newConfirmedPassword = event.target.value;
        this.setState({
            confirmedPassword : newConfirmedPassword,
            confirmedPasswordValid: inputValidator.validatePasswords(this.state.password, newConfirmedPassword)
        });
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
                        <br/>

                        <label class="registration-form-label">Name:</label>
                        <br/>
                        <input type="text"
                               className="registration-form-input"
                               placeholder="name"
                               style = {nameInputStyle}
                               value = {this.state.name}
                               onChange={this.nameChanged} />
                        <br/>

                        <label class="registration-form-label">Surname:</label>
                        <br/>
                        <input type="text"
                               className="registration-form-input"
                               placeholder="surname"
                               style = {surnameInputStyle}
                               value = {this.state.surname}
                               onChange={this.surnameChanged} />
                        <br/>

                        <label class="registration-form-label">Email:</label>
                        <br/>
                        <input type="text"
                               className="registration-form-input"
                               placeholder="...@..."
                               style = {emailInputStyle}
                               value = {this.state.email}
                               onChange={this.emailChanged} />
                        <br/>

                        <label className="registration-form-label">Enter password:</label>
                        <br/>
                        <input type="password"
                               className="registration-form-input"
                               style={passwordInputStyle}
                               value={this.state.password}
                               onChange={this.passwordChanged}/>
                        <br/>

                        <label className="registration-form-label">Confirm password:</label>
                        <br/>
                        <input type="password"
                               className="registration-form-input"
                               style={confirmedPasswordInputStyle}
                               value={this.state.confirmedPassword}
                               onChange={this.confirmedPasswordChanged}/>
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