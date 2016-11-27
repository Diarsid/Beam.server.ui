var createStore = require('redux').createStore;

var defineAppState = require("./../reducers/define-app-state.js");
var store = createStore(defineAppState);

module.exports = store;