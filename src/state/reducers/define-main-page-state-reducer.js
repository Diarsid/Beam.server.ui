var Immutable = require("immutable");

var actionTypes =
    require("./../actions/action-types.js");

var mainPageViews = {
    webpanel : "webpanel",
    bookmarks : "bookmarks"
};

function toggleView(currentView) {
    if ( currentView === mainPageViews.webpanel ) {
        return mainPageViews.bookmarks;
    } else {
        return mainPageViews.webpanel;
    }
}

var mainPageInitialState = {

    currentView : mainPageViews.webpanel,

    webPanelLoading : false,
    bookmarksLoading : false,

    webPanelLoadingFailedMessage : "",
    bookmarksLoadingFailedMessage : "",

    webPanelDirs : Immutable.fromJS([]),
    bookmarksDirs : Immutable.fromJS([])
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
                webPanelDirs : Immutable.fromJS(action.dirs)
            });
        case actionTypes.bookmarksLoaded :
            return Object.assign({}, mainPageState, {
                bookmarksLoading : false,
                bookmarksDirs : Immutable.fromJS(action.dirs)
            });

        // toggle views
        case actionTypes.toggleMainPageContentView :
            return Object.assign({}, mainPageState, {
                currentView : toggleView(mainPageState.currentView)
            });

        case actionTypes.directoryCreated :
            if ( action.place == mainPageViews.webpanel ) {
                return Object.assign({}, mainPageState, {
                    webPanelDirs : mainPageState.webPanelDirs.push(Immutable.fromJS({
                        name : action.name,
                        pages : Immutable.fromJS([])
                    }))
                });
            } else {
                return Object.assign({}, mainPageState, {
                    bookmarksDirs : mainPageState.bookmarksDirs.push(Immutable.fromJS({
                        name : action.name,
                        pages : Immutable.fromJS([])
                    }))
                });
            }
        case actionTypes.pageCreated :
        case actionTypes.pageDeleted :
        case actionTypes.pageRenamed :
        case actionTypes.pageUrlChanged :
        case actionTypes.pagesReordered :
        case actionTypes.directoryRemoved :
        case actionTypes.directoryRenamed :
        case actionTypes.directoriesReordered :
            if ( action.place == mainPageViews.webpanel ) {
                return Object.assign({}, mainPageState, {
                    webPanelDirs : action.dirs
                });
            } else {
                return Object.assign({}, mainPageState, {
                    bookmarksDirs : action.dirs
                });
            }

        default :
            return mainPageState;
    }
}

module.exports = defineMainPageState;