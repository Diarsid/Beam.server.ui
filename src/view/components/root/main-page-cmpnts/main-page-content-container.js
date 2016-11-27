var connect = require('react-redux').connect;

/* custom modules */

var MainPageContent =
    require("./main-page-content.js");

/* module code */

function mapStateToProps(state) {
    return {
        currentView : state.mainPage.currentView,

        userId : state.user.id,
        webPanelDirs : state.mainPage.webPanelDirs,
        bookmarksDirs : state.mainPage.bookmarksDirs
    }
}

var MainPageContentContainer = connect(mapStateToProps)(MainPageContent);

module.exports = MainPageContentContainer;