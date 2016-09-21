var React = require('react');

var PageMenuItem = React.createClass({

    getInitialState : function () {
        return {
            hover : false
        }
    },

    defineIcon : function () {
        if ( this.state.hover ) {
            return this.props.activeIcon;
        } else {
            return this.props.inactiveIcon;
        }
    },

    toggleHover : function () {
        this.setState({ hover : !this.state.hover });
    },

    render: function () {
        return (
            <div className="page-menu-item"
                onMouseEnter={this.toggleHover}
                onMouseLeave={this.toggleHover}
                onClick={this.props.clicked}
            >
                <img className="page-menu-item-icon" src={this.defineIcon()} />
                <span className="page-menu-item-text">
                    {this.props.text}
                </span>
            </div>
        );
    }
});

module.exports = PageMenuItem;