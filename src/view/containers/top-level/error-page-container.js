var connect = require('react-redux').connect;

var ErrorPage =
    require("./../../components/top-level/error-page.js");

function mapStateToProps(state) {
    return {};
}

var ErrorPageContainer = connect(mapStateToProps)(ErrorPage);

module.exports = ErrorPageContainer;