var React = require('react');

var PageMenuTrigger =
    require("./page-menu-trigger.js");
var ModalDialog =
    require("./../common/modal-dialog.js");
var ModalSingleValueDialog =
    require("./../common/modal-single-value-dialog.js");
var validatePageName =
    require("./../../../../../network/prepared-ajax-calls/validate-webobject-name-call.js");
var validatePageUrl =
    require("./../../../../../network/prepared-ajax-calls/validate-page-url-call.js");

// ------------------------

var PageMenuContainer = React.createClass({

    getInitialState : function () {
        return {
            renameDialogOpen : false,
            urlDialogOpen : false,
            deleteDialogOpen : false
        };
    },

    submitRename : function (newName) {
        this.props.editPageName(this.props.pageOrder, this.props.pageName, newName);
        this.setState({ renameDialogOpen : false });
    },

    cancelRename : function () {
        this.setState({ renameDialogOpen : false });
    },

    submitUrlChange : function (newUrl) {
        this.props.editPageUrl(this.props.pageOrder, this.props.pageName, newUrl);
        this.setState({ urlDialogOpen : false });
    },

    cancelUrlChange : function () {
        this.setState({ urlDialogOpen : false });
    },

    submitDelete : function () {
        this.props.deletePage(this.props.pageOrder, this.props.pageName);
        this.setState({ deleteDialogOpen : false });
    },

    cancelDelete : function () {
        this.setState({ deleteDialogOpen : false });
    },
    menuTrigger : {},

    pageFrameHover : function (isHover) {
        this.menuTrigger.setVisible(isHover);
    },

    renameDialogOpen : function () {
        this.setState({ renameDialogOpen : true });
    },

    urlDialogOpen : function () {
        this.setState({ urlDialogOpen : true });
    },

    deleteDialogOpen : function () {
        this.setState({ deleteDialogOpen : true });
    },

    render: function () {
        return (
            <div className="page-menu-container">
                <PageMenuTrigger
                    ref={(component) => this.menuTrigger = component}
                    renameDialogOpen={this.renameDialogOpen}
                    urlDialogOpen={this.urlDialogOpen}
                    deleteDialogOpen={this.deleteDialogOpen}
                />

                <ModalSingleValueDialog
                    key="edit name"
                    isOpen={this.state.renameDialogOpen}
                    validation={validatePageName}
                    placeholder="name..."
                    submitText="Rename"
                    submit={this.submitRename}
                    cancel={this.cancelRename}>
                    Rename <b>{this.props.pageName}</b> page to:
                </ModalSingleValueDialog>

                <ModalSingleValueDialog
                    key="edit url"
                    isOpen={this.state.urlDialogOpen}
                    validation={validatePageUrl}
                    placeholder="url..."
                    submitText="Change"
                    submit={this.submitUrlChange}
                    cancel={this.cancelUrlChange}>
                    Change <b>{this.props.pageName}</b> page URL to:
                </ModalSingleValueDialog>

                <ModalDialog
                    isOpen={this.state.deleteDialogOpen}
                    submitText="Delete"
                    submitAction={this.submitDelete}
                    cancelAction={this.cancelDelete}
                >
                    Delete <b>{this.props.pageName}</b> page from <b>{this.props.dirName}</b> ?
                </ModalDialog>

            </div>
        );
    }
});

module.exports = PageMenuContainer;