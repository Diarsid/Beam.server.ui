var React = require("react");

var appStorage = require('../../app-storage.js');

var MainPage = React.createClass({
    render: function () {
        return(
            <div className="main-page">
                <button type="button"
                        className="logout-button"
                        onClick={this.props.logout}>
                    Logout
                </button>
                <div>
                    Welcome, {localStorage.getItem(appStorage.userNickNameKey)}
                </div>
                <div>
                    Main page
                </div>
            </div>
        );
    }
});

module.exports = MainPage;