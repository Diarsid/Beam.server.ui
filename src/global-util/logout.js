
/* custom modules */

var actions =
    require("./../state/actions/actions.js");
var dispatch =
    require("./../state/store/app-store.js").dispatch;
var routes =
    require("./router-navigation.js").routes;
var navigateTo =
    require("./router-navigation.js").navigateTo;
var storage =
    require("./../state/store/app-local-storage.js");

/* module code */

function logout() {
    console.log("[LOGOUT]");
    storage.deleteJwt();
    dispatch(actions.logoutAction());
    navigateTo(routes.welcomeRoute);
}

module.exports = logout;