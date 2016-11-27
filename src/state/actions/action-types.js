var actionTypes = {

    appStarts : "APP_STARTS",

    userInfoDelivered : "STORED_USER_INFO_IS_VALID",

    loginNickNameStateChanged : "LOGIN_NICK_NAME_CHANGED",
    loginPasswordStateChanged : "LOGIN_PASSWORD_CHANGED",
    loginClear : "LOGIN_CLEAR",
    loginFailed : "LOGIN_FAILED",

    regNickNameChanged : "REGISTR_NICK_NAME_CHANGED",
    regNameChanged : "REGISTR_NAME_CHANGED",
    regSurnameChanged : "REGISTR_SURNAME_CHANGED",
    regEmailChanged : "REGISTR_EMAIL_CHANGED",
    regPasswordChanged : "REGISTR_PASSWORD_CHANGED",
    regConfirmPasswordChanged : "REGISTR_CONFIRM_PASSWORD_CHANGED",
    regClear : "REGISTR_CLEAR",
    regFailed : "REGISTR_FAILED",

    logout : "LOGOUT",

    webPanelLoaded : "WEB_PANEL_LOADED",
    webPanelLoadingFailed : "WEB_PANEL_LOADING_FAILED",

    bookmarksLoaded : "BOOKMARKS_LOADED",
    bookmarksLoadingFailed : "BOOKMARKS_LOADING_FAILED",

    webObjectOperationFailed : "WEB_OBJECT_OPERATION_FAILED",

    directoryCreated : "DIR_CREATED",
    directoryRenamed : "DIR_RENAMED",
    directoryDeleted : "DIR_REMOVED",

    pageCreated : "PAGE_CREATED",
    pageRenamed : "PAGE_RENAMED",
    pageUrlChanged : "PAGE_URL_CHANGED",
    pageDeleted : "PAGE_DELETED",

    toggleMainPageContentView : "TOGGLE_MAIN_PAGE_CONTENT",

    directoriesReordered : "DIRECTORIES_REORDERED",
    pagesReordered : "PAGES_REORDERED"
};

module.exports = actionTypes;