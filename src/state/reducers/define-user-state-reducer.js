var actionTypes =
    require("./../actions/action-types.js");

var userInitialState = {
    status : "unknown",
    id : "",
    nickName : "",
    role : ""
};

function defineUserState(userState = userInitialState, action) {
    switch ( action.type ) {

        case actionTypes.appStarts :
            return userInitialState;

        case actionTypes.autologinFailed :
        case actionTypes.logout :
            return Object.assign({}, userInitialState, {
                status : "logged out"
            });

        case actionTypes.userInfoDelivered :
            return Object.assign({}, userState, {
                status : "logged in",
                id : action.userInfo.id,
                nickName : action.userInfo.nickName,
                role : action.userInfo.role
            });
        default :
            return userState;
    }
}

module.exports = defineUserState;