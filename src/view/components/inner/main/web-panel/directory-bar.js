var React = require('react');

var CreatePageController =
    require("./../common/modal-button-controller-create-page.js");
var DeleteDirController =
    require("./../common/modal-button-controller-delete-dir.js");
var RenameDirController =
    require("./../common/modal-button-controller-rename-dir.js");

// -------------------------

var DirectoryBar = React.createClass({

    defineBarClass : function () {
        if ( this.props.isEmptyDir ) {
            return "directory-bar directory-bar-empty";
        } else {
            return "directory-bar directory-bar-nonempty";
        }
    },

    render : function () {
        return (
            <div className={this.defineBarClass()}>
                <span>
                    <CreatePageController
                        createPage={this.props.createPage}
                        dirName={this.props.dirName}
                    />
                    <RenameDirController
                        dirName={this.props.dirName}
                        renameTo={this.props.renameTo}
                    />
                    <span className="directory-bar-title">{this.props.dirName}</span>
                    <DeleteDirController
                        dirName={this.props.dirName}
                        delete={this.props.deleteDir}
                    />
                </span>
            </div>
        );
    }
});

module.exports = DirectoryBar;