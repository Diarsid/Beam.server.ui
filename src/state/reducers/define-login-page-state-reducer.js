var actionTypes =
    require("./../actions/action-types.js");

var initialLoginPageState = {
    nickNameState : {
        value : "",
        status : "",
        message : ""
    },
    passwordState : {
        value : "",
        status : "",
        message : ""
    },
    message : ""
};

function defineLoginPageState(loginPageState = initialLoginPageState, action) {
    switch (action.type) {

        case actionTypes.appStarts :
        case actionTypes.userInfoDelivered :
        case actionTypes.loginClear :
            return initialLoginPageState;

        case actionTypes.loginNickNameStateChanged :
            return Object.assign({}, loginPageState, {
                nickNameState : action.nickNameState,
                message : ""
            });
        case actionTypes.loginPasswordStateChanged :
            return Object.assign({}, loginPageState, {
                passwordState : action.passwordState,
                message : ""
            });

        case actionTypes.loginFailed :
            return Object.assign({}, loginPageState, {
                message : "Login failed!"
            });

        default :
            return loginPageState;
    }
}

module.exports = defineLoginPageState;