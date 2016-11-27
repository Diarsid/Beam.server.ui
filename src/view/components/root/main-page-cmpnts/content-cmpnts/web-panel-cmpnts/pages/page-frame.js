var React = require('react');

/* custom modules */

var PageImageFrame =
    require("./page-image-frame.js");
var PageTitle =
    require("./page-title.js");
var PageMenuContainer =
    require("./page-menu-controller.js");

/* module code */

var PageFrame = React.createClass({

    menuContainer : {},

    showMenuTrigger : function () {
        this.menuContainer.pageFrameHover(true);
    },

    hideMenuTrigger : function () {
        this.menuContainer.pageFrameHover(false);
    },

    render : function () {
        return (
            <li className="page-frame"
                onMouseEnter={this.showMenuTrigger}
                onMouseLeave={this.hideMenuTrigger}
            >
                <a href={this.props.url}
                   target="_blank"
                   rel='noopener noreferrer' >
                    <PageImageFrame image="./web-globe-n.png" />
                    <PageTitle text={this.props.name} />
                </a>
                <PageMenuContainer
                    userId={this.props.userId}
                    dirName={this.props.dirName}
                    dirOrder={this.props.dirOrder}
                    pageName={this.props.name}
                    pageOrder={this.props.order}
                    ref={(component) => this.menuContainer = component}
                />
            </li>
        );
    }
});

module.exports = PageFrame;