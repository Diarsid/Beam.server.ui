var Immutable = require("immutable");

/* custom modules */

var actionTypes =
    require("./../actions/action-types.js");

/* module code */

var mainPageViews = {
    webpanel : "webpanel",
    bookmarks : "bookmarks"
};

function reducerLog(message) {
    console.log("[REDUCER] [MAIN PAGE] " + message);
}

function toggleView(currentView) {
    if ( currentView === mainPageViews.webpanel ) {
        return mainPageViews.bookmarks;
    } else {
        return mainPageViews.webpanel;
    }
}

var mainPageInitialState = {

    currentView : mainPageViews.webpanel,

    webPanelLoadingFailedMessage : "",
    bookmarksLoadingFailedMessage : "",

    webPanelDirs : Immutable.fromJS([]),
    bookmarksDirs : Immutable.fromJS([])
};

/* assignments */

function assignWebPanelDirsToState (mainPageState, dirs) {
    return Object.assign({}, mainPageState, {
        webPanelDirs : dirs
    });
}

function assignBookmarksDirsToState (mainPageState, dirs) {
    return Object.assign({}, mainPageState, {
        bookmarksDirs : dirs
    });
}

/* immutable changes to directories and pages */

function immutableDeleteDirectoryByOrder(dirs, action) {
    reducerLog("directory deletion starts...");
    reducerLog(action.dirOrder);
    reducerLog(action.name);
    console.log(dirs);
    reducerLog("...delete dir:" + dirs.get(action.dirOrder).get("name"));
    return dirs
        .delete(action.dirOrder);
}

function immutableRenameDirectory(dirs, action) {
    console.log(dirs);
    var renamedDir = dirs.get(action.dirOrder);
    reducerLog("directory renaming starts...");
    reducerLog("...rename " + renamedDir.get("name") + " to " + action.newDirName);
    return dirs
        .set(
            action.dirOrder,
            dirs.get(action.dirOrder).set("name", action.newDirName)
        );
}

function immutableNewDirectoryInsertion(dirs, action) {
    return dirs
        .push(Immutable.fromJS({
            name : action.name,
            pages : Immutable.fromJS([])
        }));
}

function immutableInsertDirectoryToNewOrder(dirs, oldOrder, newOrder, movedDir) {
    reducerLog("...reorder dir:" + movedDir.get("name") +
        " from " + oldOrder +
        " to " + newOrder);
    return dirs
        .delete(oldOrder)
        .insert(newOrder, movedDir);
}

function immutableReorderDirectory(dirs, action) {
    reducerLog("directories reordering starts...");
    return immutableInsertDirectoryToNewOrder(
        dirs, action.oldOrder, action.newOrder, dirs.get(action.oldOrder));
}

function immutableDirWithInsertedNewPage(targetDir, imtblPage) {
    console.log(targetDir);
    console.log(imtblPage);
    return targetDir
        .set(
            "pages",
            targetDir.get("pages").push(imtblPage))
}

function immutableNewPageInsertion(dirs, action) {
    reducerLog("page creation starts...");
    return dirs
        .set(
            action.dirOrder,
            immutableDirWithInsertedNewPage(
                dirs.get(action.dirOrder),
                Immutable.fromJS({
                    name : action.pageName,
                    url : action.pageUrl
                })
            ));
}

function immutableReorderPageInDirectory(dirs, dirWithMovedPage, movedPage, action) {
    reducerLog("...reorder in dir:" + dirWithMovedPage.get("name") +
        " page:" + movedPage.get("name") +
        " from " + action.oldOrder +
        " to " + action.newOrder);
    return dirs.set(
        action.dirOrder,
        dirWithMovedPage.set(
            "pages",
            dirWithMovedPage.get("pages")
                .delete(action.oldOrder)
                .insert(action.newOrder, movedPage)));
}

function immutablePageReordered(dirs, action) {
    console.log(dirs.get(action.dirOrder));
    console.log(dirs.get(action.dirOrder).get("pages").get(action.oldOrder));
    reducerLog("pages reordering starts...");
    return immutableReorderPageInDirectory(
        dirs,
        dirs.get(action.dirOrder),
        dirs.get(action.dirOrder).get("pages").get(action.oldOrder),
        action);
}

function immutableDeletePageByOrder(dirs, action) {
    reducerLog("page deletion starts...");
    return dirs
        .deleteIn([action.dirOrder, "pages", action.pageOrder]);
}

