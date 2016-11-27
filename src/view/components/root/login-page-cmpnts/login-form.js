var React = require('react');

/* custom modules */

var actions =
    require("./../../../../state/actions/actions.js");
var dispatch =
    require("./../../../../state/store/app-store.js").dispatch;
var inlineStyles =
    require('./../../../inline-styles/inline-styles.js');
var SelfValidatableFormField =
    require("./../../common/self-validatable-form-field-2.js");
var FormFailureMessage =
    require("./../../common/form-failure-message.js");
var validateNickName =
    require("./../../../../network/prepared-ajax-calls/validate-nick-name-call.js");
var validatePassword =
    require("./../../../../network/prepared-ajax-calls/validate-password-call.js");

/* module code */

var LoginForm = React.createClass({

    dispatchNewNickNameState : function(nickState) {
        dispatch(actions.loginNickNameStateChangedAction(nickState));
    },

    dispatchNewPasswordState : function(passwordState) {
        dispatch(actions.loginPasswordStateChangedAction(passwordState));
    },

    getLoginButtonStyle: function () {
        if ( this.props.isLoginAllowed ) {
            return inlineStyles.loginButtonActiveStyle;
        } else {
            return inlineStyles.loginButtonInactiveStyle;
        }
    },

    render : function () {
        var loginButtonStyle = this.getLoginButtonStyle();
        return(
            <div className="login-form">
                <form>
                    <fieldset>
                        <label className="login-form-label">Nickname:</label>
                        <br/>
                        <SelfValidatableFormField
                            initial={this.props.nickNameState}
                            placeholder="nickname..."
                            dispatchValidateValue={this.dispatchNewNickNameState}
                            validation={validateNickName}
                        />
                        <br/>

                        <label className="login-form-label">Password:</label>
                        <br/>
                        <SelfValidatableFormField
                            initial={this.props.passwordState}
                            placeholder="password..."
                            dispatchValidateValue={this.dispatchNewPasswordState}
                            validation={validatePassword}
                        />
                        <br/>
                    </fieldset>
                </form>
                <button
                    type="button"
                    className="login-button"
                    style={loginButtonStyle}
                    onClick={this.props.tryToLogin} >
                    Login
                </button>
                <FormFailureMessage
                    message={this.props.message}
                />
            </div>
        );
    }
});

module.exports = LoginForm;