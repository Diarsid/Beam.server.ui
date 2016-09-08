var React = require('react');

var RegistrationForm =
    require("./../inner/registr/registration-form.js");
var FormFailureMessage =
    require("./../inner/common/form-failure-message.js");

var RegistrationPage = React.createClass({

    render: function () {
        return (
            <div className="registration-page">
                <button
                    type="button"
                    className="go-to-landing-button-on-login"
                    onClick={this.props.goToLanding} >
                    Back
                </button>
                <div>Registration page</div>
                <RegistrationForm
                    nickName={this.props.nickName}
                    nickNameValid={this.props.nickNameValid}
                    nickNameInvalidMessage={this.props.nickNameInvalidMessage}
                    nickNameValidationInProgress={this.props.nickNameValidationInProgress}

                    name={this.props.name}
                    nameValid={this.props.nameValid}
                    nameInvalidMessage={this.props.nameInvalidMessage}
                    nameValidationInProgress={this.props.nameValidationInProgress}

                    surname={this.props.surname}
                    surnameValid={this.props.surnameValid}
                    surnameInvalidMessage={this.props.surnameInvalidMessage}
                    surnameValidationInProgress={this.props.surnameValidationInProgress}

                    email={this.props.email}
                    emailValid={this.props.emailValid}
                    emailInvalidMessage={this.props.emailInvalidMessage}
                    emailValidationInProgress={this.props.emailValidationInProgress}

                    password={this.props.password}
                    passwordValid={this.props.passwordValid}
                    passwordInvalidMessage={this.props.passwordInvalidMessage}
                    passwordValidationInProgress={this.props.passwordValidationInProgress}

                    confirmPassword={this.props.confirmPassword}
                    confirmPasswordValid={this.props.confirmPasswordValid}
                    confirmPasswordInvalidMessage={this.props.confirmPasswordInvalidMessage}
                    confirmPasswordValidationInProgress={this.props.confirmPasswordValidationInProgress}

                    registrationAllowed={this.props.registrationAllowed}
                    registerAction={this.props.tryToRegister}
                    nickNameChanged={this.props.nickNameChanged}
                    nameChanged={this.props.nameChanged}
                    surnameChanged={this.props.surnameChanged}
                    emailChanged={this.props.emailChanged}
                    passwordChanged={this.props.passwordChanged}
                    confirmPasswordChanged={this.props.confirmPasswordChanged}
                />
                <FormFailureMessage
                    message={this.props.registrationFailureMessage}/>
                <FormFailureMessage
                    message={this.props.passwordsDifferFailureMessage}/>
            </div>
        );
    }
});

module.exports = RegistrationPage;