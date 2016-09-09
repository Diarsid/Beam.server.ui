var actionTypes =
    require("./../actions/action-types.js");

var initialRegPageState = {

    nickName : "",
    nickNameValid : true,
    nickNameInvalidMessage : "",
    nickNameValidationInProgress : false,

    name : "",
    nameValid : true,
    nameInvalidMessage : "",
    nameValidationInProgress : false,

    surname : "",
    surnameValid : true,
    surnameInvalidMessage : "",
    surnameValidationInProgress : false,

    email : "",
    emailValid : true,
    emailInvalidMessage : "",
    emailValidationInProgress : false,

    password : "",
    passwordValid : true,
    passwordInvalidMessage : "",
    passwordValidationInProgress : false,

    confirmPassword : "",
    confirmPasswordValid : true,
    confirmPasswordInvalidMessage : "",
    confirmPasswordValidationInProgress : false,

    registrationFailureMessage : "",
    passwordsDifferFailureMessage : "",

    registrationAllowed : false
};

function defineRegistrationPageState(regPageState = initialRegPageState, action) {

    switch (action.type) {

        case actionTypes.appStarts :
            return initialRegPageState;

        // actions to process nick name input field
        case actionTypes.regNickNameChanged :
            return Object.assign({}, regPageState, {nickName : action.newNickName} );
        case actionTypes.regNickNameInvalid :
            return Object.assign({}, regPageState, {
                nickNameValidationInProgress : false,
                nickNameValid : false,
                nickNameInvalidMessage : action.message,
                registrationAllowed : false
            });
        case actionTypes.regNickNameValid :
            return Object.assign({}, regPageState, {
                nickNameValidationInProgress : false,
                nickNameValid : true,
                nickNameInvalidMessage : ""
            });
        case actionTypes.regNickNameValidationBegins :
            return Object.assign({}, regPageState, {
                nickNameValidationInProgress : true,
                registrationAllowed : false
            });

        // actions to process name input field
        case actionTypes.regNameChanged :
            return Object.assign({}, regPageState, {name : action.newName} );
        case actionTypes.regNameInvalid :
            return Object.assign({}, regPageState, {
                nameValidationInProgress : false,
                nameValid : false,
                nameInvalidMessage : action.message,
                registrationAllowed : false
            });
        case actionTypes.regNameValid :
            return Object.assign({}, regPageState, {
                nameValidationInProgress : false,
                nameValid : true,
                nameInvalidMessage : ""
            });
        case actionTypes.regNameValidationBegins :
            return Object.assign({}, regPageState, {
                nameValidationInProgress : true,
                registrationAllowed : false
            });


        // actions to process surname input field
        case actionTypes.regSurnameChanged :
            return Object.assign({}, regPageState, {surname : action.newSurname} );
        case actionTypes.regSurnameInvalid :
            return Object.assign({}, regPageState, {
                surnameValidationInProgress : false,
                surnameValid : false,
                surnameInvalidMessage : action.message,
                registrationAllowed : false
            });
        case actionTypes.regSurnameValid :
            return Object.assign({}, regPageState, {
                surnameValidationInProgress : false,
                surnameValid : true,
                surnameInvalidMessage : ""
            });
        case actionTypes.regSurnameValidationBegins :
            return Object.assign({}, regPageState, {
                surnameValidationInProgress : true,
                registrationAllowed : false
            });


        // actions to process surname input field
        case actionTypes.regEmailChanged :
            return Object.assign({}, regPageState, {email : action.newEmail} );
        case actionTypes.regEmailInvalid :
            return Object.assign({}, regPageState, {
                emailValidationInProgress : false,
                emailValid : false,
                emailInvalidMessage : action.message,
                registrationAllowed : false
            });
        case actionTypes.regEmailValid :
            return Object.assign({}, regPageState, {
                emailValidationInProgress : false,
                emailValid : true,
                emailInvalidMessage : ""
            });
        case actionTypes.regEmailValidationBegins :
            return Object.assign({}, regPageState, {
                emailValidationInProgress : true,
                registrationAllowed : false
            });


        // actions to process password input field
        case actionTypes.regPasswordChanged :
            return Object.assign({}, regPageState, {password : action.newPassword});
        case actionTypes.regPasswordInvalid :
            return Object.assign({}, regPageState, {
                passwordValid : false,
                passwordValidationInProgress: false,
                passwordInvalidMessage: action.message,
                registrationAllowed : false
            });
        case actionTypes.regPasswordValid :
            return Object.assign({}, regPageState, {
                passwordValid : true,
                passwordValidationInProgress: false,
                passwordInvalidMessage: ""
            });
        case actionTypes.regPasswordValidationBegins :
            return Object.assign({}, regPageState, {
                passwordValidationInProgress : true,
                registrationAllowed : false
            });

        // actions to process confirmation password input field
        case actionTypes.regConfirmPasswordChanged :
            return Object.assign({}, regPageState, {confirmPassword : action.newConfirmPassword});
        case actionTypes.regConfirmPasswordInvalid :
            return Object.assign({}, regPageState, {
                confirmPasswordValid : false,
                confirmPasswordValidationInProgress: false,
                confirmPasswordInvalidMessage: action.message,
                registrationAllowed : false
            });
        case actionTypes.regConfirmPasswordValid :
            return Object.assign({}, regPageState, {
                confirmPasswordValid : true,
                confirmPasswordValidationInProgress: false,
                confirmPasswordInvalidMessage: ""});
        case actionTypes.regConfirmPasswordValidationBegins :
            return Object.assign({}, regPageState, {
                confirmPasswordValidationInProgress : true,
                registrationAllowed : false
            });

        case actionTypes.regAssessIfAllowed :
            return Object.assign({}, regPageState, {
                registrationAllowed : (
                    regPageState.nickName != "" &&
                    regPageState.name != "" &&
                    regPageState.surname != "" &&
                    regPageState.email != "" &&
                    regPageState.password != "" &&
                    regPageState.confirmPassword != "" &&

                    regPageState.password === regPageState.confirmPassword &&

                    regPageState.nickNameValid &&
                    regPageState.nameValid &&
                    regPageState.surnameValid &&
                    regPageState.emailValid &&
                    regPageState.passwordValid &&
                    regPageState.confirmPasswordValid &&

                    ! regPageState.nickNameValidationInProgress &&
                    ! regPageState.nameValidationInProgress &&
                    ! regPageState.surnameValidationInProgress &&
                    ! regPageState.emailValidationInProgress &&
                    ! regPageState.passwordValidationInProgress &&
                    ! regPageState.confirmPasswordValidationInProgress)
            });

         // reg attempt
        case actionTypes.regFailed :
            return Object.assign({}, regPageState, {
                registrationAllowed : false,
                registrationFailureMessage : action.message
            });
        case actionTypes.regPasswordsDiffer :
            return Object.assign({}, regPageState, {
                passwordsDifferFailureMessage : "Passwords are not equal"
            });
        case actionTypes.regPasswordsEqual :
            return Object.assign({}, regPageState, {
                passwordsDifferFailureMessage : ""
            });
        case actionTypes.regSuccess :
            return initialRegPageState;

        case actionTypes.goToLanding :
            return initialRegPageState;
        case actionTypes.goToRegister :
            return initialRegPageState;
        case actionTypes.goToMain :
            return initialRegPageState;
        case actionTypes.goToError :
            return initialRegPageState;
        case actionTypes.logout :
            return initialRegPageState;

        default :
            return regPageState;
    }
}

module.exports = defineRegistrationPageState;