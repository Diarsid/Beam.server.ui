var React = require('react');
var Modal = require('react-modal');

/* custom modules */

var styles =
    require("./../../../../inline-styles/inline-styles.js");
var DialogButtonsPane =
    require("./dialog-buttons-pane.js");
var SelfValidatableFormField =
    require("./../../../common/self-validatable-form-field.js");
var validateUrl =
    require("./../../../../../network/prepared-ajax-calls/validate-page-url-call.js");
var validateName =
    require("./../../../../../network/prepared-ajax-calls/validate-webobject-name-call.js");
var createPage =
    require("./../web-objects-operations/page-create.js");

/* module code */

var initialControllerState = {
    open : false,
    newName : "",
    newUrl : ""
};

var CreatePageController = React.createClass({

    getInitialState : function () {
        return Object.assign({}, initialControllerState);
    },

    open : function () {
        this.setState({
            open : true
        });
    },

    isSubmitAllowed : function () {
        return (
            this.state.newName != "" &&
            this.state.newUrl != ""
        );
    },

    nameAvailable : function (name) {
        this.setState({
            newName : name
        });
    },

    urlAvailable : function (url) {
        this.setState({
            newUrl : url
        });
    },

    nameNotAvailable : function () {
        this.setState({
            newName : ""
        });
    },

    urlNotAvailable : function () {
        this.setState({
            newUrl : ""
        });
    },

    submitPageCreation : function () {
        createPage(
            this.props.userId,
            "webpanel",
            this.props.dirOrder,
            this.props.dirName,
            this.state.newName,
            this.state.newUrl);
        this.setState(Object.assign({}, initialControllerState));
    },

    cancelPageCreation : function () {
        this.setState(Object.assign({}, initialControllerState));
    },
    
    render: function () {
        return (
            <span className="create-page-controller">
                <button type="button"
                        className="create-page-button-on-directory-bar directory-bar-button"
                        onClick={this.open}>
                </button>
                <Modal
                    closeTimeoutMS={0}
                    isOpen={this.state.open}
                    shouldCloseOnOverlayClick={false}
                    style={styles.modalDialogStyle} >
                    
                    <label className="form-label">
                        Create new page in <b>{this.props.dirName}</b> directory:
                    </label>

                    <SelfValidatableFormField
                        placeholder="name..."
                        valueAvailableCallback={this.nameAvailable}
                        valueUnavailableCallback={this.nameNotAvailable}
                        validation={validateName} />
                    <SelfValidatableFormField
                        placeholder="http://..."
                        valueAvailableCallback={this.urlAvailable}
                        valueUnavailableCallback={this.urlNotAvailable}
                        validation={validateUrl} />

                    <DialogButtonsPane
                        submitAllowed={this.isSubmitAllowed()}
                        submitText="Create"
                        submitAction={this.submitPageCreation}
                        cancelAction={this.cancelPageCreation}
                    />
                </Modal>
            </span>
        );
    }
});

module.exports = CreatePageController;