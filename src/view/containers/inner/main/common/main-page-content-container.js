var connect = require('react-redux').connect;
var Immutable = require("immutable");

var MainPageContent =
    require("./../../../../components/inner/main/common/main-page-content.js");
var actionDispatchers =
    require("./../../../../../state/actions/action-dispatchers.js");
var editDirectoryPropAjaxCall =
    require("./../../../../../network/prepared-ajax-calls/directory-edit-property-call.js");
var editPagePropAjaxCall =
    require("./../../../../../network/prepared-ajax-calls/page-edit-property-call.js");
var createNewPageAjaxCall =
    require("./../../../../../network/prepared-ajax-calls/pages-create-new-call.js");
var deletePageAjaxCall =
    require("./../../../../../network/prepared-ajax-calls/page-delete-call.js");
var deleteDirectoryAjaxCall =
    require("./../../../../../network/prepared-ajax-calls/directory-delete-call.js");

// -------------------------------

function contentLog(message) {
    console.log("[APP] [MAIN CONTENT] " + message);
}

function reorderDirectoryAjax(userId, place, dirName, newOrder) {
    var callbacks = {
        onStart : function() {},
        onSuccess : function() {
            contentLog("...success");
        },
        onUnauthenticated : actionDispatchers.app.dispatchGoToLoginAction,
        onFail : function(message) {
            contentLog("...failed: " + message);
        },
        onServerError : actionDispatchers.app.dispatchGoToErrorAction
    };
    editDirectoryPropAjaxCall(userId, place, dirName, "order", newOrder, callbacks);
}

function reorderPagesAjax(userId, place, dirName, pageName, newOrder) {
    var callbacks = {
        onStart : function() {},
        onSuccess : function() {
            contentLog("...success");
        },
        onUnauthenticated : actionDispatchers.app.dispatchGoToLoginAction,
        onFail : function(message) {
            contentLog("...failed: " + message);
        },
        onServerError : actionDispatchers.app.dispatchGoToErrorAction
    };
    editPagePropAjaxCall(userId, place, dirName, pageName, "order", newOrder, callbacks);
}

function deleteDirectoryAjax(userId, place, name) {
    var callbacks = {
        onStart : function() {},
        onSuccess : function() {
            contentLog("...success");
        },
        onUnauthenticated : actionDispatchers.app.dispatchGoToLoginAction,
        onFail : function(message) {
            contentLog("...failed: " + message);
        },
        onServerError : actionDispatchers.app.dispatchGoToErrorAction
    };
    deleteDirectoryAjaxCall(userId, place, name, callbacks);
}

function createNewPageAjax(userId, place, dirName, pageName, pageUrl) {
    var callbacks = {
        onStart : function() {},
        onSuccess : function() {
            contentLog("...success");
        },
        onUnauthenticated : actionDispatchers.app.dispatchGoToLoginAction,
        onFail : function(message) {
            contentLog("...failed: " + message);
        },
        onServerError : actionDispatchers.app.dispatchGoToErrorAction
    };
    createNewPageAjaxCall(
        userId, place, dirName, {"name" : pageName, "url" : pageUrl}, callbacks);
}

function renameDirectoryAjax(userId, place, oldDirName, newDirName) {
    var callbacks = {
        onStart : function() {},
        onSuccess : function() {
            contentLog("...success");
        },
        onUnauthenticated : actionDispatchers.app.dispatchGoToLoginAction,
        onFail : function(message) {
            contentLog("...failed: " + message);
        },
        onServerError : actionDispatchers.app.dispatchGoToErrorAction
    };
    editDirectoryPropAjaxCall(userId, place, oldDirName, "name", newDirName, callbacks);
}

function renamePageAjax(userId, place, dirName, oldPageName, newPageName) {
    var callbacks = {
        onStart : function() {},
        onSuccess : function() {
            contentLog("...success");
        },
        onUnauthenticated : actionDispatchers.app.dispatchGoToLoginAction,
        onFail : function(message) {
            contentLog("...failed: " + message);
        },
        onServerError : actionDispatchers.app.dispatchGoToErrorAction
    };
    editPagePropAjaxCall(userId, place, dirName, oldPageName, "name", newPageName, callbacks);
}

