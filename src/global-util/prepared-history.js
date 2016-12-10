var syncHistoryWithStore =
    require('react-router-redux').syncHistoryWithStore;
var createHistory =
    require("history").createHistory;
var useBaseName =
    require("history").useBasename;
var useRouterHistory =
    require("react-router").useRouterHistory;

/* custom modules */

var appStore =
    require("./../state/store/app-store.js");
var appUrlState =
    require("./app-url-state.js");

/* module code */

var history = useRouterHistory(createHistory)({
    basename: "/" + appUrlState.appName
});

var preparedHistory = syncHistoryWithStore(history, appStore);

module.exports = preparedHistory;