var React = require('react');
var Directory =
    require("./web-panel-cmpnts/directory/directory.js");

var Bookmarks = React.createClass({
    render: function () {
        var style = {
            display: "none"
        };

        var renderedDirs = [];
        var userId = this.props.userId;
        this.props.dirs.forEach((value, number, iterator) =>
            renderedDirs.push(
                <Directory
                    userId={userId}
                    dirName={value.get("name")}
                    pages={value.get("pages")}
                    dirOrder={number}
                    key={number}
                />)
        );
        return (
            <div className="bookmarks" style={style} >
                {renderedDirs}
            </div>
        );
    }
});

module.exports = Bookmarks;