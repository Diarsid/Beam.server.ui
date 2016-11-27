var React = require('react');

var MainPageBarContainer =
    require("./main-page-cmpnts/main-page-bar-container.js");
var MainPageContentContainer =
    require("./main-page-cmpnts/main-page-content-container.js");

// -------------------

var MainPage = React.createClass({

    render: function () {
        return (
            <div className="main-page">
                <MainPageBarContainer />
                <MainPageContentContainer />
            </div>
        );
    }
});

module.exports = MainPage;