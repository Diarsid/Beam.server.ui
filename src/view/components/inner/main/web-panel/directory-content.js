var React = require('react');

var DirectoryContentList =
    require("./directory-content-list.js");

var DirectoryContent = React.createClass({
    render : function() {
        if ( this.props.pages.size > 0 ) {
            return (
                <div className="directory-content">
                    <DirectoryContentList
                        pages={this.props.pages}
                        dirName={this.props.dirName}
                        dirOrder={this.props.order}
                        reorderPages={this.props.reorderPages}

                        editPageUrl={this.props.editPageUrl}
                        editPageName={this.props.editPageName}
                        deletePage={this.props.deletePage}
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