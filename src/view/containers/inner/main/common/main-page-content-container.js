var connect = require('react-redux').connect;

var MainPageContent =
    require("./../../../../components/inner/main/common/main-page-content.js");

// -------------------------------

function mapStateToProps(state) {
    return {
        currentView : state.mainPage.currentView,

        webPanelLoading : state.mainPage.webPanelLoading,
        bookmarksLoading : state.mainPage.bookmarksLoading,

        webPanelLoadingFailedMessage : state.mainPage.webPanelLoadingFailedMessage,
        bookmarksLoadingFailedMessage : state.mainPage.bookmarksLoadingFailedMessage,

        webPanelDirs : state.mainPage.webPanelDirs,
        bookmarksDirs : state.mainPage.bookmarksDirs
    }
}

var MainPageContentContainer = connect(mapStateToProps)(MainPageContent);

module.exports = MainPageContentContainer;