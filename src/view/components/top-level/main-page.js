var React = require('react');

var MainPage = React.createClass({

    render: function () {
        return (
            <div className="main-page">
                <button type="button"
                        className="logout-button-on-landing-page"
                        onClick={this.props.logout}>
                    Logout
                </button>
                <span>Welcome, {this.props.nickName}!</span>
            </div>
        );
    }
});

module.exports = MainPage;