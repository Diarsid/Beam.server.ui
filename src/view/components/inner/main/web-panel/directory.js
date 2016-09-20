var React = require('react');

var DirectoryBar =
    require("./directory-bar.js");
var DirectoryContent =
    require("./directory-content.js");

// ------------------

var Directory = React.createClass({

    deleteThisDir : function () {
        this.props.deleteDir(this.props.order, this.props.name);
    },

    createPageInThisDir : function (name, url) {
        this.props.createPage(this.props.order, this.props.name, name, url);
    },

    renameThisDir : function (newName) {
        this.props.renameDir(this.props.order, this.props.name, newName);
    },

    reorderPagesInThisDir : function (pageName, oldOrder, newOrder) {
        this.props.reorderPages(
            this.props.order, this.props.name, pageName, oldOrder, newOrder);
    },

    isEmptyDir : function () {
        return ( this.props.pages.size == 0 );
    },

    render : function () {
        return (
            <div className="directory">
                <DirectoryBar
                    isEmptyDir={this.isEmptyDir()}
                    dirName={this.props.name}
                    deleteDir={this.deleteThisDir}
                    createPage={this.createPageInThisDir}
                    renameTo={this.renameThisDir}
                    dirOrder={this.props.order}
                />
                <DirectoryContent
                    pages={this.props.pages}
                    dirName={this.props.name}
                    dirOrder={this.props.order}
                    reorderPages={this.reorderPagesInThisDir}
                />
            </div>
        );
    }
});

module.exports = Directory;