var React = require("react");

var ErrorPage = React.createClass({
    render: function () {
        return(
            <div className="error-page">Error page
                <button type="button"
                        className="go-to-registration-button"
                        onClick={this.props.renderRegPage}>
                    Registration
                </button>
                <button type="button"
                        className="go-to-login-button"
                        onClick={this.props.renderLoginPage}>
                    Login
                </button>
                <div>{this.props.title}</div>
                <div>{this.props.description}</div>
                <div>{this.props.source}</div>
            </div>
        );
    }
});

module.exports = ErrorPage;