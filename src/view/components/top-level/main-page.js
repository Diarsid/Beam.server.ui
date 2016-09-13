var React = require('react');

var MainPageBarContainer =
    require("./../../containers/inner/main/common/main-page-bar-container.js");
var MainPageContentContainer =
    require("./../../containers/inner/main/common/main-page-content-container.js");

// -------------------

var MainPage = React.createClass({

    componentWillMount : function () {
        this.props.loadInitialData();
    },

    render: function () {
        return (
            <div className="main-page">
                <span>Main page.</span>
                <MainPageBarContainer />
                <MainPageContentContainer />
            </div>
        );
    }
});

module.exports = MainPage;