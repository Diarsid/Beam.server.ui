var React = require("react");

var ErrorPage = React.createClass({
    render: function () {
        return(
            <div className="error-page">Error page
                <div>{this.props.error.title}</div>
                <div>{this.props.error.description}</div>
                <div>{this.props.error.source}</div>
            </div>
        );
    }
});

module.exports = ErrorPage;