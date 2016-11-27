var React =
    require('react');
var ReactDOM =
    require('react-dom');
var $ =
    require("jquery");
require("jquery-ui");

/* custom modules */

var PageFrame =
    require("./../pages/page-frame.js");
var reorderPages =
    require("./../../../web-objects-operations/pages-reorder.js");

/* module code */

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
                reorderPages(
                    self.props.userId,
                    "webpanel",
                    self.props.dirName,
                    self.props.dirOrder,
                    movedPageName,
                    oldOrder,
                    newOrder);
                contentLog("page:" + movedPageName +
                    " moved from " + oldOrder +
                    " to " + newOrder);
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
                    userId={this.props.userId}
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