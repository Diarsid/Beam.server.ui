var React = require('react');

var LoginForm =
    require("./../inner/login/login-form.js");
var LoginFailureMessage =
    require("./../inner/login/login-failure-message.js");

var LoginPage = React.createClass({

    render: function () {
        return (
            <div className="login-page">Login page
                <button
                    type="button"
                    className="go-to-registration-button"
                    onClick={this.props.goToRegistration} >
                    Registration
                </button>
                <LoginForm
                    nickName={this.props.nickName}
                    nickNameValid={this.props.nickNameValid}
                    nickNameInvalidMessage={this.props.nickNameInvalidMessage}
                    nickNameValidationInProgress={this.props.nickNameValidationInProgress}

                    password={this.props.password}
                    passwordValid={this.props.passwordValid}
                    passwordInvalidMessage={this.props.passwordInvalidMessage}
                    passwordValidationInProgress={this.props.passwordValidationInProgress}

                    loginAction={this.props.tryToLogin}
                    nickNameChanged={this.props.nickNameChanged}
                    passwordChanged={this.props.passwordChanged} />
                <LoginFailureMessage
                    message={this.props.loginFailureMessage}/>
            </div>
        );
    }
});

module.exports = LoginPage;