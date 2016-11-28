var actionTypes =
    require("./../actions/action-types.js");

var initialErrorPageState = {
    message: ""
};

function defineErrorPageState(errorPageState = initialErrorPageState, action) {
    switch (action.type) {

        case actionTypes.appStarts :
        case actionTypes.logout :
            return initialErrorPageState;

        case actionTypes.globalError :
            return Object.assign({}, errorPageState, {
                message : action.message
            });

        default :
            return errorPageState;
    }
}

module.exports = defineErrorPageState;