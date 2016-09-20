var React = require('react');
var ReactDOM = require('react-dom');
var $ = require("jquery");
require("jquery-ui");

var PageFrame =
    require("./page-frame.js");

function contentLog(message) {
    console.log("[APP] [DIRECTORY CONTENT LIST] " + message);
}

var DirectoryContentList = React.createClass({

    componentDidMount: function () {
        var dirContentNode = $(ReactDOM.findDOMNode(this));
        var self = this;
        dirContentNode.sortable({
            items: '.page-frame',
            opacity: 0.5,
            tolerance: "pointer",
            start: function ( event, ui ) {
                ui.item.oldOrder = ui.item.index();
            },
            update: function ( event, ui ) {
                var newOrder = ui.item.index();
                var oldOrder = ui.item.oldOrder;
                var movedPageName = ui.item.context.textContent;
                dirContentNode.sortable('cancel');
                self.props.reorderPages(movedPageName, oldOrder, newOrder);
                contentLog("page:" + movedPageName + " moved from " + oldOrder + " to " + newOrder);
            }
        }).disableSelection();
    },

    render : function () {
        var renderedPages = [];
        contentLog("rendering pages...");
        this.props.pages.forEach((value, number, iterator) => {
            renderedPages.push(
                <PageFrame
                    key={number}
                    name={value.get("name")}
                    url={value.get("url")}
                    order={number}
                    dirName={this.props.dirName}
                    dirOrder={this.props.dirOrder}
                />
            );
            contentLog("  " + number + ": " + value.get("name"));
        });
        contentLog("rendering finished.");
        return (
            <ul className="directory-content-list">
                {renderedPages}
            </ul>
        );
    }
});

module.exports = DirectoryContentList;