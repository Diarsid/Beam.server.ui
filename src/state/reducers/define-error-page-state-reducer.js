var actionTypes =
    require("./../actions/action-types.js");

var errorPageInitialState = {};

function defineErrorPageState(errorPageState = errorPageInitialState, action) {
    switch (action.type) {

        default :
            return errorPageInitialState;
    }
}

module.exports = defineErrorPageState;