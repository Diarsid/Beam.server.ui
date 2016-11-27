var React = require('react');

var PageMenu =
    require("./page-menu.js");

// -----------------

function triggerLog(message) {
    console.log("[APP] [PAGE MENU TRIGGER] " + message);
}

var triggerLeftTimeout;

var PageMenuTrigger = React.createClass({

    getInitialState : function () {
        return {
            triggerVisible : false,
            triggerActive : false
        };
    },

    setVisible : function (isVisible) {
        triggerLog("visible : " + isVisible);
        this.setState({ triggerVisible : isVisible });
    },

    triggerEntered : function () {
        triggerLog("entered.");
        this.setState({ triggerActive : true });
    },

    triggerLeft : function () {
        triggerLog("left");
        window.clearTimeout(triggerLeftTimeout);
        triggerLeftTimeout = window.setTimeout(
            () => this.setState({ triggerActive : false }),
            200);
    },

    menuEntered : function () {
        window.clearTimeout(triggerLeftTimeout);
    },

    menuLeft : function () {
        this.setState({ triggerActive : false });
    },

    getTriggerClassNames : function () {
       if ( this.state.triggerActive ) {
           return "page-menu-trigger page-menu-trigger-hover";
       } else {
           return "page-menu-trigger";
       }
    },

    render : function() {
        if ( this.state.triggerVisible ) {
            return (
                <div>
                    <div className={this.getTriggerClassNames()}
                         onMouseEnter={this.triggerEntered}
                         onMouseLeave={this.triggerLeft}
                    >
                    </div>
                    <PageMenu
                        isVisible={this.state.triggerActive}
                        menuEntered={this.menuEntered}
                        menuLeft={this.menuLeft}
                        renameDialogOpen={this.props.renameDialogOpen}
                        urlDialogOpen={this.props.urlDialogOpen}
                        deleteDialogOpen={this.props.deleteDialogOpen}
                    />
                </div>
            );
        } else {
            return null;
        }
    }
});

module.exports = PageMenuTrigger;