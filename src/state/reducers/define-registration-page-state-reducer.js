var actionTypes =
    require("./../actions/action-types.js");

var regPageInitialState = {};

function defineRegistrationPageState(regPageState = regPageInitialState, action) {
    switch (action.type) {

        default :
            return regPageInitialState;
    }
}

module.exports = defineRegistrationPageState;