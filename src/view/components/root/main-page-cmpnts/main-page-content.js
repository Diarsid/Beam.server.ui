var React = require('react');
var $ = require('jquery');
require('jquery-ui');

/* custom modules */

var WebPanel =
    require("./content-cmpnts/web-panel.js");
var Bookmarks =
    require("./content-cmpnts/bookmarks.js");
var loadAllDirectories =
    require("./web-objects-operations/load-all-directories.js");

/* module code */

var MainPageContent = React.createClass({

    componentDidMount : function () {
        console.log("[MAIN CONTENT] did mount, user id" + this.props.userId);
        loadAllDirectories(this.props.userId, "webpanel");
        loadAllDirectories(this.props.userId, "bookmarks");
    },

    componentWillReceiveProps: function(nextProps) {
        if ( nextProps.currentView != this.props.currentView ) {
            $(".bookmarks").toggle("slide", { direction: "left" });
            $(".web-panel").toggle("slide", { direction: "right" });
        }
    },

    render: function () {
        console.log("[MAIN CONTENT] render, user id" + this.props.userId);
        return (
            <div className="main-page-content">
                <WebPanel
                    userId={this.props.userId}
                    dirs={this.props.webPanelDirs}
                />
                <Bookmarks
                    userId={this.props.userId}
                    dirs={this.props.bookmarksDirs}
                />
            </div>
        );
    }
});

module.exports = MainPageContent;