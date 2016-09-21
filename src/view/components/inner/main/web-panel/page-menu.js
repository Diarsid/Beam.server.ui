var React = require('react');

var PageMenuItem =
    require("./page-menu-item");

// ----------------------

var PageMenu = React.createClass({

    render: function () {
        if ( this.props.isVisible ) {
            return (
                <div className="page-menu"
                    onMouseEnter={this.props.menuEntered}
                    onMouseLeave={this.props.menuLeft}
                >
                    <PageMenuItem
                        key="rename"
                        activeIcon="./img/edit-page-active.png"
                        inactiveIcon="./img/edit-page-inactive.png"
                        text="rename"
                        clicked={this.props.renameDialogOpen}
                    />
                    <PageMenuItem
                        key="change url"
                        activeIcon="./img/edit-page-active.png"
                        inactiveIcon="./img/edit-page-inactive.png"
                        text="change url"
                        clicked={this.props.urlDialogOpen}
                    />
                    <PageMenuItem
                        key="delete"
                        activeIcon="./img/del-active.png"
                        inactiveIcon="./img/del-inactive.png"
                        text="delete"
                        clicked={this.props.deleteDialogOpen}
                    />

                </div>
            );
        } else {
            return null;
        }
    }
});

module.exports = PageMenu;