var React = require('react');

/* custom modules */

var CreatePageController =
    require("./../../../common/modal-button-controller-create-page.js");
var DeleteDirController =
    require("./../../../common/modal-button-controller-delete-dir.js");
var RenameDirController =
    require("./../../../common/modal-button-controller-rename-dir.js");

/* module code */

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
                        userId={this.props.userId}
                        dirOrder={this.props.dirOrder}
                        dirName={this.props.dirName}
                    />
                    <RenameDirController
                        userId={this.props.userId}
                        dirOrder={this.props.dirOrder}
                        dirName={this.props.dirName}
                    />
                    <span className="directory-bar-title">{this.props.dirName}</span>
                    <DeleteDirController
                        userId={this.props.userId}
                        dirOrder={this.props.dirOrder}
                        dirName={this.props.dirName}
                    />
                </span>
            </div>
        );
    }
});

module.exports = DirectoryBar;