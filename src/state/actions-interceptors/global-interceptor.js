var authInterceptor =
    require("./auth-actions-interceptor.js");

// ----------------------

function interceptAllActions(action) {
    authInterceptor.intercept(action);
}

var actionsGlobalInterceptor = {
    intercept : interceptAllActions
};

module.exports = actionsGlobalInterceptor;