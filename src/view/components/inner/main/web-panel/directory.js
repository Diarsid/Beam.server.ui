var React = require('react');

var Page =
    require("./page.js");

// ------------------

var Directory = React.createClass({
    render : function () {
        return (
            <div className="directory">
                {this.props.dir}
            </div>
        );
    }
});

module.exports = Directory;