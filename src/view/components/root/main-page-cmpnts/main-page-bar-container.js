var connect = require('react-redux').connect;

/* custom modules */

var MainPageBar =
    require("./main-page-bar.js");
var actions =
    require("./../../../../state/actions/actions.js");
var dispatch =
    require("./../../../../state/store/app-store.js").dispatch;
var createDirectory =
    require("./web-objects-operations/directory-create.js");

/* module code */

function getOtherView(currentView) {
    if ( currentView === "bookmarks" ) {
        return "WebPanel";
    } else {
        return "Bookmarks";
    }
}

function mapStateToProps(state) {
    return {
        toggleContentView : () => dispatch(actions.toggleMainPageContentViewAction()),
        otherView : getOtherView(state.mainPage.currentView),
        createDirectory : function (newDirName) {
            createDirectory(state.user.id, state.mainPage.currentView, newDirName);
        }
    };
}

var MainPageBarContainer = connect(mapStateToProps)(MainPageBar);

module.exports = MainPageBarContainer;