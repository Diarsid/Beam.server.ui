var connect = require('react-redux').connect;

var MainPage =
    require("./../../components/top-level/main-page.js");
var storage =
    require("./../../../state/local/storage.js");
var actionDispatchers =
    require("./../../../state/actions/action-dispatchers.js");

// ----------------------

function performLogout() {
    actionDispatchers.app.dispatchLogoutAction();
    storage.deleteJwt();
}

function mapStateToProps(state) {
    return {
        nickName : state.user.nickName,
        logout : performLogout
    };
}

var MainPageContainer = connect(mapStateToProps)(MainPage);

module.exports = MainPageContainer;