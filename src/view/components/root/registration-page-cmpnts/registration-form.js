var React = require('react');

/* custom modules*/

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
    require("./../../../../network/prepared-ajax-calls/validate-nick-name-free-call.js");
var validatePassword =
    require("./../../../../network/prepared-ajax-calls/validate-password-call.js");;
var validateName =
    require("./../../../../network/prepared-ajax-calls/validate-name-call.js");
var validateEmail =
    require("./../../../../network/prepared-ajax-calls/validate-email-call.js");

/* module code */


var RegistrationForm = React.createClass({

    dispatchNameState : function (nameState) {
        dispatch(actions.regNameStateChangedAction(nameState));
    },

    dispatchNickNameState : function (nickState) {
        dispatch(actions.regNickNameStateChangedAction(nickState));
    },

    dispatchSurnameState : function (surnameState) {
        dispatch(actions.regSurnameStateChangedAction(surnameState));
    },

    dispatchEmailState : function (emailState) {
        dispatch(actions.regEmailStateChangedAction(emailState));
    },

    dispatchPasswordState : function (passState) {
        dispatch(actions.regPasswordStateChangedAction(passState));
    },

    dispatchConfirmPasswordState : function (confPassState) {
        dispatch(actions.regConfirmPasswordStateChangedAction(confPassState));
    },

    render : function () {
        var regButtonStyle = inlineStyles.getRegistrationButtonStyle(
            this.props.isRegistrAllowed);
        return (
            <div className="registration-form">
                <form>
                    <fieldset>

                        <label className="registration-form-label">Nickname:</label>
                        <br/>
                        <SelfValidatableFormField
                            placeholder="nickname..."
                            initial={this.props.nickNameState}
                            dispatchValidateValue={this.dispatchNickNameState}
                            validation={validateNickName}
                        />
                        <br/>

                        <label className="registration-form-label">Name:</label>
                        <br/>
                        <SelfValidatableFormField
                            placeholder="name..."
                            initial={this.props.nameState}
                            dispatchValidateValue={this.dispatchNameState}
                            validation={validateName}
                        />
                        <br/>

                        <label className="registration-form-label">Surname:</label>
                        <br/>
                        <SelfValidatableFormField
                            placeholder="surname..."
                            initial={this.props.surnameState}
                            dispatchValidateValue={this.dispatchSurnameState}
                            validation={validateName}
                        />
                        <br/>

                        <label className="registration-form-label">Email:</label>
                        <br/>
                        <SelfValidatableFormField
                            placeholder="...@..."
                            initial={this.props.emailState}
                            dispatchValidateValue={this.dispatchEmailState}
                            validation={validateEmail}
                        />
                        <br/>

                        <label className="registration-form-label">Enter password:</label>
                        <br/>
                        <SelfValidatableFormField
                            placeholder="password..."
                            initial={this.props.passwordState}
                            dispatchValidateValue={this.dispatchPasswordState}
                            validation={validatePassword}
                        />
                        <br/>

                        <label className="registration-form-label">Confirm password:</label>
                        <br/>
                        <SelfValidatableFormField
                            placeholder="confirm password..."
                            initial={this.props.confirmPasswordState}
                            dispatchValidateValue={this.dispatchConfirmPasswordState}
                            validation={validatePassword}
                        />
                        <br/>

                    </fieldset>
                </form>
                <button
                    type="button"
                    className="registration-button"
                    style={regButtonStyle}
                    onClick={this.props.tryToRegister}
                >
                    Register!
                </button>
                <FormFailureMessage
                    message={this.props.message}
                />
            </div>
        );
    }
});

module.exports = RegistrationForm;