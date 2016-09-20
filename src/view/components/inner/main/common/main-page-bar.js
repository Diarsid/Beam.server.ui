var React = require('react');

var CreateDirController =
    require("./modal-button-controller-create-dir.js");

// -----------------------

var MainPageBar = React.createClass({

    render : function () {
        return (
            <div className="main-page-bar">
                <button
                    type="button"
                    className="logout-button-on-main-page main-page-bar-button"
                    onClick={this.props.logout}>
                </button>
                <button
                    type="button"
                    className="toggle-main-page-content-view-button main-page-bar-button"
                    onClick={this.props.toggleContentView} >
                    {this.props.otherView}
                </button>
                <CreateDirController create={this.props.createDirectory} />
            </div>
        );
    }
});

module.exports = MainPageBar;