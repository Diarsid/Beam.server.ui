var actionTypes =
    require("./../actions/action-types.js");

var errorPageInitialState = {
    message: ""
};

function defineErrorPageState(errorPageState = errorPageInitialState, action) {
    switch (action.type) {

        case actionTypes.appStarts :
            return errorPageInitialState;

        case actionTypes.goToError :
            return Object.assign({}, errorPageState, {
                message : action.message
            });
        default :
            return errorPageState;
    }
}

module.exports = defineErrorPageState;