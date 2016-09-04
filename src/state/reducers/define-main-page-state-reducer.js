var actionTypes =
    require("./../actions/action-types.js");

var mainPageInitialState = {
    content : "Main page accessed."
};

function defineMainPageState(mainPageState = mainPageInitialState, action) {
    switch (action.type) {

        default :
            return mainPageInitialState;
    }
}

module.exports = defineMainPageState;