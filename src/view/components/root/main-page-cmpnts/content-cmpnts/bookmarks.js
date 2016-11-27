var React = require('react');

var Bookmarks = React.createClass({
    render: function () {
        var style = {
            display: "none"
        };
        return (
            <div className="bookmarks"
                style={style}>
                Bookmarks...
            </div>
        );
    }
});

module.exports = Bookmarks;