function deletePageAjax(userId, place, dirName, pageName) {
    var callbacks = {
        onStart : function() {},
        onSuccess : function() {
            contentLog("...success");
        },
        onUnauthenticated : actionDispatchers.app.dispatchGoToLoginAction,
        onFail : function(message) {
            contentLog("...failed: " + message);
        },
        onServerError : actionDispatchers.app.dispatchGoToErrorAction
    };
    deletePageAjaxCall(userId, place, dirName, pageName, callbacks);
}

function editPageUrlAjax(userId, place, dirName, pageName, newUrl) {
    var callbacks = {
        onStart : function() {},
        onSuccess : function() {
            contentLog("...success");
        },
        onUnauthenticated : actionDispatchers.app.dispatchGoToLoginAction,
        onFail : function(message) {
            contentLog("...failed: " + message);
        },
        onServerError : actionDispatchers.app.dispatchGoToErrorAction
    };
    editPagePropAjaxCall(userId, place, dirName, pageName, "url", newUrl, callbacks);
}

function mapStateToProps(state) {
    return {
        currentView : state.mainPage.currentView,

        webPanelLoading : state.mainPage.webPanelLoading,
        bookmarksLoading : state.mainPage.bookmarksLoading,

        webPanelLoadingFailedMessage : state.mainPage.webPanelLoadingFailedMessage,
        bookmarksLoadingFailedMessage : state.mainPage.bookmarksLoadingFailedMessage,

        webPanelDirs : state.mainPage.webPanelDirs,
        bookmarksDirs : state.mainPage.bookmarksDirs,

        reorderDirectories : function reorderDirectories(place, oldOrder, newOrder) {
            var dirs;
            if ( place == "webpanel" ) {
                dirs = state.mainPage.webPanelDirs
            } else {
                dirs = state.mainPage.bookmarksDirs
            }
            var movedDir = dirs.get(oldOrder);
            contentLog("directories reordering starts...");
            contentLog("...reorder dir:" + movedDir.get("name") + " from " + oldOrder + " to " + newOrder);
            actionDispatchers.main.dispatchDirectoriesReorderedAction(
                place, dirs.delete(oldOrder).insert(newOrder, movedDir));
            reorderDirectoryAjax(state.user.id, place, movedDir.get("name"), newOrder);
        },

        reorderPages : function reorderPages(place, dirOrder, dirName, pageName, oldOrder, newOrder) {
            var dirs;
            if ( place == "webpanel" ) {
                dirs = state.mainPage.webPanelDirs
            } else {
                dirs = state.mainPage.bookmarksDirs
            }
            var dirWithMovedPage = dirs.get(dirOrder);
            var movedPage = dirWithMovedPage.get("pages").get(oldOrder);
            contentLog("pages reordering starts...");
            contentLog("...reorder in dir:" + dirWithMovedPage.get("name") +
                " page:" + movedPage.get("name") +
                " from " + oldOrder +
                " to " + newOrder);
            dirs.deleteIn([dirOrder, "pages", oldOrder]).setIn([] );
            actionDispatchers.main.dispatchPagesReorderedAction(
                place,
                dirs.set(dirOrder, dirWithMovedPage.set("pages", dirWithMovedPage.get("pages").delete(oldOrder).insert(newOrder, movedPage))));
            reorderPagesAjax(state.user.id, place, dirName, pageName, newOrder);
        },

        renameDirIn : function renameDirectory(place, dirOrder, oldDirName, newDirName) {
            var dirs;
            if ( place == "webpanel" ) {
                dirs = state.mainPage.webPanelDirs
            } else {
                dirs = state.mainPage.bookmarksDirs
            }
            var renamedDir = dirs.get(dirOrder);
            contentLog("directory renaming starts...");
            contentLog("...rename " + renamedDir.get("name") + " to " + newDirName);
            actionDispatchers.main.directory.dispatchRenamedAction(
                place,
                dirs.set(dirOrder, renamedDir.set("name", newDirName)));
            renameDirectoryAjax(state.user.id, place, oldDirName, newDirName);
        },

        deleteDirIn : function deleteDirectory(place, dirOrder, name) {
            var dirs;
            if ( place == "webpanel" ) {
                dirs = state.mainPage.webPanelDirs
            } else {
                dirs = state.mainPage.bookmarksDirs
            }
            contentLog("directory deletion starts...");
            console.log(dirs);
            console.log(dirOrder);
            console.log(name);
            contentLog("...delete dir:" + dirs.get(dirOrder).get("name"));
            actionDispatchers.main.directory.dispatchRemovedAction(place, dirs.delete(dirOrder));
            deleteDirectoryAjax(state.user.id, place, name);
        },

        createPageIn : function createNewPage(place, dirOrder, dirName, pageName, pageUrl) {
            var dirs;
            if ( place == "webpanel" ) {
                dirs = state.mainPage.webPanelDirs
            } else {
                dirs = state.mainPage.bookmarksDirs
            }
            var dirWithNewPage = dirs.get(dirOrder);
            var imtblPage = Immutable.fromJS({
                name : pageName,
                url : pageUrl
            });
            contentLog("page creation starts...");
            contentLog("...create page:" + imtblPage.get("name") +
                " in dir:" + dirWithNewPage.get("name"));
            dirWithNewPage = dirWithNewPage.set(
                "pages",
                dirWithNewPage.get("pages").push(imtblPage));
            actionDispatchers.main.page.dispatchCreatedAction(
                place,
                dirs.set(dirOrder, dirWithNewPage));
            createNewPageAjax(state.user.id, place, dirName, pageName, pageUrl);
        },

        renamePageIn : function renamePage(place, dirOrder, dirName, pageOrder, oldPageName, newPageName) {
            var dirs;
            if ( place == "webpanel" ) {
                dirs = state.mainPage.webPanelDirs
            } else {
                dirs = state.mainPage.bookmarksDirs
            }
            var dirWithRenamedPage = dirs.get(dirOrder);
            var renamedPage = dirWithRenamedPage.get("pages").get(pageOrder);
            contentLog("page renaming starts...");
            contentLog("...rename page:" + renamedPage.get("name") + " to " + newPageName);
            actionDispatchers.main.page.dispatchRenamedAction(
                place,
                dirs.setIn([dirOrder, "pages", pageOrder, "name"], newPageName));
            renamePageAjax(state.user.id, place, dirName, oldPageName, newPageName);
        },

        deletePageIn : function deletePage(place, dirOrder, dirName, pageOrder, pageName) {
            var dirs;
            if ( place == "webpanel" ) {
                dirs = state.mainPage.webPanelDirs
            } else {
                dirs = state.mainPage.bookmarksDirs
            }
            contentLog("page deletion starts...");
            actionDispatchers.main.page.dispatchDeletedAction(
                place,
                dirs.deleteIn([dirOrder, "pages", pageOrder]));
            deletePageAjax(state.user.id, place, dirName, pageName);
        },

        editPageUrlIn : function editPageUrl(place, dirOrder, dirName, pageOrder, pageName, newUrl) {
            var dirs;
            if ( place == "webpanel" ) {
                dirs = state.mainPage.webPanelDirs
            } else {
                dirs = state.mainPage.bookmarksDirs
            }
            contentLog("page url editing starts...");
            actionDispatchers.main.page.dispatchUrlChangedAction(
                place,
                dirs.setIn([dirOrder, "pages", pageOrder, "url"], newUrl));
            editPageUrlAjax(state.user.id, place, dirName, pageName, newUrl);
        }
    }
}

var MainPageContentContainer = connect(mapStateToProps)(MainPageContent);

module.exports = MainPageContentContainer;