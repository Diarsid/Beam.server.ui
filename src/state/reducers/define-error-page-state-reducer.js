var actionTypes =
    require("./../actions/action-types.js");

var initialErrorPageState = {
    message: ""
};

function defineErrorPageState(errorPageState = initialErrorPageState, action) {
    switch (action.type) {

        case actionTypes.appStarts :
            return initialErrorPageState;

        case actionTypes.logout :
            return initialErrorPageState;

        case actionTypes.goToError :
            return Object.assign({}, errorPageState, {
                message : action.message
            });
        default :
            return errorPageState;
    }
}

module.exports = defineErrorPageState;