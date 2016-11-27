var actionTypes =
    require("./../actions/action-types.js");
var jwtRefreshing =
    require("./../../global-util/jwt-refreshing.js");

// ---------------------

function interceptAction(action) {
    switch (action.type) {

        case actionTypes.logout :
            jwtRefreshing.stopRefreshing();
            break;

        case actionTypes.userInfoDelivered :
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