var actionTypes =
    require("./../actions/action-types.js");
var jwtRefreshing =
    require("./../../jwt-refreshing.js");

// ---------------------

function interceptAction(action) {
    switch (action.type) {

        case actionTypes.logout :
        case actionTypes.goToRegister :
        case actionTypes.goToLogin :
        case actionTypes.goToLanding :
            jwtRefreshing.stopRefreshing();
            break;

        case actionTypes.goToMain :
        case actionTypes.storedUserInfoValid :
        case actionTypes.loginSuccess :
        case actionTypes.regSuccess :
            jwtRefreshing.scheduleRefreshing();
            break;

        default :
            break;
    }
}

var authActionsInterceptor = {
    intercept : interceptAction
};

module.exports = authActionsInterceptor;