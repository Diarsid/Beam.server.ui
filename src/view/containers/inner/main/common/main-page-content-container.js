var connect = require('react-redux').connect;

var MainPageContent =
    require("./../../../../components/inner/main/common/main-page-content.js");

// -------------------------------

function mapStateToProps(state) {

}

var MainPageContentContainer = connect(mapStateToProps)(MainPageContent);

module.exports = MainPageContentContainer;