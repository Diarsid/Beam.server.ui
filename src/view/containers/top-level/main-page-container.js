var connect = require('react-redux').connect;

var MainPage =
    require("./../../components/top-level/main-page.js");

function mapStateToProps(state) {
    return {
        nickName : state.user.nickName
    };
}

var MainPageContainer = connect(mapStateToProps)(MainPage);

module.exports = MainPageContainer;