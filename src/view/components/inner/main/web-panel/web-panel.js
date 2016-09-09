var React = require('react');

var Directory =
    require("./directory.js");

// --------------------

var WebPanel = React.createClass({
    render : function () {
        var self = this;
        var renderedDirs = this.props.dirs.map(function (dir) {
            return (
                <Directory
                    dir={dir}
                    key={dir.name} />
            );
        });
        return (
            <div className="web-panel">
                {renderedDirs}
            </div>
        );
    }
});

module.exports = WebPanel;