var createStore = require('redux').createStore;

var defineAppState = require("./../reducers/define-app-state-reducer.js");
var store = createStore(defineAppState);

module.exports = store;