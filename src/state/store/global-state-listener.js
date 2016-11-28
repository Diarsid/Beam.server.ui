/* custom modules */

var userInfoListener =
    require("./listeners/user-info-listener.js");

/* module code */

function listenToState(state) {
    userInfoListener(state);
}

module.exports = listenToState;