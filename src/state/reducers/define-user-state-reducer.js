var actionTypes =
    require("./../actions/action-types.js");

var userInitialState = {
    id : "",
    nickName : "",
    role : ""
};

function defineUserState(userState = userInitialState, action) {
    switch ( action.type ) {
        case actionTypes.goToLogin :
            return userInitialState;
        case actionTypes.goToRegister :
            return userInitialState;
        case actionTypes.storedUserInfoValid :
            return action.userInfo;

        case actionTypes.loginSuccess :
            return action.userInfo;

        default :
            return userState;
    }
}

module.exports = defineUserState;