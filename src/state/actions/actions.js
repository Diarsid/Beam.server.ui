var actionTypes = require("./action-types.js");

// ------------------

function creatorLog(message) {
    console.log("[ACTION CREATOR] " + message);
}

var actionCreators = {

    appStartsAction : function () {
        return { type : actionTypes.appStarts }
    },

    logoutAction : function () {
        return { type : actionTypes.logout }
    },

    acceptUserInfoAction : function (userInfo ) {
        creatorLog("stored user info valid: " + userInfo);
        return {
            type : actionTypes.userInfoDelivered,
            userInfo : userInfo
        }
    },

    loginClearAction : function() {
        return { type : actionTypes.loginClear }
    },

    loginNickNameStateChangedAction : function (newNickName) {
        creatorLog("login nickName changed : " + newNickName.value + " " + newNickName.status);
        return {
            type : actionTypes.loginNickNameStateChanged,
            nickNameState : newNickName
        }
    },

    loginPasswordStateChangedAction : function (newPassword) {
        creatorLog("login password changed : " + newPassword.value + " " + newPassword.status);
        return {
            type : actionTypes.loginPasswordStateChanged,
            passwordState : newPassword
        }
    },

    loginFailedAction : function() {
        return { type : actionTypes.loginFailed };
    },

    regClearAction : function() {
        return { type : actionTypes.regClear }
    },

    regFailedAction : function() {
        return { type : actionTypes.regFailed };
    },

    regNickNameStateChangedAction : function (nickNameState) {
        return {
            type : actionTypes.regNickNameChanged,
            nickNameState : nickNameState
        };
    },

    regNameStateChangedAction : function(nameState) {
        return {
            type : actionTypes.regNameChanged,
            nameState : nameState
        };
    },

    regSurnameStateChangedAction : function(surnameState) {
        return {
            type : actionTypes.regSurnameChanged,
            surnameState : surnameState
        };
    },

    regEmailStateChangedAction : function(emailState) {
        return {
            type : actionTypes.regEmailChanged,
            emailState : emailState
        };
    },

    regPasswordStateChangedAction : function(passwordState) {
        return {
            type : actionTypes.regPasswordChanged,
            passwordState : passwordState
        };
    },

    regConfirmPasswordStateChangedAction : function(conPassState) {
        return {
            type : actionTypes.regConfirmPasswordChanged,
            confirmPasswordState : conPassState
        }
    },

    webPanelLoadedAction : function (dirs) {
        return {
            type : actionTypes.webPanelLoaded,
            dirs : dirs
        }
    },

    webPanelLoadingFailedAction : function (message) {
        return {
            type : actionTypes.webPanelLoadingFailed,
            message : message
        }
    },

    bookmarksLoadedAction : function (dirs) {
        return {
            type : actionTypes.bookmarksLoaded,
            dirs : dirs
        }
    },

    bookmarksLoadingFailedAction : function (message) {
        return {
            type : actionTypes.bookmarksLoadingFailed,
            message : message
        }
    },

    toggleMainPageContentViewAction : function () {
        return {
            type : actionTypes.toggleMainPageContentView
        }
    },

    directoriesReorderedAction : function (place, oldOrder, newOrder) {
        return {
            type : actionTypes.directoriesReordered,
            place : place,
            oldOrder : oldOrder,
            newOrder : newOrder
        }
    },

    pagesReorderedAction : function (place, dirOrder, oldOrder, newOrder) {
        creatorLog("pages reorder: " +
            "place:" + place +
            " dirOrder:" + dirOrder +
            " oldOrder:" + oldOrder +
            " newOrder:" + newOrder);
        return {
            type : actionTypes.pagesReordered,
            place : place,
            oldOrder : oldOrder,
            newOrder : newOrder,
            dirOrder : dirOrder
        }
    },

    webObjectOperationFailedAction : function (operation, message) {
        return {
            type : actionTypes.webObjectOperationFailed,
            operation : operation,
            message : message
        }
    },

    directoryCreatedAction : function (currentView, newDirName) {
        return {
            type : actionTypes.directoryCreated,
            place : currentView,
            name : newDirName
        }
    },

    directoryRenamedAction : function (place, dirOrder, newDirName) {
        return {
            type : actionTypes.directoryRenamed,
            place : place,
            dirOrder : dirOrder,
            newDirName : newDirName
        }
    },

    directoryDeletedAction : function (place, dirOrder, name) {
        return {
            type : actionTypes.directoryDeleted,
            place : place,
            dirOrder : dirOrder,
            name : name
        }
    },

    pageCreatedAction : function (place, dirOrder, pageName, pageUrl) {
        return {
            type : actionTypes.pageCreated,
            place : place,
            dirOrder : dirOrder,
            pageName : pageName,
            pageUrl : pageUrl
        }
    },

    pageRenamedAction : function (place, dirOrder, pageOrder, newName) {
        return {
            type : actionTypes.pageRenamed,
            place : place,
            dirOrder : dirOrder,
            pageOrder : pageOrder,
            newName : newName
        }
    },

    pageUrlChangedAction : function (place, dirOrder, pageOrder, newUrl) {
        return {
            type : actionTypes.pageUrlChanged,
            place : place,
            dirOrder : dirOrder,
            pageOrder : pageOrder,
            newUrl : newUrl
        }
    },

    pageDeletedAction : function (place, dirOrder, pageOrder) {
        return {
            type : actionTypes.pageDeleted,
            dirOrder : dirOrder,
            pageOrder : pageOrder
        }
    },

    globalErrorAction : function (message) {
        return {
            type : actionTypes.globalError,
            message : message
        }
    }
};

module.exports = actionCreators;