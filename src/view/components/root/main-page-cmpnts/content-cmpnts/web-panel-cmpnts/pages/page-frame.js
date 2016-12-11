var React = require('react');

/* custom modules */

var PageImageFrame =
    require("./page-image-frame.js");
var PageTitle =
    require("./page-title.js");
var PageMenuContainer =
    require("./page-menu-controller.js");
var inlineStyles = require("./../../../../../../../view/inline-styles/inline-styles.js");

/* module code */

var PageFrame = React.createClass({

    menuContainer : {},

    getInitialState : function () {
        return ({
            pageFrameStyle : inlineStyles.pageFrameStyle.inactive
        });
    },

    mouseEnter : function () {
        this.menuContainer.pageFrameHover(true);
        this.setState({
            pageFrameStyle : inlineStyles.pageFrameStyle.active
        });
    },

    mouseLeave : function () {
        this.menuContainer.pageFrameHover(false);
        this.setState({
            pageFrameStyle : inlineStyles.pageFrameStyle.inactive
        });
    },

    render : function () {
        return (
            <li className="page-frame"
                onMouseEnter={this.mouseEnter}
                onMouseLeave={this.mouseLeave}
                style={this.state.pageFrameStyle}
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