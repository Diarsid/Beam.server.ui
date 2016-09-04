var connect = require('react-redux').connect;

var RegistrationPage =
    require("./../../components/top-level/registration-page.js");

function mapStateToProps(state) {
    return {};
}

var RegistrationPageContainer = connect(mapStateToProps)(RegistrationPage);

module.exports = RegistrationPageContainer;