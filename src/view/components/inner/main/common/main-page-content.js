var React = require('react');
var $ = require('jquery');
require('jquery-ui');

var WebPanel =
    require("./../web-panel/web-panel.js");
var Bookmarks =
    require("./../bookmarks/bookmarks.js");

// ---------------

var MainPageContent = React.createClass({

    componentWillReceiveProps: function(nextProps) {
        if ( nextProps.currentView != this.props.currentView ) {
            $(".bookmarks").toggle("slide", { direction: "left" });
            $(".web-panel").toggle("slide", { direction: "right" });
        }
    },

    render: function () {
        return (
            <div className="main-page-content">

                <WebPanel
                    dirs={this.props.webPanelDirs}

                    reorderDirectories={this.props.reorderDirectories}
                    reorderPages={this.props.reorderPages}

                    createPageIn={this.props.createPageIn}
                    deleteDirIn={this.props.deleteDirIn}
                    renameDirIn={this.props.renameDirIn}

                    editPageUrlIn={this.props.editPageUrlIn}
                    editPageNameIn={this.props.renamePageIn}
                    deletePageIn={this.props.deletePageIn}
                />

                <Bookmarks
                    dirs={this.props.bookmarksDirs}

                    reorderDirectories={this.props.reorderDirectories}
                    reorderPages={this.props.reorderPages}

                    createPageIn={this.props.createPageIn}
                    deleteDirIn={this.props.deleteDirIn}
                    renameDirIn={this.props.renameDirIn}

                    editPageUrlIn={this.props.editPageUrlIn}
                    editPageNameIn={this.props.renamePageIn}
                    deletePageIn={this.props.deletePageIn}
                />

            </div>
        );
    }
});

module.exports = MainPageContent;