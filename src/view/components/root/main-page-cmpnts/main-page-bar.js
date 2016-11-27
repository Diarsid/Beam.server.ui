var React = require('react');

/* custom modules */

var logout = require("./../../../../global-util/logout.js");
var CreateDirController =
    require("./common/modal-button-controller-create-dir.js");
var ModalDialog =
    require("./common/modal-dialog.js");

/* module code */

var MainPageBar = React.createClass({

    getInitialState : function () {
        return { logoutDialogOpen : false };
    },

    openLogout : function () {
        this.setState({ logoutDialogOpen : true });
    },

    submitLogout : function () {
        this.setState({ logoutDialogOpen : false });
        logout();
    },

    cancelLogout : function () {
        this.setState({ logoutDialogOpen : false });
    },

    render : function () {
        return (
            <div className="main-page-bar">
                <button
                    type="button"
                    className="logout-button-on-main-page main-page-bar-button"
                    onClick={this.openLogout}
                >
                </button>
                <button
                    type="button"
                    className="toggle-main-page-content-view-button main-page-bar-button"
                    onClick={this.props.toggleContentView}
                >
                    {this.props.otherView}
                </button>
                <CreateDirController
                    create={this.props.createDirectory}
                />
                <ModalDialog
                    isOpen={this.state.logoutDialogOpen}
                    submitText="Logout"
                    submitAction={this.submitLogout}
                    cancelAction={this.cancelLogout}
                >
                    Logout?
                </ModalDialog>
            </div>
        );
    }
});

module.exports = MainPageBar;