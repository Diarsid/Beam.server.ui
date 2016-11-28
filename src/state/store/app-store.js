var createStore =
    require('redux').createStore;

/* custom modules */

var defineAppState =
    require("./../reducers/define-app-state.js");

/* module code */

var store = createStore(defineAppState);

module.exports = store;