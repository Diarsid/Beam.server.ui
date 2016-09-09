var React = require('react');

var MainPageBar =
    require("./../inner/main/common/main-page-bar.js");
var MainPageContent =
    require("./../inner/main/common/main-page-content.js");

// -------------------

var MainPage = React.createClass({

    componentWillMount : function () {
        this.props.loadInitialData();
    },

    render: function () {
        return (
            <div className="main-page">
                <button type="button"
                        className="logout-button-on-landing-page"
                        onClick={this.props.logout}>
                    Logout
                </button>
                <span>Welcome, {this.props.nickName}!</span>
                <MainPageBar />
                <MainPageContent dirs={this.props.webPanelDirs} />
            </div>
        );
    }
});

module.exports = MainPage;