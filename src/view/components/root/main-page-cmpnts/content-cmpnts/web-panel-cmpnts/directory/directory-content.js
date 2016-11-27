var React = require('react');

/* custom modules */

var DirectoryContentList =
    require("./directory-content-list.js");

/* module code */

var DirectoryContent = React.createClass({
    render : function() {
        if ( this.props.pages.size > 0 ) {
            return (
                <div className="directory-content">
                    <DirectoryContentList
                        pages={this.props.pages}
                        userId={this.props.userId}
                        dirName={this.props.dirName}
                        dirOrder={this.props.dirOrder}
                    />
                    <br/>
                </div>
            );
        } else {
            return null;
        }
    }
});

module.exports = DirectoryContent;