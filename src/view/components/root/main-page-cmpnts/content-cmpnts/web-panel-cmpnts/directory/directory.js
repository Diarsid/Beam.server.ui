var React = require('react');

/* custom modules */

var DirectoryBar =
    require("./directory-bar.js");
var DirectoryContent =
    require("./directory-content.js");

/* module code */

var Directory = React.createClass({

    isEmptyDir : function () {
        return ( this.props.pages.size == 0 );
    },

    render : function () {
        return (
            <div className="directory">
                <DirectoryBar
                    userId={this.props.userId}
                    isEmptyDir={this.isEmptyDir()}
                    dirName={this.props.dirName}
                    dirOrder={this.props.dirOrder}
                />
                <DirectoryContent
                    userId={this.props.userId}
                    pages={this.props.pages}
                    dirName={this.props.dirName}
                    dirOrder={this.props.dirOrder}
                />
            </div>
        );
    }
});

module.exports = Directory;