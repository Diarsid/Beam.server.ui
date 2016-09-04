var React = require('react');

var MainPage = React.createClass({

    render: function () {
        return (
            <div className="main-page">
                <span>Welcome, {this.props.nickName}!</span>
            </div>
        );
    }
});

module.exports = MainPage;