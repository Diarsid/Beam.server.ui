var React =
    require('react');
var ReactDOM =
    require('react-dom');
var $ =
    require("jquery");
require("jquery-ui");

/* custom modules */

var Directory =
    require("./web-panel-cmpnts/directory/directory.js");
var reorderDirectories =
    require("./../web-objects-operations/directory-reorder.js");

/* module code */

function panelLog(message) {
    console.log("[APP] [WEBPANEL] " + message);
}

var WebPanel = React.createClass({

    componentDidMount: function () {
        var webPanelNode = $(ReactDOM.findDOMNode(this));
        var userId = this.props.userId;
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
                panelLog("moved (" +
                    ui.item.find('.directory-bar')[0].textContent +
                    ") : from " + ui.item.oldOrder +
                    " to " + ui.item.index());
                webPanelNode.sortable('cancel');
                reorderDirectories(
                    userId, "webpanel", movedDirName, oldOrder, newOrder);
            }
        }).disableSelection();
    },

    render : function () {
        var renderedDirs = [];
        var userId = this.props.userId;
        this.props.dirs.forEach((value, number, iterator) =>
            renderedDirs.push(
                <Directory
                    userId={userId}
                    dirName={value.get("name")}
                    pages={value.get("pages")}
                    dirOrder={number}
                    key={number}
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