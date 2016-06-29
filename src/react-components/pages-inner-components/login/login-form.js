var React = require('react');

var inlineStyles =      require('../../../inline-styles.js');
var inputValidator =    require('../../../input-validator.js');

var LoginForm = React.createClass({

    getInitialState: function () {
        return {
            nickName: "",
            password: ""
        }
    },

    nickNameAndPasswordBothValid: function () {
        return (
            inputValidator.validateNickName(this.state.nickName) &&
            inputValidator.validatePassword(this.state.password)
        );
    },

    login: function () {
        if ( this.nickNameAndPasswordBothValid() ) {
            this.props.loginAction(this.state.nickName, this.state.password);
        }
    },

    nickNameChanged: function ( event ) {
        this.setState({
            nickName: event.target.value
        });
    },

    passwordChanged: function ( event ) {
        this.setState({
            password: event.target.value
        });
    },

    getLoginButtonStyle: function () {
        if ( this.nickNameAndPasswordBothValid() ) {
            return inlineStyles.loginButtonActiveStyle;
        } else {
            return inlineStyles.loginButtonInactiveStyle;
        }
    },

    getNickNameInputStyle: function () {
        if ( inputValidator.validateNickName(this.state.nickName) ) {
            return inlineStyles.inputValidStyle;
        } else {
            return inlineStyles.inputInvalidStyle;
        }
    },

    getPasswordInputStyle: function () {
        if ( inputValidator.validatePassword(this.state.password) ) {
            return inlineStyles.inputValidStyle;
        } else {
            return inlineStyles.inputInvalidStyle;
        }
    },

    render: function () {
        var loginButtonStyle = this.getLoginButtonStyle();
        var nickNameInputStyle = this.getNickNameInputStyle();
        var passwordInputStyle = this.getPasswordInputStyle();
        return(
            <div className="login-form">
                <form>
                    <fieldset>
                        <label class="login-form-label">Nickname:</label>
                        <br/>
                        <input type="text"
                               className="login-form-input"
                               placeholder="nick_name"
                               style = {nickNameInputStyle}
                               value = {this.state.nickName}
                               onChange={this.nickNameChanged} />
                        <br/>
                        <label className="login-form-label">Password:</label>
                        <br/>
                        <input type="password"
                               className="login-form-input"
                               style={passwordInputStyle}
                               value={this.state.password}
                               onChange={this.passwordChanged}/>
                        <br/>
                    </fieldset>
                </form>
                <button type="button"
                        className="login-button"
                        style={loginButtonStyle}
                        onClick={this.login} >
                    Login
                </button>
            </div>
        );
    }
});

module.exports = LoginForm;