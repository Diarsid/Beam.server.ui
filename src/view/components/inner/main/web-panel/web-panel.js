var React = require('react');
var ReactDOM = require('react-dom');
var $ = require("jquery");
require("jquery-ui");

var Directory =
    require("./directory.js");

// --------------------

function panelLog(message) {
    console.log("[APP] [WEBPANEL] " + message);
}

var WebPanel = React.createClass({

    componentDidMount: function () {
        var webPanelNode = $(ReactDOM.findDOMNode(this));
        var self = this;
        webPanelNode.sortable({
            items: '.directory',
            opacity: 0.5,
            tolerance: "pointer",
            start: function ( event, ui ) {
                panelLog("sorting starts...");
                ui.item.oldOrder = ui.item.index();
            },
            update: function ( event, ui ) {
                var newOrder = ui.item.index();
                var oldOrder = ui.item.oldOrder;
                var movedDirName = ui.item.find('.directory-bar')[0].textContent;
                panelLog("moved ("+ui.item.find('.directory-bar')[0].textContent+") : from " + ui.item.oldOrder + " to " + ui.item.index());
                webPanelNode.sortable('cancel');
                self.props.reorderDirectories("webpanel", oldOrder, newOrder);
            }

        }).disableSelection();
    },

    deleteDirInWebPanel : function (order, name) {
        this.props.deleteDirIn("webpanel", order, name);
    },

    renameDirInWebPanel : function (order, oldName, newName) {
        this.props.renameDirIn("webpanel", order, oldName, newName);
    },

    createPageInWebPanel : function (order, dirName, newPageName, newPageUrl) {
        this.props.createPageIn("webpanel", order, dirName, newPageName, newPageUrl);
    },

    reorderPagesInWebPanel : function (dirOrder, dirName, pageName, oldOrder, newOrder) {
        this.props.reorderPages("webpanel", dirOrder, dirName, pageName, oldOrder, newOrder);
    },

    editPageUrlInWebPanel : function (dirOrder, dirName, pageOrder, pageName, newUrl) {
        this.props.editPageUrlIn("webpanel", dirOrder, dirName, pageOrder, pageName, newUrl);
    },

    editPageNameInWebPanel : function (dirOrder, dirName, pageOrder, oldPageName, newPageName) {
        this.props.editPageNameIn("webpanel", dirOrder, dirName, pageOrder, oldPageName, newPageName);
    },

    deletePageInWebPanel : function (dirOrder, dirName, pageOrder, pageName) {
        this.props.deletePageIn("webpanel", dirOrder, dirName, pageOrder, pageName);
    },

    render : function () {
        var renderedDirs = [];
        this.props.dirs.forEach((value, number, iterator) =>
            renderedDirs.push(
                <Directory
                    name={value.get("name")}
                    pages={value.get("pages")}
                    order={number}
                    key={number}

                    deleteDir={this.deleteDirInWebPanel}
                    renameDir={this.renameDirInWebPanel}
                    createPage={this.createPageInWebPanel}
                    reorderPages={this.reorderPagesInWebPanel}

                    editPageUrl={this.editPageUrlInWebPanel}
                    editPageName={this.editPageNameInWebPanel}
                    deletePage={this.deletePageInWebPanel}
                />)
        );
        return (
            <div className="web-panel">
                {renderedDirs}
            </div>
        );
    }
});

module.exports = WebPanel;