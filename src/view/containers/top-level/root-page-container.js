var connect = require('react-redux').connect;

var RootPage =
    require("./../../components/top-level/root-page.js");

function mapStateToProps(state) {
    return {
        currentPage : state.currentPage
    }
}

var RootPageContainer = connect(mapStateToProps)(RootPage);

module.exports = RootPageContainer;