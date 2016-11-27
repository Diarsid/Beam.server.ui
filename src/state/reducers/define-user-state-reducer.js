var actionTypes =
    require("./../actions/action-types.js");

var userInitialState = {
    id : "",
    nickName : "",
    role : ""
};

function defineUserState(userState = userInitialState, action) {
    switch ( action.type ) {

        case actionTypes.appStarts :
            return userInitialState;
        case actionTypes.logout :
            return userInitialState;

        case actionTypes.userInfoDelivered :
            return action.userInfo;

        default :
            return userState;
    }
}

module.exports = defineUserState;