function immutableRenamePage(dirs, action) {
    reducerLog("page renaming starts...");
    reducerLog("...rename page:" +
        dirs.get(action.dirOrder).get("pages").get(action.pageOrder).get("name") +
        " to " + action.newName);
    return dirs
        .setIn(
            [action.dirOrder, "pages", action.pageOrder, "name"],
            action.newName);
}

function immutableChangePageUrl(dirs, action) {
    reducerLog("page url editing starts...");
    return dirs
        .setIn(
            [action.dirOrder, "pages", action.pageOrder, "url"],
            action.newUrl);
}

/* reducer body */

function defineMainPageState(mainPageState = mainPageInitialState, action) {
    switch (action.type) {

        case actionTypes.appStarts :
        case actionTypes.logout :
            return mainPageInitialState;

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

        case actionTypes.toggleMainPageContentView :
            return Object.assign({}, mainPageState, {
                currentView : toggleView(mainPageState.currentView)
            });

        case actionTypes.directoryCreated :
            if ( action.place == mainPageViews.webpanel ) {
                return assignWebPanelDirsToState(
                    mainPageState,
                    immutableNewDirectoryInsertion(mainPageState.webPanelDirs, action));
            } else {
                return assignBookmarksDirsToState(
                    mainPageState,
                    immutableNewDirectoryInsertion(mainPageState.bookmarksDirs, action));
            }

        case actionTypes.pageCreated :
            if ( action.place == mainPageViews.webpanel ) {
                return assignWebPanelDirsToState(
                    mainPageState,
                    immutableNewPageInsertion(mainPageState.webPanelDirs, action));
            } else {
                return assignBookmarksDirsToState(
                    mainPageState,
                    immutableNewPageInsertion(mainPageState.bookmarksDirs, action));
            }

        case actionTypes.pageDeleted :
            if ( action.place == mainPageViews.webpanel ) {
                return assignWebPanelDirsToState(
                    mainPageState,
                    immutableDeletePageByOrder(mainPageState.webPanelDirs, action));
            } else {
                return assignBookmarksDirsToState(
                    mainPageState,
                    immutableDeletePageByOrder(mainPageState.bookmarksDirs, action));
            }

        case actionTypes.pageRenamed :
            if ( action.place == mainPageViews.webpanel ) {
                return assignWebPanelDirsToState(
                    mainPageState,
                    immutableRenamePage(mainPageState.webPanelDirs, action));
            } else {
                return assignBookmarksDirsToState(
                    mainPageState,
                    immutableRenamePage(mainPageState.bookmarksDirs, action));
            }

        case actionTypes.pageUrlChanged :
            if ( action.place == mainPageViews.webpanel ) {
                return assignWebPanelDirsToState(
                    mainPageState,
                    immutableChangePageUrl(mainPageState.webPanelDirs, action));
            } else {
                return assignBookmarksDirsToState(
                    mainPageState,
                    immutableChangePageUrl(mainPageState.bookmarksDirs, action));
            }

        case actionTypes.pagesReordered :
            if ( action.place == mainPageViews.webpanel ) {
                return assignWebPanelDirsToState(
                    mainPageState,
                    immutablePageReordered(mainPageState.webPanelDirs, action));
            } else {
                return assignBookmarksDirsToState(
                    mainPageState,
                    immutablePageReordered(mainPageState.bookmarksDirs, action));
            }

        case actionTypes.directoryDeleted :
            if ( action.place == mainPageViews.webpanel ) {
                return assignWebPanelDirsToState(
                    mainPageState,
                    immutableDeleteDirectoryByOrder(mainPageState.webPanelDirs, action));
            } else {
                return assignBookmarksDirsToState(
                    mainPageState,
                    immutableDeleteDirectoryByOrder(mainPageState.bookmarksDirs, action));
            }

        case actionTypes.directoryRenamed :
            if ( action.place == mainPageViews.webpanel ) {
                return assignWebPanelDirsToState(
                    mainPageState,
                    immutableRenameDirectory(mainPageState.webPanelDirs, action));
            } else {
                return assignBookmarksDirsToState(
                    mainPageState,
                    immutableRenameDirectory(mainPageState.bookmarksDirs, action));
            }

        case actionTypes.directoriesReordered :
            if ( action.place == mainPageViews.webpanel ) {
                return assignWebPanelDirsToState(
                    mainPageState,
                    immutableReorderDirectory(mainPageState.webPanelDirs, action));
            } else {
                return assignBookmarksDirsToState(
                    mainPageState,
                    immutableReorderDirectory(mainPageState.bookmarksDirs, action));
            }

        default :
            return mainPageState;
    }
}

module.exports = defineMainPageState;