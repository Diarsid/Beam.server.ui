var React = require('react');

var LoginForm =
    require("./../inner/login/login-form.js");
var FormFailureMessage =
    require("./../inner/common/form-failure-message.js");

var LoginPage = React.createClass({

    render: function () {
        return (
            <div className="login-page">Login page
                <button
                    type="button"
                    className="go-to-registration-button-on-login"
                    onClick={this.props.goToRegistration} >
                    Registration
                </button>
                <button
                    type="button"
                    className="go-to-landing-button-on-login"
                    onClick={this.props.goToLanding} >
                    Back
                </button>
                <br/>
                <LoginForm
                    nickName={this.props.nickName}
                    nickNameValid={this.props.nickNameValid}
                    nickNameInvalidMessage={this.props.nickNameInvalidMessage}
                    nickNameValidationInProgress={this.props.nickNameValidationInProgress}

                    password={this.props.password}
                    passwordValid={this.props.passwordValid}
                    passwordInvalidMessage={this.props.passwordInvalidMessage}
                    passwordValidationInProgress={this.props.passwordValidationInProgress}

                    loginAllowed={this.props.loginAllowed}
                    loginAction={this.props.tryToLogin}
                    nickNameChanged={this.props.nickNameChanged}
                    passwordChanged={this.props.passwordChanged} />
                <FormFailureMessage
                    message={this.props.loginFailureMessage}/>
            </div>
        );
    }
});

module.exports = LoginPage;