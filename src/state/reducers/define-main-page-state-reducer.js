var actionTypes =
    require("./../actions/action-types.js");

var mainPageViews = {
    webPanel : "webPanel",
    bookmarks : "bookmarks"
};

function toggleView(currentView) {
    if ( currentView === mainPageViews.webPanel ) {
        return mainPageViews.bookmarks;
    } else {
        return mainPageViews.webPanel;
    }
}

var mainPageInitialState = {

    currentView : mainPageViews.webPanel,

    webPanelLoading : false,
    bookmarksLoading : false,

    webPanelLoadingFailedMessage : "",
    bookmarksLoadingFailedMessage : "",

    webPanelDirs : [],
    bookmarksDirs : []
};

function defineMainPageState(mainPageState = mainPageInitialState, action) {
    switch (action.type) {

        case actionTypes.appStarts :
            return mainPageInitialState;

        case actionTypes.logout :
            return mainPageInitialState;

        // data loading progress
        case actionTypes.webPanelLoadingBegins :
            return Object.assign({}, mainPageState, {
                webPanelLoading : true
            });
        case actionTypes.bookmarksLoadingBegins :
            return Object.assign({}, mainPageState, {
                bookmarksLoading : true
            });

        // data loading failed
        case actionTypes.webPanelLoadingFailed :
            return Object.assign({}, mainPageState, {
                webPanelLoading : false,
                webPanelLoadingFailedMessage : action.message
            });
        case actionTypes.bookmarksLoadingFailed :
            return Object.assign({}, mainPageState, {
                bookmarksLoading : false,
                bookmarksLoadingFailedMessage : action.message
            });

        // data loaded
        case actionTypes.webPanelLoaded :
            return Object.assign({}, mainPageState, {
                webPanelLoading : false,
                webPanelDirs : action.dirs
            });
        case actionTypes.bookmarksLoaded :
            return Object.assign({}, mainPageState, {
                bookmarksLoading : false,
                bookmarksDirs : action.dirs
            });

        // toggle views
        case actionTypes.toggleMainPageContentView :
            return Object.assign({}, mainPageState, {
                currentView : toggleView(mainPageState.currentView)
            });

        case actionTypes.directoryCreationSuccess :
            return Object.assign({}, mainPageState);

        default :
            return mainPageState;
    }
}

module.exports = defineMainPageState;