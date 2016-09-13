var React = require('react');

var CreateDirController =
    require("./create-dir-controller.js");

// -----------------------

var MainPageBar = React.createClass({

    render : function () {
        return (
            <div className="main-page-bar">
                <button
                    type="button"
                    className="logout-button-on-main-page"
                    onClick={this.props.logout}>
                    Logout
                </button>
                <button
                    type="button"
                    className="toggle-main-page-content-view-button"
                    onClick={this.props.toggleContentView} >
                    {this.props.otherView}
                </button>
                <CreateDirController create={this.props.createDirectory} />
                Main page bar.
            </div>
        );
    }
});

module.exports = MainPageBar;