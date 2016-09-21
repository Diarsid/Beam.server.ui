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
                <MainPageBarContainer />
                <MainPageContentContainer
                    reloadContent={this.props.loadInitialData}
                />
            </div>
        );
    }
});

module.exports = MainPage;