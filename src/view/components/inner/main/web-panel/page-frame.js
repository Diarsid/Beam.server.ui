var React = require('react');

var PageImageFrame =
    require("./page-image-frame.js");
var PageTitle =
    require("./page-title.js");
var PageMenuContainer =
    require("./page-menu-container.js");

// ---------------------------

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
                    dirName={this.props.dirName}
                    pageName={this.props.name}
                    pageOrder={this.props.order}
                    ref={(component) => this.menuContainer = component}

                    editPageUrl={this.props.editPageUrl}
                    editPageName={this.props.editPageName}
                    deletePage={this.props.deletePage}
                />
            </li>
        );
    }
});

module.exports = PageFrame;