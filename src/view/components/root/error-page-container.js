var connect = require('react-redux').connect;

var ErrorPage =
    require("./error-page.js");

function mapStateToProps(state) {
    return {
        message : state.errorPage.message
    };
}

var ErrorPageContainer = connect(mapStateToProps)(ErrorPage);

module.exports = ErrorPageContainer;